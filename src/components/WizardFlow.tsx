"use client";

import { useWizard } from "@/hooks/useWizard";
import { useI18n } from "@/lib/i18n";

import { AgreementForm } from "./AgreementForm";
import { DebtorConfirmation } from "./DebtorConfirmation";
import { GeneratedRecord } from "./GeneratedRecord";
import { StepIndicator } from "./StepIndicator";
import { WitnessConfirmation } from "./WitnessConfirmation";

export function WizardFlow() {
	const {
		step,
		agreement,
		setAgreement,
		debtor,
		setDebtor,
		witnessData,
		setWitnessData,
		record,
		isGenerating,
		goNext,
		goBack,
		generateRecord,
		reset
	} = useWizard();

	const { language } = useI18n();

	return (
		<div className="mx-auto max-w-2xl">
			<StepIndicator currentStep={step} />

			<div className="transition-all duration-300">
				{step === 1 && (
					<AgreementForm
						data={agreement}
						onChange={setAgreement}
						onNext={goNext}
					/>
				)}

				{step === 2 && (
					<DebtorConfirmation
						agreement={agreement}
						data={debtor}
						onChange={setDebtor}
						onNext={goNext}
						onBack={goBack}
					/>
				)}

				{step === 3 && (
					<WitnessConfirmation
						data={witnessData}
						onChange={setWitnessData}
						onGenerate={generateRecord}
						onBack={goBack}
						isGenerating={isGenerating}
					/>
				)}

				{step === 4 && record && (
					<GeneratedRecord
						record={record}
						language={language}
						onReset={reset}
					/>
				)}
			</div>
		</div>
	);
}
