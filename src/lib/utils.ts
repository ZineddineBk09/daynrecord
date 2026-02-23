export function formatDate(date: Date): string {
	return date.toISOString().replace("T", " ").slice(0, 19) + " UTC";
}

export function formatDateShort(date: Date): string {
	return date.toISOString().split("T")[0];
}

export function cn(...classes: (string | boolean | undefined | null)[]): string {
	return classes.filter(Boolean).join(" ");
}

export function getCurrencySymbol(code: string): string {
	const map: Record<string, string> = {
		USD: "$",
		EUR: "€",
		GBP: "£",
		SAR: "﷼",
		AED: "د.إ",
		DZD: "د.ج",
		MAD: "MAD",
		EGP: "E£",
		TRY: "₺",
		MYR: "RM",
		IDR: "Rp",
		PKR: "₨",
		BDT: "৳",
		NGN: "₦"
	};
	return map[code] || code;
}
