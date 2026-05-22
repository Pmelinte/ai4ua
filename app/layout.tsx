import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AI4UA — Artificial Intelligence for User Aid",
  description: "Bridging the gap between promise and reality. Objective AI-powered trust scores for companies worldwide.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <nav>
          <div className="nav-inner">
            <a href="/" className="nav-logo">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-label="AI4UA Logo">
                <circle cx="16" cy="16" r="14" stroke="#4f98a3" strokeWidth="1.5" strokeDasharray="3 2"/>
                <circle cx="16" cy="10" r="3" fill="#4f98a3"/>
                <path d="M10 22 Q10 17 16 17 Q22 17 22 22" stroke="#4f98a3" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
                <circle cx="7" cy="16" r="2" fill="#4f98a3" opacity="0.5"/>
                <circle cx="25" cy="16" r="2" fill="#4f98a3" opacity="0.5"/>
                <line x1="9" y1="16" x2="13" y2="16" stroke="#4f98a3" strokeWidth="1" opacity="0.4"/>
                <line x1="19" y1="16" x2="23" y2="16" stroke="#4f98a3" strokeWidth="1" opacity="0.4"/>
              </svg>
              <span>AI4UA</span>
            </a>
            <div className="nav-links">
              <a href="/score/anthropic">Trust Score</a>
              <a href="/incidents/new">Report Incident</a>
              <a href="/#how">How It Works</a>
              <a href="/#companies">For Companies</a>
              <a href="/transparency">Transparency</a>
            </div>
            <a href="/incidents/new" className="nav-cta">Report an Incident</a>
          </div>
        </nav>
        {children}
        <footer>
          <div className="footer-inner">
            <div className="footer-copy">© 2026 AI4UA · Artificial Intelligence for User Aid · ai4ua.com</div>
            <div className="footer-links">
              <a href="/transparency">Methodology</a>
              <a href="#">Privacy</a>
              <a href="#">API</a>
              <a href="#">Contact</a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
