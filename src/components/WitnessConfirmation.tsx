"use client";

import { useI18n } from "@/lib/i18n";
import type { WitnessData, WitnessFormData } from "@/lib/types";
import { formatDate } from "@/lib/utils";
import { useState } from "react";

import { SignaturePad } from "./SignaturePad";

interface WitnessConfirmationProps {
	data: WitnessFormData;
	onChange: (data: WitnessFormData) => void;
	onGenerate: () => void;
	onBack: () => void;
	isGenerating: boolean;
}

export function WitnessConfirmation({
	data,
	onChange,
	onGenerate,
	onBack,
	isGenerating
}: WitnessConfirmationProps) {
	const { t } = useI18n();
	const [errors, setErrors] = useState<Record<string, string>>({});

	const updateWitnessCount = (count: 1 | 2) => {
		const witnesses: WitnessData[] =
			count === 1
				? [data.witnesses[0] || { name: "", signature: "", timestamp: "" }]
				: [
						data.witnesses[0] || { name: "", signature: "", timestamp: "" },
						data.witnesses[1] || { name: "", signature: "", timestamp: "" }
					];
		onChange({ ...data, witnessCount: count, witnesses });
	};

	const updateWitness = (index: number, field: keyof WitnessData, value: string) => {
		const witnesses = [...data.witnesses];
		witnesses[index] = {
			...witnesses[index],
			[field]: value,
			timestamp: witnesses[index].timestamp || formatDate(new Date())
		};
		onChange({ ...data, witnesses });
		const errorKey = `witness_${index}_${field}`;
		if (errors[errorKey]) {
			setErrors((prev) => {
				const next = { ...prev };
				delete next[errorKey];
				return next;
			});
		}
	};

	const validate = (): boolean => {
		const newErrors: Record<string, string> = {};
		data.witnesses.forEach((w, i) => {
			if (!w.name.trim()) newErrors[`witness_${i}_name`] = t.error_witness_name;
			if (!w.signature) newErrors[`witness_${i}_signature`] = t.error_witness_signature;
		});
		if (!data.confirmed) newErrors.confirmed = t.error_witness_confirmed;
		setErrors(newErrors);
		return Object.keys(newErrors).length === 0;
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		if (validate()) onGenerate();
	};

	return (
		<form
			onSubmit={handleSubmit}
			className="space-y-6 sm:space-y-8">
			<div className="mb-6 text-center sm:mb-8">
				<h2 className="islamic-heading text-2xl font-bold sm:text-3xl">{t.witness_title}</h2>
				<p className="mt-2 text-sm text-gray-500">{t.witness_description}</p>
			</div>

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
							d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
						/>
					</svg>
					{t.witness_count_heading}
				</h3>
				<div className="flex gap-3">
					{([1, 2] as const).map((n) => (
						<button
							key={n}
							type="button"
							onClick={() => updateWitnessCount(n)}
							className={`flex-1 rounded-lg border-2 p-4 text-center transition-all ${data.witnessCount === n ? "border-islamic-green-700 bg-islamic-green-800/5" : "border-islamic-cream-400 hover:border-islamic-cream-500"}`}>
							<span className="mb-1 block text-2xl">{n}</span>
							<span className="text-sm text-gray-600">
								{n === 1 ? t.one_witness : t.two_witnesses}
							</span>
						</button>
					))}
				</div>
			</div>

			{data.witnesses.map((witness, index) => (
				<div
					key={index}
					className="islamic-card space-y-5 p-5 sm:p-8">
					<h3 className="islamic-heading text-lg font-bold">
						{t.witness_label} {data.witnessCount > 1 ? index + 1 : ""}
					</h3>
					<div>
						<label className="islamic-label">{t.witness_name_label}</label>
						<input
							type="text"
							className="islamic-input"
							placeholder={t.witness_name_placeholder}
							value={witness.name}
							onChange={(e) => updateWitness(index, "name", e.target.value)}
						/>
						{errors[`witness_${index}_name`] && (
							<p className="mt-1 text-xs text-red-500">{errors[`witness_${index}_name`]}</p>
						)}
					</div>
					<SignaturePad
						label={`${t.witness_signature_label} ${data.witnessCount > 1 ? index + 1 : ""}`}
						onSignatureChange={(sig) => updateWitness(index, "signature", sig)}
						initialValue={witness.signature}
					/>
					{errors[`witness_${index}_signature`] && (
						<p className="text-xs text-red-500">{errors[`witness_${index}_signature`]}</p>
					)}
				</div>
			))}

			<div className="islamic-card p-5 sm:p-6">
				<label className="flex cursor-pointer items-start gap-3">
					<input
						type="checkbox"
						checked={data.confirmed}
						onChange={(e) => onChange({ ...data, confirmed: e.target.checked })}
						className="border-islamic-green-700/30 text-islamic-green-800 focus:ring-islamic-green-600/30 mt-0.5 rounded"
					/>
					<div>
						<span className="text-islamic-green-900 block font-medium">{t.witness_confirmed}</span>
						<span className="text-sm text-gray-500">{t.witness_confirmed_desc}</span>
					</div>
				</label>
				{errors.confirmed && <p className="mt-2 text-xs text-red-500">{errors.confirmed}</p>}
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
					disabled={isGenerating}
					className="islamic-btn-gold w-full disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto">
					{isGenerating ? (
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
							{t.generate_contract}
							<svg
								className="h-4 w-4"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
								strokeWidth={2}>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
								/>
							</svg>
						</>
					)}
				</button>
			</div>
		</form>
	);
}
