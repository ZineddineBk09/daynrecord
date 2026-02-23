"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useI18n } from "@/lib/i18n";

export default function NotFound() {
  const { t } = useI18n();
  const router = useRouter();

  return (
    <>
      <header className="border-b border-islamic-gold-200/50 bg-white/60 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-3xl mx-auto px-4 py-2 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5">
            <Image
              src="/logo/logo-no-text.png"
              alt="DaynRecord"
              width={40}
              height={40}
              className="shrink-0"
            />
            <div>
              <h1 className="font-amiri text-xl text-islamic-green-900 font-bold leading-tight">
                {t.app_name}
              </h1>
              <p className="text-xs text-islamic-green-700/70">{t.app_tagline}</p>
            </div>
          </Link>
        </div>
      </header>

      <main className="flex-1 flex items-center justify-center px-4 py-16">
        <div className="max-w-md w-full text-center">
          {/* Decorative top line */}
          <div className="h-1 w-24 mx-auto bg-gradient-to-r from-islamic-green-800 via-islamic-gold-500 to-islamic-green-800 rounded-full mb-10" />

          {/* Logo faded */}
          <div className="relative inline-block mb-6">
            <Image
              src="/logo/logo-no-text.png"
              alt=""
              width={80}
              height={80}
              className="opacity-20"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="font-amiri text-4xl font-bold text-islamic-green-800">404</span>
            </div>
          </div>

          <h2 className="font-amiri text-2xl sm:text-3xl font-bold text-islamic-green-900 mb-3">
            {t.not_found_title}
          </h2>

          <p className="text-gray-500 text-sm leading-relaxed mb-6 max-w-sm mx-auto">
            {t.not_found_description}
          </p>

          {/* Verse */}
          <div className="islamic-card p-5 mb-8 text-center">
            <div className="font-amiri text-islamic-gold-500 text-xs mb-2">
              بسم الله الرحمن الرحيم
            </div>
            <p className="font-amiri text-islamic-green-800 text-sm italic leading-relaxed">
              {t.not_found_verse}
            </p>
            <p className="text-xs text-islamic-green-700/50 mt-2">
              {t.verse_ref}
            </p>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/" className="islamic-btn-primary">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
              </svg>
              {t.not_found_go_home}
            </Link>
            <button onClick={() => router.back()} className="islamic-btn-secondary">
              <svg className="w-4 h-4 rtl:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
              </svg>
              {t.not_found_go_back}
            </button>
          </div>

          {/* Decorative bottom */}
          <div className="mt-12 flex justify-center items-center gap-3">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-islamic-gold-400" />
            <span className="text-islamic-gold-500 text-sm">&#10022;</span>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-islamic-gold-400" />
          </div>
        </div>
      </main>
    </>
  );
}
