"use client";

import { useI18n } from "@/lib/i18n";
import type { Language } from "@/lib/translations";

const languages: { code: Language; label: string; native: string }[] = [
	{ code: "en", label: "EN", native: "English" },
	{ code: "fr", label: "FR", native: "Fran\u00e7ais" },
	{ code: "ar", label: "\u0639\u0631", native: "\u0627\u0644\u0639\u0631\u0628\u064A\u0629" }
];

export function LanguageSelector() {
	const { language, setLanguage } = useI18n();

	return (
		<div className="bg-islamic-cream-200 flex items-center gap-0.5 rounded-lg p-0.5">
			{languages.map((lang) => (
				<button
					key={lang.code}
					onClick={() => setLanguage(lang.code)}
					title={lang.native}
					className={`min-w-[36px] rounded-md px-2.5 py-1.5 text-xs font-semibold transition-all ${
						language === lang.code
							? "bg-islamic-green-800 text-white shadow-sm"
							: "text-islamic-green-800 hover:bg-islamic-cream-300"
					}`}>
					{lang.label}
				</button>
			))}
		</div>
	);
}
