"use client";

import { useI18n } from "@/lib/i18n";
import type { WizardStep } from "@/lib/types";
import { cn } from "@/lib/utils";

interface StepIndicatorProps {
	currentStep: WizardStep;
}

export function StepIndicator({ currentStep }: StepIndicatorProps) {
	const { t } = useI18n();

	const steps = [
		{ number: 1, label: t.step_agreement },
		{ number: 2, label: t.step_confirmation },
		{ number: 3, label: t.step_witnesses },
		{ number: 4, label: t.step_complete }
	] as const;

	return (
		<div className="mb-8 flex items-center justify-center gap-0 sm:mb-10">
			{steps.map((s, i) => (
				<div
					key={s.number}
					className="flex items-center">
					<div className="flex flex-col items-center">
						<div
							className={cn(
								"flex h-9 w-9 items-center justify-center rounded-full border-2 text-sm font-medium transition-all duration-300 sm:h-10 sm:w-10",
								currentStep > s.number &&
									"bg-islamic-green-800 border-islamic-green-800 text-white",
								currentStep === s.number &&
									"bg-islamic-gold-500 border-islamic-gold-500 shadow-islamic-gold-500/30 text-white shadow-lg",
								currentStep < s.number && "border-islamic-cream-400 text-islamic-cream-500 bg-white"
							)}>
							{currentStep > s.number ? (
								<svg
									className="h-5 w-5"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
									strokeWidth={2.5}>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M4.5 12.75l6 6 9-13.5"
									/>
								</svg>
							) : (
								s.number
							)}
						</div>
						<span
							className={cn(
								"mt-2 max-w-[60px] text-center text-[10px] font-medium transition-colors duration-300 sm:max-w-none sm:text-xs",
								currentStep >= s.number ? "text-islamic-green-800" : "text-islamic-cream-500"
							)}>
							{s.label}
						</span>
					</div>
					{i < steps.length - 1 && (
						<div
							className={cn(
								"mx-1 mb-6 h-0.5 w-8 transition-colors duration-300 sm:mx-2 sm:w-20",
								currentStep > s.number ? "bg-islamic-green-800" : "bg-islamic-cream-400"
							)}
						/>
					)}
				</div>
			))}
		</div>
	);
}
