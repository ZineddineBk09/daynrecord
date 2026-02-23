"use client";

import Link from "next/link";

interface GlobalErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function GlobalError({ error, reset }: GlobalErrorProps) {
  return (
    <html lang="en" dir="ltr">
      <head>
        <title>DaynRecord — Error</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <style>{`
          *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
          body {
            font-family: 'Georgia', 'Times New Roman', serif;
            background: #FFFBF0;
            color: #1a1a1a;
            min-height: 100vh;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            padding: 2rem;
          }
          .container { max-width: 420px; text-align: center; }
          .top-line {
            height: 4px;
            width: 80px;
            margin: 0 auto 2.5rem;
            background: linear-gradient(to right, #064E3B, #C4A052, #064E3B);
            border-radius: 4px;
          }
          .icon {
            width: 72px;
            height: 72px;
            border-radius: 50%;
            background: #FEF2F2;
            border: 2px solid #FECACA;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0 auto 1.5rem;
          }
          .icon svg { width: 36px; height: 36px; color: #F87171; }
          h1 { font-size: 1.75rem; color: #064E3B; margin-bottom: 0.75rem; font-weight: 700; }
          .desc { font-size: 0.875rem; color: #6B7280; line-height: 1.6; margin-bottom: 1.5rem; font-family: system-ui, sans-serif; }
          .verse-card {
            background: white;
            border: 1px solid rgba(196, 160, 82, 0.3);
            border-radius: 12px;
            padding: 1.25rem;
            margin-bottom: 2rem;
            position: relative;
            overflow: hidden;
          }
          .verse-card::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 3px;
            background: linear-gradient(to right, #064E3B, #C4A052, #064E3B);
          }
          .bismillah { font-size: 0.75rem; color: #C4A052; margin-bottom: 0.5rem; }
          .verse { font-size: 0.875rem; color: #064E3B; font-style: italic; line-height: 1.6; }
          .verse-ref { font-size: 0.7rem; color: rgba(6, 78, 59, 0.4); margin-top: 0.5rem; }
          .actions { display: flex; gap: 0.75rem; justify-content: center; flex-wrap: wrap; }
          .btn-primary {
            display: inline-flex;
            align-items: center;
            gap: 0.5rem;
            background: #064E3B;
            color: white;
            border: none;
            border-radius: 8px;
            padding: 0.75rem 1.5rem;
            font-size: 0.875rem;
            font-weight: 500;
            cursor: pointer;
            transition: background 0.2s;
            font-family: system-ui, sans-serif;
          }
          .btn-primary:hover { background: #053f30; }
          .btn-secondary {
            display: inline-flex;
            align-items: center;
            gap: 0.5rem;
            background: white;
            color: #064E3B;
            border: 1px solid rgba(6, 78, 59, 0.25);
            border-radius: 8px;
            padding: 0.75rem 1.5rem;
            font-size: 0.875rem;
            font-weight: 500;
            cursor: pointer;
            transition: background 0.2s;
            text-decoration: none;
            font-family: system-ui, sans-serif;
          }
          .btn-secondary:hover { background: #F5F0E0; }
          .details-btn {
            font-size: 0.7rem;
            color: #9CA3AF;
            background: none;
            border: none;
            cursor: pointer;
            margin-top: 1.5rem;
            font-family: system-ui, sans-serif;
          }
          .details-btn:hover { color: #6B7280; }
          .error-details {
            margin-top: 0.75rem;
            background: #F9FAFB;
            border: 1px solid #E5E7EB;
            border-radius: 8px;
            padding: 1rem;
            font-family: monospace;
            font-size: 0.7rem;
            color: #6B7280;
            word-break: break-all;
            text-align: left;
          }
          .ornament {
            margin-top: 2.5rem;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 0.75rem;
          }
          .ornament-line { height: 1px; width: 48px; background: linear-gradient(to right, transparent, #C4A052); }
          .ornament-line:last-child { background: linear-gradient(to left, transparent, #C4A052); }
          .ornament-star { color: #C4A052; font-size: 0.875rem; }
        `}</style>
      </head>
      <body>
        <div className="container">
          <div className="top-line" />

          <div className="icon">
            <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
            </svg>
          </div>

          <h1>Something Went Wrong</h1>
          <p className="desc">
            A critical error has occurred. Like a misplaced ledger, the record could not be loaded. Please try again.
          </p>

          <div className="verse-card">
            <div className="bismillah">بسم الله الرحمن الرحيم</div>
            <p className="verse">
              &ldquo;Be mindful of Allah, for Allah is the One Who teaches you. And Allah has perfect knowledge of all things.&rdquo;
            </p>
            <p className="verse-ref">Al-Baqarah 2:282</p>
          </div>

          <div className="actions">
            <button className="btn-primary" onClick={reset}>
              <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182" />
              </svg>
              Try Again
            </button>
            <Link href="/" className="btn-secondary">
              <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
              </svg>
              Return Home
            </Link>
          </div>

          {error?.message && (
            <>
              <button className="details-btn" onClick={() => {
                const el = document.getElementById("error-details");
                if (el) el.style.display = el.style.display === "none" ? "block" : "none";
              }}>
                Show error details
              </button>
              <div id="error-details" className="error-details" style={{ display: "none" }}>
                {error.message}
                {error.digest && <><br /><br />Digest: {error.digest}</>}
              </div>
            </>
          )}

          <div className="ornament">
            <div className="ornament-line" />
            <span className="ornament-star">&#10022;</span>
            <div className="ornament-line" />
          </div>
        </div>
      </body>
    </html>
  );
}
