"use client";

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="hero-badge">
          <svg width="10" height="10" viewBox="0 0 10 10"><circle cx="5" cy="5" r="5" fill="#4f98a3"/></svg>
          Beta · Artificial Intelligence for User Aid
        </div>
        <h1>Bridging the gap between<br /><em>promise</em> and reality</h1>
        <p className="hero-sub">AI4UA measures what companies actually deliver — not what they advertise. Objective scores. Structured evidence. No opinions.</p>
        <div className="hero-actions">
          <a href="#score" className="btn-primary">See Trust Scores</a>
          <a href="#report" className="btn-ghost">Report an Incident</a>
        </div>
        <div className="hero-stats">
          <div className="stat"><div className="stat-num">9</div><div className="stat-label">AI Models auditing</div></div>
          <div className="stat"><div className="stat-num">12</div><div className="stat-label">Metrics per score</div></div>
          <div className="stat"><div className="stat-num">3</div><div className="stat-label">Geopolitical pillars</div></div>
          <div className="stat"><div className="stat-num">0</div><div className="stat-label">Human subjectivity</div></div>
        </div>
      </section>

      {/* SCORE DEMO */}
      <section className="score-section" id="score">
        <div className="container">
          <div className="section-label">Trust Score Demo</div>
          <h2 className="section-title">What a company score looks like</h2>
          <p className="section-sub">Every score is built from structured evidence, not reviews. Each metric is calculated independently by multiple AI models.</p>
          <div className="score-card">
            <div className="score-header">
              <div className="company-info">
                <div className="company-avatar">AC</div>
                <div>
                  <div className="company-name">AlphaCloud SaaS</div>
                  <div className="company-industry">AI Services · Software</div>
                </div>
              </div>
              <div className="score-badge">
                <div className="score-num">64<span className="score-max">/100</span></div>
                <div className="score-label">Trust Index</div>
              </div>
            </div>
            <div className="metrics-grid">
              {[
                { name: "ToS Clarity", val: 45, color: "var(--warning)", trend: "▼ -3", cls: "trend-down" },
                { name: "Response Time", val: 72, color: "var(--success)", trend: "▲ +8", cls: "trend-up" },
                { name: "Refund Honour", val: 38, color: "var(--error)", trend: "▼ -12", cls: "trend-down" },
                { name: "Promise Match", val: 61, color: "var(--accent)", trend: "▲ +2", cls: "trend-up" },
                { name: "Security Practice", val: 58, color: "var(--accent)", trend: "▼ -5", cls: "trend-down" },
                { name: "Appeal Process", val: 29, color: "var(--error)", trend: "▼ -18", cls: "trend-down" },
              ].map((m) => (
                <div className="metric-item" key={m.name}>
                  <div className="metric-name">{m.name}</div>
                  <div className="metric-bar-wrap">
                    <div className="metric-bar" style={{ width: `${m.val}%`, background: m.color }} />
                  </div>
                  <div className="metric-val">
                    <span>{m.val}/100</span>
                    <span className={m.cls}>{m.trend}</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="score-footer">
              <div className="ai-badge"><div className="ai-dot" />Audited by 9 AI models · 3 pillars · Last updated 2h ago</div>
              <div className="score-timestamp">Score v4.2 · 847 verified incidents</div>
            </div>
          </div>
        </div>
      </section>

      {/* REPORT INCIDENT */}
      <section className="form-section" id="report">
        <div className="container">
          <div className="section-label">Report an Incident</div>
          <h2 className="section-title">Structure your experience.<br />Not your frustration.</h2>
          <p className="section-sub">We don&apos;t ask for opinions. We ask for facts. Structured evidence is the only signal that cannot be gamed.</p>
          <div className="form-card">
            <div className="form-grid">
              <div className="form-group">
                <label htmlFor="company">Company name</label>
                <input type="text" id="company" placeholder="e.g. Anthropic, Amazon, Booking.com" />
              </div>
              <div className="form-group">
                <label htmlFor="industry">Industry</label>
                <select id="industry">
                  <option value="">Select industry…</option>
                  <option>AI / Software</option>
                  <option>E-commerce</option>
                  <option>Banking / Finance</option>
                  <option>Insurance</option>
                  <option>Telecommunications</option>
                  <option>Travel / Hospitality</option>
                  <option>Healthcare</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="incident-type">Incident type</label>
                <select id="incident-type">
                  <option value="">Select type…</option>
                  <option>Promise ≠ Delivery (product/service)</option>
                  <option>Account suspended without explanation</option>
                  <option>Refund refused or delayed</option>
                  <option>Hidden fees / undisclosed charges</option>
                  <option>No human support available</option>
                  <option>Data misuse / privacy breach</option>
                  <option>Contract clause violation</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="date">Incident date</label>
                <input type="date" id="date" />
              </div>
              <div className="form-group full">
                <label htmlFor="facts">Facts only — what was promised vs. what happened</label>
                <textarea id="facts" placeholder="Example: Product listing stated 8GB RAM. Device delivered has 1GB RAM. Order #12345, purchased 2024-03-15." />
              </div>
              <div className="form-group">
                <label htmlFor="evidence">Evidence type</label>
                <select id="evidence">
                  <option value="">What evidence do you have?</option>
                  <option>Screenshots of promises</option>
                  <option>Email correspondence</option>
                  <option>Contract / Terms of Service</option>
                  <option>Bank statement</option>
                  <option>Product photos</option>
                  <option>Multiple evidence types</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="resolution">Was the issue resolved?</label>
                <select id="resolution">
                  <option value="">Select status…</option>
                  <option>No — company unresponsive</option>
                  <option>No — refused by company</option>
                  <option>Partially resolved</option>
                  <option>Resolved after escalation</option>
                  <option>Resolved promptly</option>
                </select>
              </div>
            </div>
            <div className="form-footer">
              <p className="form-note">Your report is processed by AI only. No human reads your data. Evidence is verified algorithmically before affecting any score.</p>
              <button className="btn-primary" onClick={() => alert("Demo mode — in production this submits to the AI audit pipeline.")}>
                Submit for AI Audit →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="how-section" id="how">
        <div className="container">
          <div className="section-label">How It Works</div>
          <h2 className="section-title">From incident to score in 4 steps</h2>
          <p className="section-sub">No human judges. No opinion polls. A structured pipeline from evidence to objective output.</p>
          <div className="steps-grid">
            {[
              { n: "01", title: "Structured incident submitted", desc: "User reports facts, not feelings. No free-text rants. Typed fields force evidence-based reporting." },
              { n: "02", title: "AI credibility check", desc: "The user's own trust score is verified. Patterns of false reporting are filtered automatically." },
              { n: "03", title: "9-model audit panel", desc: "Three AI pillars (Western, Asian, Open Source) independently analyse the evidence. Divergence is measured." },
              { n: "04", title: "Score updated with trend", desc: "Company score adjusts based on severity, pattern frequency, and whether the issue was resolved." },
            ].map((s) => (
              <div className="step-card" key={s.n}>
                <div className="step-num">{s.n}</div>
                <div className="step-title">{s.title}</div>
                <div className="step-desc">{s.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TRANSPARENCY / METHODOLOGY */}
      <section className="metrics-section" id="transparency">
        <div className="container">
          <div className="section-label">Methodology</div>
          <h2 className="section-title">Every metric. Explained.</h2>
          <p className="section-sub">The algorithm is public. The weights are public. You can challenge any score with counter-evidence.</p>
          <table className="metrics-table">
            <thead>
              <tr>
                <th>Metric</th>
                <th>What it measures</th>
                <th>Weight</th>
                <th>Industry scope</th>
              </tr>
            </thead>
            <tbody>
              {[
                { name: "Promise Match", desc: "Difference between advertised specs/terms and actual delivery", weight: "18%", cls: "pill-red", scope: "All industries" },
                { name: "ToS Clarity", desc: "Readability and transparency of Terms of Service", weight: "14%", cls: "pill-yellow", scope: "All industries" },
                { name: "Appeal Process", desc: "Existence and effectiveness of human escalation paths", weight: "16%", cls: "pill-red", scope: "All industries" },
                { name: "Response Time", desc: "Average time to first meaningful response to incidents", weight: "12%", cls: "pill-yellow", scope: "All industries" },
                { name: "Refund Honour", desc: "Rate of refund requests granted vs. denied/ignored", weight: "13%", cls: "pill-yellow", scope: "Commerce, SaaS, Travel" },
                { name: "Security Practice", desc: "Handling of account compromise and security incidents", weight: "11%", cls: "pill-yellow", scope: "All digital industries" },
                { name: "Score Trend", desc: "Direction of improvement or deterioration over 90 days", weight: "16%", cls: "pill-green", scope: "All industries" },
              ].map((m) => (
                <tr key={m.name}>
                  <td><strong>{m.name}</strong></td>
                  <td style={{ color: "var(--text-muted)" }}>{m.desc}</td>
                  <td><span className={`metric-pill ${m.cls}`}>{m.weight}</span></td>
                  <td style={{ color: "var(--text-muted)" }}>{m.scope}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="ai-models-grid">
            <div className="ai-model-card">
              <div className="ai-model-name">Western Pillar</div>
              <div className="ai-model-role">GPT-4o · Claude · Gemini</div>
              <span className="ai-model-region region-west">West</span>
            </div>
            <div className="ai-model-card">
              <div className="ai-model-name">Asian Pillar</div>
              <div className="ai-model-role">DeepSeek · Qwen</div>
              <span className="ai-model-region region-china">Asia</span>
            </div>
            <div className="ai-model-card">
              <div className="ai-model-name">Open Source Pillar</div>
              <div className="ai-model-role">Llama · Mistral · Falcon</div>
              <span className="ai-model-region region-open">Open</span>
            </div>
          </div>
        </div>
      </section>

      {/* FOR COMPANIES */}
      <section className="companies-section" id="companies">
        <div className="container">
          <div className="section-label">For Companies</div>
          <div className="companies-grid">
            <div>
              <h2 className="section-title">Turn accountability into a competitive advantage</h2>
              <p className="section-sub">Companies that join voluntarily signal confidence in their own quality. Early adopters earn the most credible trust signal available.</p>
              <div className="companies-features">
                {[
                  { title: "Verified Trust Badge", desc: "Display your live AI4UA score on your website. Updates automatically as incidents are resolved." },
                  { title: "Incident Analytics Dashboard", desc: "See exactly where your score drops, which metric needs attention, and what competitors score." },
                  { title: "Score Appeal Rights", desc: "Submit counter-evidence to any incident. The AI panel re-evaluates. Trend improves when you win." },
                  { title: "Prevention Recommendations", desc: "AI-generated operational improvements to reduce incidents before they happen. Paid tier." },
                ].map((f) => (
                  <div className="feature-row" key={f.title}>
                    <div className="feature-icon">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#4f98a3" strokeWidth="2"><path d="M9 12l2 2 4-4"/><circle cx="12" cy="12" r="10"/></svg>
                    </div>
                    <div>
                      <div className="feature-title">{f.title}</div>
                      <div className="feature-desc">{f.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="price-card">
              <div className="price-label">Company Onboarding</div>
              <div className="price-amount">Free <span>to start</span></div>
              <ul className="price-features">
                <li><span className="check">✓</span> Public trust score page</li>
                <li><span className="check">✓</span> Verified Trust Badge widget</li>
                <li><span className="check">✓</span> Incident notifications</li>
                <li><span className="check">✓</span> Score appeal (3/month)</li>
                <li style={{ color: "var(--text-faint)" }}>— Analytics dashboard (Pro)</li>
                <li style={{ color: "var(--text-faint)" }}>— Prevention AI report (Pro)</li>
                <li style={{ color: "var(--text-faint)" }}>— API access (Pro)</li>
              </ul>
              <button className="btn-primary" style={{ width: "100%", justifyContent: "center", display: "flex" }}
                onClick={() => alert("Onboarding form coming soon.")}>
                Register Your Company →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="container">
          <h2 className="cta-title">The algorithm has no agenda.<br />Only evidence.</h2>
          <p className="cta-sub">AI4UA doesn&apos;t take sides. It measures the distance between what was promised and what was delivered. That&apos;s all.</p>
          <div className="hero-actions">
            <a href="#report" className="btn-primary">Report Your Incident</a>
            <a href="#companies" className="btn-ghost">Register as a Company</a>
          </div>
        </div>
      </section>
    </>
  );
}
