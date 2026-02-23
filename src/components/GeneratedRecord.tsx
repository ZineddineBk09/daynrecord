"use client";

import { trackEvent } from "@/lib/analytics";
import { useI18n } from "@/lib/i18n";
import { generatePDF } from "@/lib/pdf";
import type { Language } from "@/lib/translations";
import type { LoanRecord } from "@/lib/types";
import { getCurrencySymbol } from "@/lib/utils";
import Image from "next/image";
import { QRCodeSVG } from "qrcode.react";
import { useCallback, useEffect, useRef, useState } from "react";

import { IslamicBorder } from "./IslamicBorder";

interface GeneratedRecordProps {
	record: LoanRecord;
	language: Language;
	onReset: () => void;
}

export function GeneratedRecord({ record, language, onReset }: GeneratedRecordProps) {
	const { t } = useI18n();
	const [isDownloading, setIsDownloading] = useState(false);
	const [copied, setCopied] = useState(false);
	const tracked = useRef(false);

	useEffect(() => {
		if (!tracked.current) {
			tracked.current = true;
			trackEvent("contract_generated");
		}
	}, []);

	const buildShareUrl = useCallback(() => {
		const sharePayload = {
			creditor_name: record.creditor_name,
			debtor_name: record.debtor_name,
			amount: record.amount,
			currency: record.currency,
			due_date: record.due_date,
			verification_code: record.verification_code,
			document_hash: record.document_hash,
			generated_at: record.generated_at,
			witnesses: record.witnesses.map((w) => w.name)
		};
		const encoded = btoa(unescape(encodeURIComponent(JSON.stringify(sharePayload))));
		return `${window.location.origin}/verify?data=${encoded}`;
	}, [record]);

	const handleDownloadPDF = useCallback(async () => {
		setIsDownloading(true);
		try {
			const doc = await generatePDF(record, language);
			doc.save(`DaynRecord-${record.verification_code}.pdf`);
			trackEvent("pdf_downloaded");
		} catch (error) {
			console.error("PDF generation failed:", error);
		} finally {
			setIsDownloading(false);
		}
	}, [record, language]);

	const copyToClipboard = useCallback(async (text: string) => {
		try {
			await navigator.clipboard.writeText(text);
		} catch {
			const textarea = document.createElement("textarea");
			textarea.value = text;
			document.body.appendChild(textarea);
			textarea.select();
			document.execCommand("copy");
			document.body.removeChild(textarea);
		}
		setCopied(true);
		setTimeout(() => setCopied(false), 2000);
	}, []);

	const handleCopyShareLink = useCallback(() => {
		copyToClipboard(buildShareUrl());
		trackEvent("share_link_copied");
	}, [buildShareUrl, copyToClipboard]);

	const symbol = getCurrencySymbol(record.currency);
	const shareUrl = typeof window !== "undefined" ? buildShareUrl() : "";

	return (
		<div className="space-y-6 sm:space-y-8">
			{/* Success */}
			<div className="text-center">
				<div className="relative mb-4 inline-flex items-center justify-center">
					<Image
						src="/logo/logo-no-text.png"
						alt="DaynRecord"
						width={72}
						height={72}
					/>
					<div className="bg-islamic-green-800 absolute -right-1 -bottom-1 flex h-7 w-7 items-center justify-center rounded-full ring-2 ring-white">
						<svg
							className="h-4 w-4 text-white"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							strokeWidth={3}>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M4.5 12.75l6 6 9-13.5"
							/>
						</svg>
					</div>
				</div>
				<h2 className="islamic-heading text-2xl font-bold sm:text-3xl">{t.generated_title}</h2>
				<p className="mt-2 text-sm text-gray-500">{t.generated_description}</p>
			</div>

			{/* Document Reference + QR */}
			<IslamicBorder className="islamic-card p-5 sm:p-8">
				<div className="space-y-4 text-center">
					<p className="text-sm tracking-wider text-gray-500 uppercase">{t.document_ref}</p>
					<p className="text-islamic-green-900 font-mono text-xl font-bold tracking-widest sm:text-3xl">
						{record.verification_code}
					</p>
					<div className="flex justify-center">
						<div className="border-islamic-cream-300 rounded-xl border bg-white p-3 shadow-sm sm:p-4">
							<QRCodeSVG
								value={shareUrl}
								size={140}
								bgColor="#FFFFFF"
								fgColor="#064E3B"
								level="L"
							/>
						</div>
					</div>
					<p className="mx-auto max-w-sm text-xs text-gray-400">{t.qr_description}</p>
				</div>
			</IslamicBorder>

			{/* Summary */}
			<div className="islamic-card p-5 sm:p-6">
				<div className="grid grid-cols-2 gap-4 text-sm">
					<div>
						<span className="block text-xs text-gray-500">{t.creditor}</span>
						<span className="text-islamic-green-900 font-medium">{record.creditor_name}</span>
					</div>
					<div>
						<span className="block text-xs text-gray-500">{t.debtor}</span>
						<span className="text-islamic-green-900 font-medium">{record.debtor_name}</span>
					</div>
					<div>
						<span className="block text-xs text-gray-500">{t.amount}</span>
						<span className="font-amiri text-islamic-green-900 text-lg font-bold">
							{symbol}
							{record.amount} {record.currency}
						</span>
					</div>
					<div>
						<span className="block text-xs text-gray-500">{t.due_date}</span>
						<span className="text-islamic-green-900 font-medium">{record.due_date}</span>
					</div>
					<div>
						<span className="block text-xs text-gray-500">{t.witnesses_label}</span>
						<span className="text-islamic-green-900 font-medium">
							{record.witnesses.map((w) => w.name).join(", ")}
						</span>
					</div>
					<div>
						<span className="block text-xs text-gray-500">{t.generated_label}</span>
						<span className="text-islamic-green-900 text-xs font-medium">
							{record.generated_at}
						</span>
					</div>
				</div>
			</div>

			{/* Actions */}
			<div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
				<button
					onClick={handleDownloadPDF}
					disabled={isDownloading}
					className="islamic-btn-primary justify-center disabled:opacity-60">
					{isDownloading ? (
						<>
							<svg
								className="h-4 w-4 animate-spin"
								viewBox="0 0 24 24"
								fill="none">
								<circle
									className="opacity-25"
									cx="12"
									cy="12"
									r="10"
									stroke="currentColor"
									strokeWidth="4"
								/>
								<path
									className="opacity-75"
									fill="currentColor"
									d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
								/>
							</svg>
							{t.generating}
						</>
					) : (
						<>
							<svg
								className="h-4 w-4"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
								strokeWidth={2}>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
								/>
							</svg>
							{t.download_pdf}
						</>
					)}
				</button>
				<button
					onClick={handleCopyShareLink}
					className="islamic-btn-secondary justify-center">
					<svg
						className="h-4 w-4"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						strokeWidth={2}>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m9.86-1.135a4.5 4.5 0 00-1.242-7.244l-4.5-4.5a4.5 4.5 0 00-6.364 6.364l1.757 1.757"
						/>
					</svg>
					{copied ? t.copied : t.copy_share}
				</button>
			</div>

			{/* Security */}
			<div className="islamic-card p-5 sm:p-6">
				<h3 className="islamic-heading mb-3 flex items-center gap-2 text-sm font-bold">
					<svg
						className="text-islamic-gold-500 h-4 w-4"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						strokeWidth={1.5}>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
						/>
					</svg>
					{t.security_heading}
				</h3>
				<ul className="space-y-2 text-sm text-gray-600">
					{[t.security_hash, t.security_no_storage, t.security_verify, t.security_copies].map(
						(text, i) => (
							<li
								key={i}
								className="flex items-start gap-2">
								<svg
									className="text-islamic-green-700 mt-0.5 h-4 w-4 shrink-0"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
									strokeWidth={2}>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M4.5 12.75l6 6 9-13.5"
									/>
								</svg>
								{text}
							</li>
						)
					)}
				</ul>
			</div>

			{/* Hash */}
			<div className="bg-islamic-green-900/5 rounded-lg p-4">
				<p className="mb-1 text-xs text-gray-500">{t.document_hash}</p>
				<p className="text-islamic-green-900 font-mono text-xs break-all">{record.document_hash}</p>
			</div>

			{/* New Record */}
			<div className="pt-4 text-center">
				<button
					onClick={onReset}
					className="islamic-btn-secondary">
					<svg
						className="h-4 w-4"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						strokeWidth={2}>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182"
						/>
					</svg>
					{t.start_new}
				</button>
			</div>
		</div>
	);
}
