"use client";

import { useI18n } from "@/lib/i18n";
import type { AgreementFormData } from "@/lib/types";
import { CURRENCIES } from "@/lib/types";
import { useState } from "react";

interface AgreementFormProps {
	data: AgreementFormData;
	onChange: (data: AgreementFormData) => void;
	onNext: () => void;
}

export function AgreementForm({ data, onChange, onNext }: AgreementFormProps) {
	const { t } = useI18n();
	const [errors, setErrors] = useState<Record<string, string>>({});

	const update = (field: keyof AgreementFormData, value: string) => {
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
		if (!data.creditor_name.trim()) newErrors.creditor_name = t.error_creditor_required;
		if (!data.debtor_name.trim()) newErrors.debtor_name = t.error_debtor_required;
		if (!data.amount.trim() || parseFloat(data.amount) <= 0)
			newErrors.amount = t.error_amount_required;
		if (!data.due_date) newErrors.due_date = t.error_due_date_required;
		setErrors(newErrors);
		return Object.keys(newErrors).length === 0;
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		if (validate()) onNext();
	};

	return (
		<form
			onSubmit={handleSubmit}
			className="space-y-6 sm:space-y-8">
			<div className="mb-6 text-center sm:mb-8">
				<h2 className="islamic-heading text-2xl font-bold sm:text-3xl">{t.agreement_title}</h2>
				<p className="mt-2 text-sm text-gray-500">{t.agreement_description}</p>
			</div>

			<div className="islamic-card space-y-6 p-5 sm:p-8">
				<div>
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
								d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
							/>
						</svg>
						{t.parties_heading}
					</h3>
					<div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">
						<div>
							<label className="islamic-label">{t.creditor_label}</label>
							<input
								type="text"
								className="islamic-input"
								placeholder={t.creditor_placeholder}
								value={data.creditor_name}
								onChange={(e) => update("creditor_name", e.target.value)}
							/>
							{errors.creditor_name && (
								<p className="mt-1 text-xs text-red-500">{errors.creditor_name}</p>
							)}
						</div>
						<div>
							<label className="islamic-label">{t.debtor_label}</label>
							<input
								type="text"
								className="islamic-input"
								placeholder={t.debtor_placeholder}
								value={data.debtor_name}
								onChange={(e) => update("debtor_name", e.target.value)}
							/>
							{errors.debtor_name && (
								<p className="mt-1 text-xs text-red-500">{errors.debtor_name}</p>
							)}
						</div>
					</div>
				</div>

				<div className="islamic-divider" />

				<div>
					<h3 className="islamic-heading mb-4 pt-3 flex items-center gap-2 text-lg font-bold">
						<svg
							className="text-islamic-gold-500 h-5 w-5"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							strokeWidth={1.5}>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z"
							/>
						</svg>
						{t.loan_details_heading}
					</h3>
					<div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">
						<div>
							<label className="islamic-label">{t.amount_label}</label>
							<div className="flex gap-2">
								<input
									type="number"
									min="0"
									step="0.01"
									className="islamic-input flex-1"
									placeholder={t.amount_placeholder}
									value={data.amount}
									onChange={(e) => update("amount", e.target.value)}
								/>
								<select
									className="islamic-input w-24 sm:w-36"
									value={data.currency}
									onChange={(e) => update("currency", e.target.value)}>
									{CURRENCIES.map((c) => (
										<option
											key={c.code}
											value={c.code}>
											{c.code}
										</option>
									))}
								</select>
							</div>
							{errors.amount && <p className="mt-1 text-xs text-red-500">{errors.amount}</p>}
						</div>
						<div>
							<label className="islamic-label">{t.due_date_label}</label>
							<input
								type="date"
								className="islamic-input"
								min={new Date().toISOString().split("T")[0]}
								value={data.due_date}
								onChange={(e) => update("due_date", e.target.value)}
							/>
							{errors.due_date && <p className="mt-1 text-xs text-red-500">{errors.due_date}</p>}
						</div>
					</div>
				</div>

				<div>
					<label className="islamic-label">
						{t.terms_label}
						<span className="ms-1 font-normal text-gray-400">{t.terms_optional}</span>
					</label>
					<textarea
						className="islamic-input min-h-[100px] resize-y"
						placeholder={t.terms_placeholder}
						value={data.terms}
						onChange={(e) => update("terms", e.target.value)}
						rows={4}
					/>
				</div>
			</div>

			<div className="flex justify-end">
				<button
					type="submit"
					className="islamic-btn-primary w-full sm:w-auto">
					{t.continue_btn}
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
