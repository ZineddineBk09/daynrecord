"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";

interface Stats {
	contracts_generated: number;
	pdf_downloads: number;
	share_links_copied: number;
	fetched_at: string;
}

export default function StatsPage() {
	const [secret, setSecret] = useState("");
	const [stats, setStats] = useState<Stats | null>(null);
	const [error, setError] = useState("");
	const [loading, setLoading] = useState(false);
	const [authenticated, setAuthenticated] = useState(false);

	const fetchStats = useCallback(async (key: string) => {
		setLoading(true);
		setError("");
		try {
			const res = await fetch(`/api/track?secret=${encodeURIComponent(key)}`);
			if (!res.ok) {
				setError(res.status === 401 ? "Wrong secret key" : "Failed to fetch stats");
				return;
			}
			const data = await res.json();
			setStats(data);
			setAuthenticated(true);
		} catch {
			setError("Could not connect to the server");
		} finally {
			setLoading(false);
		}
	}, []);

	const handleSubmit = useCallback(
		(e: React.FormEvent) => {
			e.preventDefault();
			if (secret.trim()) fetchStats(secret.trim());
		},
		[secret, fetchStats]
	);

	useEffect(() => {
		if (authenticated && secret) {
			const interval = setInterval(() => fetchStats(secret), 30_000);
			return () => clearInterval(interval);
		}
	}, [authenticated, secret, fetchStats]);

	return (
		<>
			<header className="border-b border-islamic-gold-200/50 bg-white/60 backdrop-blur-md sticky top-0 z-50">
				<div className="max-w-3xl mx-auto px-4 py-2 flex items-center gap-2.5">
					<Link href="/" className="flex items-center gap-2.5">
						<Image src="/logo/logo-no-text.png" alt="DaynRecord" width={40} height={40} className="shrink-0" />
						<div>
							<h1 className="font-amiri text-xl text-islamic-green-900 font-bold leading-tight">DaynRecord</h1>
							<p className="text-xs text-islamic-green-700/70">Analytics</p>
						</div>
					</Link>
				</div>
			</header>

			<main className="flex-1 flex items-center justify-center px-4 py-12">
				<div className="max-w-md w-full">
					{!authenticated ? (
						<div className="islamic-card p-6 sm:p-8">
							<h2 className="font-amiri text-islamic-green-900 text-2xl font-bold mb-2 text-center">Stats Dashboard</h2>
							<p className="text-sm text-gray-500 text-center mb-6">Enter your secret key to view analytics</p>
							<form onSubmit={handleSubmit} className="space-y-4">
								<input
									type="password"
									className="islamic-input"
									placeholder="Secret key..."
									value={secret}
									onChange={(e) => setSecret(e.target.value)}
									autoFocus
								/>
								<button
									type="submit"
									disabled={!secret.trim() || loading}
									className="islamic-btn-primary w-full justify-center disabled:opacity-50"
								>
									{loading ? "Loading..." : "View Stats"}
								</button>
							</form>
							{error && <p className="text-red-500 text-sm mt-3 text-center">{error}</p>}
						</div>
					) : stats ? (
						<div className="space-y-4">
							<div className="islamic-card p-6 text-center">
								<p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Contracts Generated</p>
								<p className="font-amiri text-5xl font-bold text-islamic-green-900">{stats.contracts_generated}</p>
							</div>
							<div className="grid grid-cols-2 gap-4">
								<div className="islamic-card p-5 text-center">
									<p className="text-xs text-gray-500 mb-1">PDF Downloads</p>
									<p className="font-amiri text-3xl font-bold text-islamic-green-900">{stats.pdf_downloads}</p>
								</div>
								<div className="islamic-card p-5 text-center">
									<p className="text-xs text-gray-500 mb-1">Share Links</p>
									<p className="font-amiri text-3xl font-bold text-islamic-green-900">{stats.share_links_copied}</p>
								</div>
							</div>
							<p className="text-xs text-gray-400 text-center">
								Last updated: {new Date(stats.fetched_at).toLocaleString()}
								<br />Auto-refreshes every 30s
							</p>
						</div>
					) : null}
				</div>
			</main>
		</>
	);
}
