"use client";

import { generateHash, generateVerificationCode } from "@/lib/hash";
import type {
	AgreementFormData,
	DebtorConfirmationData,
	LoanRecord,
	WitnessFormData,
	WizardStep
} from "@/lib/types";
import { formatDate } from "@/lib/utils";
import { useCallback, useState } from "react";

const initialAgreement: AgreementFormData = {
	creditor_name: "",
	debtor_name: "",
	amount: "",
	currency: "DZD",
	due_date: "",
	terms: ""
};

const initialDebtor: DebtorConfirmationData = {
	acknowledged: false,
	signature: "",
	location: ""
};

const initialWitness: WitnessFormData = {
	witnessCount: 1,
	witnesses: [{ name: "", signature: "", timestamp: "" }],
	confirmed: false
};

export function useWizard() {
	const [step, setStep] = useState<WizardStep>(1);
	const [agreement, setAgreement] = useState<AgreementFormData>(initialAgreement);
	const [debtor, setDebtor] = useState<DebtorConfirmationData>(initialDebtor);
	const [witnessData, setWitnessData] = useState<WitnessFormData>(initialWitness);
	const [record, setRecord] = useState<LoanRecord | null>(null);
	const [isGenerating, setIsGenerating] = useState(false);

	const goNext = useCallback(() => {
		setStep((s) => Math.min(s + 1, 4) as WizardStep);
	}, []);

	const goBack = useCallback(() => {
		setStep((s) => Math.max(s - 1, 1) as WizardStep);
	}, []);

	const generateRecord = useCallback(async () => {
		setIsGenerating(true);
		try {
			const now = new Date();
			const verificationCode = generateVerificationCode();

			const coreData = {
				creditor_name: agreement.creditor_name,
				debtor_name: agreement.debtor_name,
				amount: agreement.amount,
				currency: agreement.currency,
				due_date: agreement.due_date,
				terms: agreement.terms,
				debtor_signature: debtor.signature,
				debtor_timestamp: formatDate(now),
				debtor_location: debtor.location,
				witnesses: witnessData.witnesses.map((w) => ({
					name: w.name,
					signature: w.signature,
					timestamp: w.timestamp || formatDate(now)
				})),
				verification_code: verificationCode,
				generated_at: formatDate(now)
			};

			const hash = await generateHash(coreData);

			const fullRecord: LoanRecord = {
				...coreData,
				document_hash: hash
			};

			setRecord(fullRecord);
			setStep(4);
		} catch (error) {
			console.error("Failed to generate record:", error);
		} finally {
			setIsGenerating(false);
		}
	}, [agreement, debtor, witnessData]);

	const reset = useCallback(() => {
		setStep(1);
		setAgreement(initialAgreement);
		setDebtor(initialDebtor);
		setWitnessData(initialWitness);
		setRecord(null);
	}, []);

	return {
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
	};
}
