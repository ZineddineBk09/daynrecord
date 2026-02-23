"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useI18n } from "@/lib/i18n";

interface ErrorPageProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function ErrorPage({ error, reset }: ErrorPageProps) {
  const { t } = useI18n();
  const [showDetails, setShowDetails] = useState(false);

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
          <div className="h-1 w-24 mx-auto bg-gradient-to-r from-islamic-green-800 via-islamic-gold-500 to-islamic-green-800 rounded-full mb-10" />

          {/* Warning icon */}
          <div className="relative inline-block mb-6">
            <div className="w-20 h-20 rounded-full bg-red-50 border-2 border-red-200 flex items-center justify-center mx-auto">
              <svg className="w-10 h-10 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
              </svg>
            </div>
          </div>

          <h2 className="font-amiri text-2xl sm:text-3xl font-bold text-islamic-green-900 mb-3">
            {t.error_page_title}
          </h2>

          <p className="text-gray-500 text-sm leading-relaxed mb-6 max-w-sm mx-auto">
            {t.error_page_description}
          </p>

          {/* Verse */}
          <div className="islamic-card p-5 mb-8 text-center">
            <div className="font-amiri text-islamic-gold-500 text-xs mb-2">
              بسم الله الرحمن الرحيم
            </div>
            <p className="font-amiri text-islamic-green-800 text-sm italic leading-relaxed">
              {t.error_page_verse}
            </p>
            <p className="text-xs text-islamic-green-700/50 mt-2">
              {t.verse_ref}
            </p>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-6">
            <button onClick={reset} className="islamic-btn-primary">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182" />
              </svg>
              {t.error_page_try_again}
            </button>
            <Link href="/" className="islamic-btn-secondary">
              <svg className="w-4 h-4 rtl:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
              </svg>
              {t.error_page_go_home}
            </Link>
          </div>

          {/* Error details (collapsible) */}
          {error?.message && (
            <div className="text-left">
              <button
                onClick={() => setShowDetails((v) => !v)}
                className="text-xs text-gray-400 hover:text-gray-600 transition-colors flex items-center gap-1 mx-auto"
              >
                <svg
                  className={`w-3 h-3 transition-transform ${showDetails ? "rotate-90" : ""}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                </svg>
                {t.error_page_details}
              </button>
              {showDetails && (
                <div className="mt-3 bg-gray-50 rounded-lg p-4 border border-gray-200">
                  <p className="font-mono text-xs text-gray-600 break-all whitespace-pre-wrap">
                    {error.message}
                  </p>
                  {error.digest && (
                    <p className="font-mono text-xs text-gray-400 mt-2">
                      Digest: {error.digest}
                    </p>
                  )}
                </div>
              )}
            </div>
          )}

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
