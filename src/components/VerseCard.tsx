"use client";

import { useI18n } from "@/lib/i18n";
import { useState } from "react";

const ARABIC_VERSE =
	"يَـٰٓأَيُّهَا ٱلَّذِينَ ءَامَنُوٓا۟ إِذَا تَدَايَنتُم بِدَيْنٍ إِلَىٰٓ أَجَلٍۢ مُّسَمًّۭى فَٱكْتُبُوهُ ۚ وَلْيَكْتُب بَّيْنَكُمْ كَاتِبٌۢ بِٱلْعَدْلِ ۚ وَلَا يَأْبَ كَاتِبٌ أَن يَكْتُبَ كَمَا عَلَّمَهُ ٱللَّهُ ۚ فَلْيَكْتُبْ وَلْيُمْلِلِ ٱلَّذِى عَلَيْهِ ٱلْحَقُّ وَلْيَتَّقِ ٱللَّهَ رَبَّهُۥ وَلَا يَبْخَسْ مِنْهُ شَيْـًۭٔا ۚ فَإِن كَانَ ٱلَّذِى عَلَيْهِ ٱلْحَقُّ سَفِيهًا أَوْ ضَعِيفًا أَوْ لَا يَسْتَطِيعُ أَن يُمِلَّ هُوَ فَلْيُمْلِلْ وَلِيُّهُۥ بِٱلْعَدْلِ ۚ وَٱسْتَشْهِدُوا۟ شَهِيدَيْنِ مِن رِّجَالِكُمْ ۖ فَإِن لَّمْ يَكُونَا رَجُلَيْنِ فَرَجُلٌۭ وَٱمْرَأَتَانِ مِمَّن تَرْضَوْنَ مِنَ ٱلشُّهَدَآءِ أَن تَضِلَّ إِحْدَىٰهُمَا فَتُذَكِّرَ إِحْدَىٰهُمَا ٱلْأُخْرَىٰ ۚ وَلَا يَأْبَ ٱلشُّهَدَآءُ إِذَا مَا دُعُوا۟ ۚ وَلَا تَسْـَٔمُوٓا۟ أَن تَكْتُبُوهُ صَغِيرًا أَوْ كَبِيرًا إِلَىٰٓ أَجَلِهِۦ ۚ ذَٰلِكُمْ أَقْسَطُ عِندَ ٱللَّهِ وَأَقْوَمُ لِلشَّهَـٰدَةِ وَأَدْنَىٰٓ أَلَّا تَرْتَابُوٓا۟ ۖ إِلَّآ أَن تَكُونَ تِجَـٰرَةً حَاضِرَةًۭ تُدِيرُونَهَا بَيْنَكُمْ فَلَيْسَ عَلَيْكُمْ جُنَاحٌ أَلَّا تَكْتُبُوهَا ۗ وَأَشْهِدُوٓا۟ إِذَا تَبَايَعْتُمْ ۚ وَلَا يُضَآرَّ كَاتِبٌۭ وَلَا شَهِيدٌۭ ۚ وَإِن تَفْعَلُوا۟ فَإِنَّهُۥ فُسُوقٌۢ بِكُمْ ۗ وَٱتَّقُوا۟ ٱللَّهَ ۖ وَيُعَلِّمُكُمُ ٱللَّهُ ۗ وَٱللَّهُ بِكُلِّ شَىْءٍ عَلِيمٌۭ ٢٨٢";

const TRANSLATIONS: Record<string, string> = {
	en: "O believers! When you contract a loan for a fixed period of time, commit it to writing. Let the scribe maintain justice between the parties. The scribe should not refuse to write as Allah has taught them to write. They will write what the debtor dictates, bearing Allah in mind and not defrauding the debt. If the debtor is incompetent, weak, or unable to dictate, let their guardian dictate for them with justice. Call upon two of your men to witness. If two men cannot be found, then one man and two women of your choice will witness\u2014so if one of the women forgets the other may remind her. The witnesses must not refuse when they are summoned. You must not be against writing contracts for a fixed period\u2014whether the sum is small or great. This is more just for you in the sight of Allah, and more convenient to establish evidence and remove doubts. However, if you conduct an immediate transaction among yourselves, then there is no need for you to record it, but call upon witnesses when a deal is finalized. Let no harm come to the scribe or witnesses. If you do, then you have gravely exceeded your limits. Be mindful of Allah, for Allah is the One Who teaches you. And Allah has perfect knowledge of all things.",
	fr: "\u00D4 les croyants\u00A0! Quand vous contractez une dette \u00E0 \u00E9ch\u00E9ance d\u00E9termin\u00E9e, mettez-la en \u00E9crit. Et qu\u2019un scribe l\u2019\u00E9crive entre vous en toute justice. Le scribe ne doit pas refuser d\u2019\u00E9crire comme Allah le lui a enseign\u00E9. Qu\u2019il \u00E9crive donc et que le d\u00E9biteur dicte, qu\u2019il craigne Allah son Seigneur et ne diminue rien de sa dette. Si le d\u00E9biteur est faible d\u2019esprit, ou faible, ou incapable de dicter lui-m\u00EAme, que son tuteur dicte avec justice. Faites-en t\u00E9moigner par deux t\u00E9moins d\u2019entre vos hommes. Et \u00E0 d\u00E9faut de deux hommes, un homme et deux femmes parmi ceux que vous agr\u00E9ez comme t\u00E9moins\u2014en sorte que si l\u2019une d\u2019elles s\u2019\u00E9gare, l\u2019autre puisse lui rappeler. Les t\u00E9moins ne doivent pas refuser quand ils sont appel\u00E9s. Ne r\u00E9pugnez pas \u00E0 \u00E9crire la dette, qu\u2019elle soit petite ou grande, avec son \u00E9ch\u00E9ance. Cela est plus juste aupr\u00E8s d\u2019Allah, plus droit pour le t\u00E9moignage et plus susceptible d\u2019\u00E9carter les doutes. Mais s\u2019il s\u2019agit d\u2019une transaction imm\u00E9diate entre vous, pas de faute \u00E0 ne pas l\u2019\u00E9crire. Prenez des t\u00E9moins lorsque vous concluez un contrat. Qu\u2019on ne fasse tort ni au scribe ni au t\u00E9moin. Si vous le faites, cela serait une perversit\u00E9 de votre part. Craignez Allah, car c\u2019est Allah qui vous enseigne. Et Allah est Omniscient.",
	ar: ""
};

export function VerseCard() {
	const { language } = useI18n();
	const [expanded, setExpanded] = useState(false);
	const translation = TRANSLATIONS[language] || TRANSLATIONS.en;

	return (
		<div className="mb-8 sm:mb-10">
			<button
				onClick={() => setExpanded(!expanded)}
				className="group w-full"
				type="button">
				<div className="islamic-card relative p-5 transition-all hover:shadow-md sm:p-6">
					{/* Decorative top */}
					<div className="mb-3 flex items-center justify-center gap-3">
						<div className="to-islamic-gold-400/50 h-px flex-1 bg-gradient-to-r from-transparent" />
						<svg
							className="text-islamic-gold-500 h-5 w-5 shrink-0"
							viewBox="0 0 24 24"
							fill="currentColor">
							<path d="M12 2L9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2z" />
						</svg>
						<span className="text-islamic-gold-600 text-xs font-medium tracking-widest whitespace-nowrap uppercase">
							{language === "ar"
								? "سورة البقرة ٢:٢٨٢"
								: language === "fr"
									? "La Vache 2:282"
									: "The Cow 2:282"}
						</span>
						<svg
							className="text-islamic-gold-500 h-5 w-5 shrink-0"
							viewBox="0 0 24 24"
							fill="currentColor">
							<path d="M12 2L9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2z" />
						</svg>
						<div className="to-islamic-gold-400/50 h-px flex-1 bg-gradient-to-l from-transparent" />
					</div>

					{/* Preview: first sentence */}
					<p
						className="font-amiri text-islamic-green-900/80 text-center text-sm leading-relaxed sm:text-base"
						dir="rtl">
						{expanded
							? ARABIC_VERSE
							: "يَـٰٓأَيُّهَا ٱلَّذِينَ ءَامَنُوٓا۟ إِذَا تَدَايَنتُم بِدَيْنٍ إِلَىٰٓ أَجَلٍۢ مُّسَمًّۭى فَٱكْتُبُوهُ ۚ"}
					</p>

					{expanded && (
						<div className="mt-5 space-y-4">
							<div className="islamic-divider" />

							{/* Translation */}
							{translation && (
								<p className="mx-auto max-w-2xl text-center text-sm leading-relaxed text-gray-600">
									{translation}
								</p>
							)}

							{/* Attribution */}
							<div className="space-y-1 pt-2 text-center">
								<p className="text-islamic-gold-600 text-xs italic">
									{language === "fr"
										? "\u2014 Traduction adapt\u00E9e"
										: language === "ar"
											? ""
											: "\u2014 Dr. Mustafa Khattab, The Clear Quran"}
								</p>
								<a
									href="https://quran.com/2/282"
									target="_blank"
									rel="noopener noreferrer"
									onClick={(e) => e.stopPropagation()}
									className="text-islamic-green-700 hover:text-islamic-green-900 inline-flex items-center gap-1 text-xs hover:underline">
									quran.com/2/282
									<svg
										className="h-3 w-3"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
										strokeWidth={2}>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
										/>
									</svg>
								</a>
							</div>
						</div>
					)}

					{/* Expand hint */}
					<div className="mt-3 flex justify-center">
						<span className="text-islamic-green-700/60 group-hover:text-islamic-green-800 inline-flex items-center gap-1 text-xs transition-colors">
							{expanded
								? language === "ar"
									? "إخفاء"
									: language === "fr"
										? "R\u00E9duire"
										: "Show less"
								: language === "ar"
									? "اقرأ الآية كاملة"
									: language === "fr"
										? "Lire le verset complet"
										: "Read full verse"}
							<svg
								className={`h-3.5 w-3.5 transition-transform duration-200 ${
									expanded ? "rotate-180" : ""
								}`}
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
								strokeWidth={2}>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M19.5 8.25l-7.5 7.5-7.5-7.5"
								/>
							</svg>
						</span>
					</div>
				</div>
			</button>
		</div>
	);
}
