"use client";

import { useI18n } from "@/lib/i18n";
import Image from "next/image";

import { LanguageSelector } from "@/components/LanguageSelector";
import { VerseCard } from "@/components/VerseCard";
import { WizardFlow } from "@/components/WizardFlow";

export default function Home() {
	const { t } = useI18n();

	return (
		<>
			{/* Header */}
			<header className="border-islamic-gold-200/50 sticky top-0 z-50 border-b bg-white/60 backdrop-blur-md">
				<div className="mx-auto flex max-w-3xl items-center justify-between px-4 py-2">
					<div className="flex items-center gap-2.5">
						<Image
							src="/logo/logo-no-text.png"
							alt="DaynRecord"
							width={40}
							height={40}
							className="shrink-0"
							priority
						/>
						<div>
							<h1 className="font-amiri text-islamic-green-900 text-xl leading-tight font-bold">
								{t.app_name}
							</h1>
							<p className="text-islamic-green-700/70 text-xs">{t.app_tagline}</p>
						</div>
					</div>
					<LanguageSelector />
				</div>
			</header>

			{/* Main */}
			<main className="flex-1 px-4 py-6 sm:py-8">
				<div className="mx-auto max-w-3xl">
					{/* Hero */}
					<div className="mb-8 text-center sm:mb-10">
						<div className="mb-4 flex justify-center">
							<Image
								src="/logo/logo-full.png"
								alt="DaynRecord"
								width={280}
								height={70}
								className="h-14 w-auto sm:h-16"
								priority
							/>
						</div>
						<div className="mb-3 inline-block">
							<span className="font-amiri text-islamic-gold-500 text-lg">{t.bismillah}</span>
						</div>
						<h2 className="font-amiri text-islamic-green-900 mb-3 text-3xl font-bold sm:text-5xl">
							{t.hero_title}
						</h2>
						<p className="mx-auto max-w-lg text-sm leading-relaxed text-gray-500">
							{t.hero_description}
						</p>
					</div>
					<VerseCard />
					<WizardFlow />
				</div>
			</main>

			{/* Footer */}
			<footer className="border-islamic-gold-200/50 border-t bg-white/40 backdrop-blur-sm">
				<div className="mx-auto max-w-3xl px-4 py-6 text-center">
					<Image
						src="/logo/logo-no-text.png"
						alt="DaynRecord"
						width={32}
						height={32}
						className="mx-auto mb-3 opacity-40"
					/>
					<p className="font-amiri text-islamic-green-800/60 text-sm italic">{t.verse}</p>
					<a
						href="https://quran.com/2/282"
						target="_blank"
						rel="noopener noreferrer"
						className="text-islamic-green-700/40 hover:text-islamic-green-700/70 mt-1 inline-block text-xs hover:underline">
						{t.verse_ref}
					</a>
					<div className="mt-4 pt-4 border-t border-islamic-gold-200/30">
						<p className="text-xs text-islamic-green-700/40">
							Built by{" "}
							<a
								href="https://github.com/ZineddineBk09"
								target="_blank"
								rel="noopener noreferrer"
								className="text-islamic-green-700/60 hover:text-islamic-green-800 font-medium transition-colors hover:underline"
							>
								Zineddine Benkhaled
							</a>
						</p>
					</div>
				</div>
			</footer>
		</>
	);
}
