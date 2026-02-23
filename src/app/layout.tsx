import { I18nProvider } from "@/lib/i18n";
import type { Metadata, Viewport } from "next";
import { Amiri, Inter } from "next/font/google";

import { ServiceWorkerRegister } from "@/components/ServiceWorkerRegister";
import { OfflineGuard } from "@/components/OfflineGuard";

import "./globals.css";

const amiri = Amiri({
	subsets: ["arabic", "latin"],
	weight: ["400", "700"],
	variable: "--font-amiri",
	display: "swap"
});

const inter = Inter({
	subsets: ["latin"],
	variable: "--font-inter",
	display: "swap"
});

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://daynrecord.netlify.app";
const SITE_NAME = "DaynRecord — دَيْن ريكورد";

const descriptions = {
	en: "Generate transparent, tamper-evident loan agreements inspired by Islamic finance principles. No accounts, no data stored — just clarity and trust between parties. Free, private, and works offline.",
	fr: "Générez des accords de prêt transparents et infalsifiables, inspirés des principes de la finance islamique. Sans compte, sans stockage de données — juste clarté et confiance entre les parties. Gratuit, privé et fonctionne hors ligne.",
	ar: "أنشئ سجلات ديون شفافة وغير قابلة للتلاعب، مستوحاة من مبادئ التمويل الإسلامي. بدون حسابات، بدون تخزين بيانات — فقط وضوح وثقة بين الأطراف. مجاني، خاص، ويعمل بدون إنترنت."
};

export const metadata: Metadata = {
	metadataBase: new URL(SITE_URL),
	title: {
		default: "DaynRecord — Free Loan Agreement Generator | Générateur d'accords de prêt | مولد اتفاقيات الديون",
		template: "%s | DaynRecord"
	},
	description: `${descriptions.en} | ${descriptions.fr} | ${descriptions.ar}`,
	keywords: [
		// English keywords
		"loan agreement",
		"debt record",
		"loan contract",
		"loan agreement generator",
		"free loan agreement",
		"Islamic finance",
		"Islamic loan",
		"dayn",
		"debt witness",
		"tamper-evident document",
		"loan record",
		"borrowing agreement",
		"lending agreement",
		"private loan",
		"personal loan agreement",
		"loan between friends",
		"family loan agreement",
		"debt acknowledgment",
		"loan PDF generator",
		"Quran 2:282",
		"Al-Baqarah debt",
		"free loan contract template",
		"digital loan agreement",
		"loan witness signature",

		// French keywords
		"accord de prêt",
		"contrat de prêt",
		"contrat de prêt gratuit",
		"enregistrement de dette",
		"générateur de contrat de prêt",
		"prêt entre amis",
		"prêt familial",
		"reconnaissance de dette",
		"modèle de contrat de prêt",
		"finance islamique",
		"prêt personnel",
		"prêt privé",
		"témoin de prêt",
		"document infalsifiable",
		"prêt sans intérêt",
		"Coran 2:282",

		// Arabic keywords
		"اتفاقية دين",
		"سجل دين",
		"عقد دين",
		"عقد دين مجاني",
		"دين بين الأصدقاء",
		"دين عائلي",
		"إقرار دين",
		"توثيق دين",
		"شاهد على الدين",
		"تمويل إسلامي",
		"دين حسن",
		"دين بدون فوائد",
		"سورة البقرة ٢٨٢",
		"كتابة الدين",
		"توثيق الدين",
		"عقد دين إلكتروني",
		"نموذج عقد دين",
		"تسجيل اتفاقية دين"
	],
	authors: [
		{
			name: "Zineddine Benkhaled",
			url: "https://github.com/ZineddineBk09"
		}
	],
	creator: "Zineddine Benkhaled",
	publisher: "DaynRecord",
	manifest: "/manifest.json",
	applicationName: SITE_NAME,
	category: "finance",
	classification: "Business/Finance",

	openGraph: {
		type: "website",
		locale: "en_US",
		alternateLocale: ["fr_FR", "ar_SA"],
		url: SITE_URL,
		siteName: SITE_NAME,
		title: "DaynRecord — Free Loan Agreement Generator | Générateur d'accords de prêt | مولد اتفاقيات الديون",
		description: `${descriptions.en} | ${descriptions.fr}`
	},

	twitter: {
		card: "summary_large_image",
		title: "DaynRecord — Free Loan Agreement Generator | مولد اتفاقيات الديون",
		description:
			"Generate transparent, tamper-evident loan agreements. No accounts, no storage — inspired by Quran 2:282. | أنشئ سجلات ديون شفافة وغير قابلة للتلاعب — مستوحاة من سورة البقرة ٢:٢٨٢",
		creator: "@ZineddineBk09"
	},

	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			"max-video-preview": -1,
			"max-image-preview": "large",
			"max-snippet": -1
		}
	},

	alternates: {
		canonical: SITE_URL,
		languages: {
			"en": SITE_URL,
			"fr": `${SITE_URL}?lang=fr`,
			"ar": `${SITE_URL}?lang=ar`,
			"x-default": SITE_URL
		}
	},

	appleWebApp: {
		capable: true,
		statusBarStyle: "default",
		title: SITE_NAME
	},

	other: {
		"google-site-verification": process.env.GOOGLE_SITE_VERIFICATION || ""
	}
};

export const viewport: Viewport = {
	width: "device-width",
	initialScale: 1,
	maximumScale: 5,
	userScalable: true,
	themeColor: [
		{ media: "(prefers-color-scheme: light)", color: "#064E3B" },
		{ media: "(prefers-color-scheme: dark)", color: "#064E3B" }
	]
};

function JsonLd() {
	const structuredData = [
		{
			"@context": "https://schema.org",
			"@type": "WebApplication",
			name: "DaynRecord",
			alternateName: ["دَيْن ريكورد", "DaynRecord - Enregistrement de prêt"],
			url: SITE_URL,
			description: descriptions.en,
			applicationCategory: "FinanceApplication",
			operatingSystem: "Any",
			browserRequirements: "Requires JavaScript",
			offers: {
				"@type": "Offer",
				price: "0",
				priceCurrency: "USD"
			},
			author: {
				"@type": "Person",
				name: "Zineddine Benkhaled",
				url: "https://github.com/ZineddineBk09"
			},
			creator: {
				"@type": "Person",
				name: "Zineddine Benkhaled",
				url: "https://github.com/ZineddineBk09"
			},
			inLanguage: ["en", "fr", "ar"],
			availableLanguage: [
				{
					"@type": "Language",
					name: "English",
					alternateName: "en"
				},
				{
					"@type": "Language",
					name: "French",
					alternateName: "fr"
				},
				{
					"@type": "Language",
					name: "Arabic",
					alternateName: "ar"
				}
			],
			isAccessibleForFree: true,
			featureList: [
				"Free loan agreement generation",
				"Tamper-evident PDF documents",
				"QR code verification",
				"Multi-language support (English, French, Arabic)",
				"Offline capable (PWA)",
				"No account required",
				"No data stored on servers",
				"Digital signatures",
				"Witness confirmation"
			]
		},
		{
			"@context": "https://schema.org",
			"@type": "WebApplication",
			"@language": "fr",
			name: "DaynRecord",
			alternateName: "DaynRecord - Enregistrement de prêt",
			url: `${SITE_URL}?lang=fr`,
			description: descriptions.fr,
			applicationCategory: "FinanceApplication",
			inLanguage: "fr",
			isAccessibleForFree: true,
			author: {
				"@type": "Person",
				name: "Zineddine Benkhaled",
				url: "https://github.com/ZineddineBk09"
			},
			featureList: [
				"Génération gratuite d'accords de prêt",
				"Documents PDF infalsifiables",
				"Vérification par code QR",
				"Support multilingue (Anglais, Français, Arabe)",
				"Fonctionne hors ligne (PWA)",
				"Aucun compte requis",
				"Aucune donnée stockée sur les serveurs",
				"Signatures numériques",
				"Confirmation des témoins"
			]
		},
		{
			"@context": "https://schema.org",
			"@type": "WebApplication",
			"@language": "ar",
			name: "دَيْن ريكورد",
			alternateName: "DaynRecord",
			url: `${SITE_URL}?lang=ar`,
			description: descriptions.ar,
			applicationCategory: "FinanceApplication",
			inLanguage: "ar",
			isAccessibleForFree: true,
			author: {
				"@type": "Person",
				name: "Zineddine Benkhaled",
				url: "https://github.com/ZineddineBk09"
			},
			featureList: [
				"إنشاء اتفاقيات ديون مجانية",
				"مستندات PDF غير قابلة للتلاعب",
				"التحقق عبر رمز QR",
				"دعم متعدد اللغات (الإنجليزية، الفرنسية، العربية)",
				"يعمل بدون إنترنت (PWA)",
				"بدون حساب",
				"لا يتم تخزين أي بيانات على الخوادم",
				"توقيعات رقمية",
				"تأكيد الشهود"
			]
		}
	];

	return (
		<>
			{structuredData.map((data, i) => (
				<script
					key={i}
					type="application/ld+json"
					dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
				/>
			))}
		</>
	);
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html
			lang="en"
			dir="ltr"
			className={`${amiri.variable} ${inter.variable}`}>
			<head>
				<link rel="apple-touch-icon" href="/logo/logo-no-text.png" />
				<link rel="icon" type="image/png" href="/logo/logo-no-text.png" />
				<JsonLd />
			</head>
			<body className="islamic-pattern-bg min-h-screen">
				<I18nProvider>
					<ServiceWorkerRegister />
					<OfflineGuard>
						<div className="flex min-h-screen flex-col">{children}</div>
					</OfflineGuard>
				</I18nProvider>
			</body>
		</html>
	);
}
