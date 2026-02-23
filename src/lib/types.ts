export interface WitnessData {
	name: string;
	signature: string; // base64 data URL
	timestamp: string;
}

export interface LoanRecord {
	creditor_name: string;
	debtor_name: string;
	amount: string;
	currency: string;
	due_date: string;
	terms: string;
	debtor_signature: string; // base64 data URL
	debtor_timestamp: string;
	debtor_location: string;
	witnesses: WitnessData[];
	document_hash: string;
	verification_code: string;
	generated_at: string;
}

export type WizardStep = 1 | 2 | 3 | 4;

export interface AgreementFormData {
	creditor_name: string;
	debtor_name: string;
	amount: string;
	currency: string;
	due_date: string;
	terms: string;
}

export interface DebtorConfirmationData {
	acknowledged: boolean;
	signature: string;
	location: string;
}

export interface WitnessFormData {
	witnessCount: 1 | 2;
	witnesses: WitnessData[];
	confirmed: boolean;
}

export const CURRENCIES = [
	{ code: "DZD", label: "DZD — Algerian Dinar", symbol: "د.ج" },
	{ code: "USD", label: "USD — US Dollar", symbol: "$" },
	{ code: "EUR", label: "EUR — Euro", symbol: "€" },
	{ code: "GBP", label: "GBP — British Pound", symbol: "£" },
	{ code: "SAR", label: "SAR — Saudi Riyal", symbol: "﷼" },
	{ code: "AED", label: "AED — UAE Dirham", symbol: "د.إ" },
	{ code: "MAD", label: "MAD — Moroccan Dirham", symbol: "MAD" },
	{ code: "EGP", label: "EGP — Egyptian Pound", symbol: "E£" },
	{ code: "TRY", label: "TRY — Turkish Lira", symbol: "₺" },
	{ code: "MYR", label: "MYR — Malaysian Ringgit", symbol: "RM" },
	{ code: "IDR", label: "IDR — Indonesian Rupiah", symbol: "Rp" },
	{ code: "PKR", label: "PKR — Pakistani Rupee", symbol: "₨" },
	{ code: "BDT", label: "BDT — Bangladeshi Taka", symbol: "৳" },
	{ code: "NGN", label: "NGN — Nigerian Naira", symbol: "₦" }
] as const;
