"use client";

import { type ReactNode, createContext, useCallback, useContext, useEffect, useState } from "react";

import { type Language, type TranslationStrings, translations } from "./translations";

interface I18nContextType {
	language: Language;
	setLanguage: (lang: Language) => void;
	t: TranslationStrings;
	dir: "ltr" | "rtl";
	isRTL: boolean;
}

const I18nContext = createContext<I18nContextType | null>(null);

const STORAGE_KEY = "daynrecord_lang";

function getInitialLanguage(): Language {
	if (typeof window === "undefined") return "en";
	const stored = localStorage.getItem(STORAGE_KEY);
	if (stored === "en" || stored === "fr" || stored === "ar") return stored;
	const browserLang = navigator.language.split("-")[0];
	if (browserLang === "fr") return "fr";
	if (browserLang === "ar") return "ar";
	return "en";
}

export function I18nProvider({ children }: { children: ReactNode }) {
	const [language, setLanguageState] = useState<Language>("en");
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setLanguageState(getInitialLanguage());
		setMounted(true);
	}, []);

	const setLanguage = useCallback((lang: Language) => {
		setLanguageState(lang);
		localStorage.setItem(STORAGE_KEY, lang);
		document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
		document.documentElement.lang = lang;
	}, []);

	useEffect(() => {
		if (mounted) {
			document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
			document.documentElement.lang = language;
		}
	}, [language, mounted]);

	const dir = language === "ar" ? "rtl" : "ltr";

	return (
		<I18nContext.Provider
			value={{
				language,
				setLanguage,
				t: translations[language],
				dir,
				isRTL: language === "ar"
			}}>
			{children}
		</I18nContext.Provider>
	);
}

export function useI18n() {
	const context = useContext(I18nContext);
	if (!context) {
		throw new Error("useI18n must be used within I18nProvider");
	}
	return context;
}
