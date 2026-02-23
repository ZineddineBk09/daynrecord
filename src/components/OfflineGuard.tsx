"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { useI18n } from "@/lib/i18n";

export function OfflineGuard({ children }: { children: React.ReactNode }) {
  const { t } = useI18n();
  const [isOnline, setIsOnline] = useState(true);
  const [showBackOnline, setShowBackOnline] = useState(false);
  const [wasOffline, setWasOffline] = useState(false);

  useEffect(() => {
    setIsOnline(navigator.onLine);
    if (!navigator.onLine) setWasOffline(true);

    const handleOnline = () => {
      setIsOnline(true);
      if (wasOffline) {
        setShowBackOnline(true);
        setTimeout(() => setShowBackOnline(false), 3000);
      }
    };
    const handleOffline = () => {
      setIsOnline(false);
      setWasOffline(true);
    };

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);
    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, [wasOffline]);

  const handleRetry = useCallback(() => {
    if (navigator.onLine) {
      setIsOnline(true);
      setShowBackOnline(true);
      setTimeout(() => setShowBackOnline(false), 3000);
    }
  }, []);

  if (!isOnline) {
    return (
      <>
        <header className="border-b border-islamic-gold-200/50 bg-white/60 backdrop-blur-md sticky top-0 z-50">
          <div className="max-w-3xl mx-auto px-4 py-2 flex items-center gap-2.5">
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
          </div>
        </header>

        {/* Offline banner */}
        <div className="bg-amber-50 border-b border-amber-200 px-4 py-2 text-center">
          <p className="text-xs text-amber-800 font-medium flex items-center justify-center gap-2">
            <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
            {t.offline_banner}
          </p>
        </div>

        <main className="flex-1 flex items-center justify-center px-4 py-16">
          <div className="max-w-md w-full text-center">
            <div className="h-1 w-24 mx-auto bg-gradient-to-r from-islamic-green-800 via-islamic-gold-500 to-islamic-green-800 rounded-full mb-10" />

            {/* Offline icon */}
            <div className="relative inline-block mb-6">
              <div className="w-24 h-24 rounded-full bg-amber-50 border-2 border-amber-200 flex items-center justify-center mx-auto">
                <svg className="w-12 h-12 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5a17.92 17.92 0 0 1-8.716-2.247m0 0A9 9 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
                </svg>
              </div>
              {/* Disconnection slash */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-28 h-28 pointer-events-none">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <line x1="20" y1="80" x2="80" y2="20" stroke="#F59E0B" strokeWidth="3" strokeLinecap="round" />
                </svg>
              </div>
            </div>

            <h2 className="font-amiri text-2xl sm:text-3xl font-bold text-islamic-green-900 mb-3">
              {t.offline_title}
            </h2>

            <p className="text-gray-500 text-sm leading-relaxed mb-6 max-w-sm mx-auto">
              {t.offline_description}
            </p>

            {/* Verse */}
            <div className="islamic-card p-5 mb-8 text-center">
              <div className="font-amiri text-islamic-gold-500 text-xs mb-2">
                بسم الله الرحمن الرحيم
              </div>
              <p className="font-amiri text-islamic-green-800 text-sm italic leading-relaxed">
                {t.offline_verse}
              </p>
              <p className="text-xs text-islamic-green-700/50 mt-2">
                {t.verse_ref}
              </p>
            </div>

            {/* Retry button */}
            <button onClick={handleRetry} className="islamic-btn-primary">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.288 15.038a5.25 5.25 0 0 1 7.424-7.424m-1.414 1.414a5.25 5.25 0 0 0-7.424 7.424M2.25 12C2.25 6.615 6.615 2.25 12 2.25S21.75 6.615 21.75 12 17.385 21.75 12 21.75 2.25 17.385 2.25 12Z" />
              </svg>
              {t.offline_retry}
            </button>

            {/* Decorative */}
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

  return (
    <>
      {/* Back-online toast */}
      {showBackOnline && (
        <div className="fixed top-4 left-1/2 -translate-x-1/2 z-[100] animate-slide-down">
          <div className="bg-islamic-green-800 text-white rounded-lg px-5 py-2.5 shadow-lg flex items-center gap-2 text-sm font-medium">
            <svg className="w-4 h-4 text-islamic-gold-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.288 15.038a5.25 5.25 0 0 1 7.424-7.424m-1.414 1.414a5.25 5.25 0 0 0-7.424 7.424M2.25 12C2.25 6.615 6.615 2.25 12 2.25S21.75 6.615 21.75 12 17.385 21.75 12 21.75 2.25 17.385 2.25 12Z" />
            </svg>
            {t.offline_back_online}
          </div>
        </div>
      )}
      {children}
    </>
  );
}
