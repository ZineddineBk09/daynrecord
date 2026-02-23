"use client";

import { useI18n } from "@/lib/i18n";
import { getCurrencySymbol } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";

import { IslamicBorder } from "@/components/IslamicBorder";
import { LanguageSelector } from "@/components/LanguageSelector";

interface SharePayload {
	creditor_name: string;
	debtor_name: string;
	amount: string;
	currency: string;
	due_date: string;
	verification_code: string;
	document_hash: string;
	generated_at: string;
	witnesses: string[];
}

type PageState = {
	status: "empty" | "preview" | "error";
	message: string;
	preview?: SharePayload;
};

function VerifyContent() {
	const searchParams = useSearchParams();
	const { t } = useI18n();
	const [state, setState] = useState<PageState>({ status: "empty", message: "" });

	useEffect(() => {
		const encodedData = searchParams.get("data");
		if (!encodedData) {
			setState({ status: "empty", message: "" });
			return;
		}
		try {
			const decoded = decodeURIComponent(escape(atob(encodedData)));
			const parsed = JSON.parse(decoded);
			if (parsed.document_hash) {
				setState({
					status: "preview",
					message: t.verify_preview_message,
					preview: parsed as SharePayload
				});
			}
		} catch {
			setState({ status: "error", message: t.verify_error_decode });
		}
	}, [searchParams, t]);

	const symbol = state.preview ? getCurrencySymbol(state.preview.currency) : "";

	return (
		<div className="mx-auto max-w-2xl">
			{/* Page header */}
			<div className="mb-8 text-center sm:mb-10">
				<div className="bg-islamic-green-800/10 mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full">
					<svg
						className="text-islamic-green-800 h-8 w-8"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						strokeWidth={1.5}>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
						/>
					</svg>
				</div>
				<h1 className="font-amiri text-islamic-green-900 mb-3 text-3xl font-bold sm:text-4xl">
					{t.verify_title}
				</h1>
				<p className="mx-auto max-w-md text-sm text-gray-500">{t.verify_description}</p>
			</div>

			{/* Empty state — no share link */}
			{state.status === "empty" && (
				<div className="islamic-card p-8 sm:p-12 text-center">
					<div className="bg-islamic-cream-200/60 mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full">
						<svg className="h-8 w-8 text-islamic-gold-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
							<path strokeLinecap="round" strokeLinejoin="round" d="M3.75 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 013.75 9.375v-4.5zM3.75 14.625c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5a1.125 1.125 0 01-1.125-1.125v-4.5zM13.5 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0113.5 9.375v-4.5z" />
							<path strokeLinecap="round" strokeLinejoin="round" d="M6.75 6.75h.75v.75h-.75v-.75zM6.75 16.5h.75v.75h-.75v-.75zM16.5 6.75h.75v.75h-.75v-.75zM13.5 13.5h.75v.75h-.75v-.75zM13.5 19.5h.75v.75h-.75v-.75zM19.5 13.5h.75v.75h-.75v-.75zM19.5 19.5h.75v.75h-.75v-.75zM16.5 16.5h.75v.75h-.75v-.75z" />
						</svg>
					</div>
					<p className="text-sm text-gray-500 leading-relaxed max-w-sm mx-auto">
						{t.verify_scan_qr}
					</p>
				</div>
			)}

			{/* Error state */}
			{state.status === "error" && (
				<IslamicBorder className="rounded-islamic border-2 border-yellow-400 bg-yellow-50 p-5 sm:p-6">
					<div className="flex items-start gap-4">
						<div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-yellow-500">
							<svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
								<path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
							</svg>
						</div>
						<div>
							<h3 className="font-amiri text-xl font-bold text-yellow-700">{t.verify_error_title}</h3>
							<p className="mt-1 text-sm text-gray-600">{state.message}</p>
						</div>
					</div>
				</IslamicBorder>
			)}

			{/* Agreement preview */}
			{state.status === "preview" && state.preview && (
				<div className="space-y-6">
					<IslamicBorder className="rounded-islamic bg-islamic-green-800/5 border-islamic-green-700 border-2 p-5 sm:p-6">
						<div className="flex items-start gap-4">
							<div className="bg-islamic-green-800 flex h-12 w-12 shrink-0 items-center justify-center rounded-full">
								<svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
									<path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
								</svg>
							</div>
							<div>
								<h3 className="font-amiri text-islamic-green-900 text-xl font-bold">
									{t.verify_preview_title}
								</h3>
								<p className="mt-1 text-sm text-gray-600">{state.message}</p>
							</div>
						</div>
					</IslamicBorder>

					<div className="islamic-card p-5 sm:p-6">
						<h3 className="islamic-heading mb-4 text-lg font-bold">{t.verify_details}</h3>
						<div className="grid grid-cols-2 gap-4 text-sm">
							<div>
								<span className="block text-xs text-gray-500">{t.creditor}</span>
								<span className="font-medium">{state.preview.creditor_name}</span>
							</div>
							<div>
								<span className="block text-xs text-gray-500">{t.debtor}</span>
								<span className="font-medium">{state.preview.debtor_name}</span>
							</div>
							<div>
								<span className="block text-xs text-gray-500">{t.amount}</span>
								<span className="font-amiri text-lg font-bold">
									{symbol}{state.preview.amount} {state.preview.currency}
								</span>
							</div>
							<div>
								<span className="block text-xs text-gray-500">{t.due_date}</span>
								<span className="font-medium">{state.preview.due_date}</span>
							</div>
							<div>
								<span className="block text-xs text-gray-500">{t.document_ref}</span>
								<span className="font-mono font-bold">{state.preview.verification_code}</span>
							</div>
							<div>
								<span className="block text-xs text-gray-500">{t.generated_label}</span>
								<span className="text-xs font-medium">{state.preview.generated_at}</span>
							</div>
							<div className="col-span-2">
								<span className="block text-xs text-gray-500">{t.witnesses_label}</span>
								<span className="font-medium">{state.preview.witnesses.join(", ")}</span>
							</div>
						</div>
					</div>

					<div className="bg-islamic-green-900/5 rounded-lg p-4">
						<p className="mb-1 text-xs text-gray-500">{t.document_hash}</p>
						<p className="text-islamic-green-900 font-mono text-xs break-all">
							{state.preview.document_hash}
						</p>
					</div>
				</div>
			)}

			<div className="mt-10 text-center">
				<Link
					href="/"
					className="text-islamic-green-800 hover:text-islamic-green-900 inline-flex items-center gap-1 text-sm font-medium hover:underline">
					<svg className="h-4 w-4 rtl:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
						<path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
					</svg>
					{t.back_to_home}
				</Link>
			</div>
		</div>
	);
}

export default function VerifyPage() {
	const { t } = useI18n();

	return (
		<>
			<header className="border-islamic-gold-200/50 sticky top-0 z-50 border-b bg-white/60 backdrop-blur-md">
				<div className="mx-auto flex max-w-3xl items-center justify-between px-4 py-2">
					<Link href="/" className="flex items-center gap-2.5">
						<Image
							src="/logo/logo-no-text.png"
							alt="DaynRecord"
							width={40}
							height={40}
							className="shrink-0"
							priority
						/>
						<div>
							<h1 className="font-amiri text-islamic-green-900 text-xl leading-tight font-bold">
								{t.app_name}
							</h1>
							<p className="text-islamic-green-700/70 text-xs">{t.app_tagline}</p>
						</div>
					</Link>
					<LanguageSelector />
				</div>
			</header>
			<main className="flex-1 px-4 py-6 sm:py-8">
				<Suspense fallback={<div className="py-20 text-center text-gray-400">{t.verifying}</div>}>
					<VerifyContent />
				</Suspense>
			</main>
			<footer className="border-islamic-gold-200/50 border-t bg-white/40 backdrop-blur-sm">
				<div className="mx-auto max-w-3xl px-4 py-6 text-center">
					<Image
						src="/logo/logo-no-text.png"
						alt="DaynRecord"
						width={32}
						height={32}
						className="mx-auto mb-3 opacity-40"
					/>
					<p className="font-amiri text-islamic-green-800/60 text-sm italic">{t.verse}</p>
					<a
						href="https://quran.com/2/282"
						target="_blank"
						rel="noopener noreferrer"
						className="text-islamic-green-700/40 hover:text-islamic-green-700/70 mt-1 inline-block text-xs hover:underline">
						{t.verse_ref}
					</a>
					<div className="mt-4 pt-4 border-t border-islamic-gold-200/30">
						<p className="text-xs text-islamic-green-700/40">
							Built by{" "}
							<a
								href="https://github.com/ZineddineBk09"
								target="_blank"
								rel="noopener noreferrer"
								className="text-islamic-green-700/60 hover:text-islamic-green-800 font-medium transition-colors hover:underline"
							>
								Zineddine Benkhaled
							</a>
						</p>
					</div>
				</div>
			</footer>
		</>
	);
}
