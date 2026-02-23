"use client";

import { useI18n } from "@/lib/i18n";
import type { AgreementFormData, DebtorConfirmationData } from "@/lib/types";
import { getCurrencySymbol } from "@/lib/utils";
import { useState } from "react";

import { SignaturePad } from "./SignaturePad";

interface DebtorConfirmationProps {
	agreement: AgreementFormData;
	data: DebtorConfirmationData;
	onChange: (data: DebtorConfirmationData) => void;
	onNext: () => void;
	onBack: () => void;
}

export function DebtorConfirmation({
	agreement,
	data,
	onChange,
	onNext,
	onBack
}: DebtorConfirmationProps) {
	const { t } = useI18n();
	const [errors, setErrors] = useState<Record<string, string>>({});

	const update = (field: keyof DebtorConfirmationData, value: string | boolean) => {
		onChange({ ...data, [field]: value });
		if (errors[field]) {
			setErrors((prev) => {
				const next = { ...prev };
				delete next[field];
				return next;
			});
		}
	};

	const validate = (): boolean => {
		const newErrors: Record<string, string> = {};
		if (!data.acknowledged) newErrors.acknowledged = t.error_acknowledge;
		if (!data.signature) newErrors.signature = t.error_signature;
		setErrors(newErrors);
		return Object.keys(newErrors).length === 0;
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		if (validate()) onNext();
	};

	const symbol = getCurrencySymbol(agreement.currency);

	return (
		<form
			onSubmit={handleSubmit}
			className="space-y-6 sm:space-y-8">
			<div className="mb-6 text-center sm:mb-8">
				<h2 className="islamic-heading text-2xl font-bold sm:text-3xl">{t.debtor_title}</h2>
				<p className="mt-2 text-sm text-gray-500">{t.debtor_description}</p>
			</div>

			{/* Agreement Summary */}
			<div className="islamic-card p-5 sm:p-8">
				<h3 className="islamic-heading mb-4 flex items-center gap-2 text-lg font-bold">
					<svg
						className="text-islamic-gold-500 h-5 w-5"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						strokeWidth={1.5}>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
						/>
					</svg>
					{t.summary_heading}
				</h3>
				<div className="bg-islamic-cream-50 border-islamic-cream-300 space-y-3 rounded-lg border p-4 sm:p-5">
					<div className="grid grid-cols-2 gap-y-3 text-sm">
						<span className="text-gray-500">{t.creditor}</span>
						<span className="text-islamic-green-900 font-medium">{agreement.creditor_name}</span>
						<span className="text-gray-500">{t.debtor}</span>
						<span className="text-islamic-green-900 font-medium">{agreement.debtor_name}</span>
						<span className="text-gray-500">{t.amount}</span>
						<span className="text-islamic-green-900 font-amiri text-lg font-bold">
							{symbol}
							{agreement.amount} {agreement.currency}
						</span>
						<span className="text-gray-500">{t.due_date}</span>
						<span className="text-islamic-green-900 font-medium">{agreement.due_date}</span>
					</div>
					{agreement.terms && (
						<div className="border-islamic-cream-300 border-t pt-3">
							<span className="mb-1 block text-sm text-gray-500">{t.terms}</span>
							<p className="text-sm whitespace-pre-wrap text-gray-700">{agreement.terms}</p>
						</div>
					)}
				</div>
			</div>

			{/* Declaration */}
			<div className="islamic-card space-y-6 p-5 sm:p-8">
				<h3 className="islamic-heading flex items-center gap-2 text-lg font-bold">
					<svg
						className="text-islamic-gold-500 h-5 w-5"
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
					{t.declaration_heading}
				</h3>

				<label className="border-islamic-cream-300 hover:bg-islamic-cream-50 flex cursor-pointer items-start gap-3 rounded-lg border p-4 transition-colors">
					<input
						type="checkbox"
						checked={data.acknowledged}
						onChange={(e) => update("acknowledged", e.target.checked)}
						className="border-islamic-green-700/30 text-islamic-green-800 focus:ring-islamic-green-600/30 mt-0.5 rounded"
					/>
					<div>
						<span className="text-islamic-green-900 block font-medium">
							{t.declaration_checkbox}
						</span>
						<span className="text-sm text-gray-500">{t.declaration_description}</span>
					</div>
				</label>
				{errors.acknowledged && <p className="text-xs text-red-500">{errors.acknowledged}</p>}

				<SignaturePad
					label={t.signature_label}
					onSignatureChange={(sig) => update("signature", sig)}
					initialValue={data.signature}
				/>
				{errors.signature && <p className="text-xs text-red-500">{errors.signature}</p>}

				<div>
					<label className="islamic-label">
						{t.location_label}
						<span className="ms-1 font-normal text-gray-400">{t.location_optional}</span>
					</label>
					<input
						type="text"
						className="islamic-input"
						placeholder={t.location_placeholder}
						value={data.location}
						onChange={(e) => update("location", e.target.value)}
					/>
				</div>
			</div>

			<div className="flex flex-col-reverse justify-between gap-3 sm:flex-row">
				<button
					type="button"
					onClick={onBack}
					className="islamic-btn-secondary w-full sm:w-auto">
					<svg
						className="h-4 w-4 rtl:rotate-180"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						strokeWidth={2}>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
						/>
					</svg>
					{t.back_btn}
				</button>
				<button
					type="submit"
					className="islamic-btn-primary w-full sm:w-auto">
					{t.confirm_btn}
					<svg
						className="h-4 w-4 rtl:rotate-180"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						strokeWidth={2}>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
						/>
					</svg>
				</button>
			</div>
		</form>
	);
}
