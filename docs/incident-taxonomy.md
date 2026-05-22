# AI4UA — Incident Taxonomy (Evidence-Based)

> Derived from real user complaints on Reddit (2024–2026) and legal filings.
> Each incident category maps to a metric in the trust scoring system.

---

## PILLAR 1: Transparency & Communication

### INC-001 — Account Suspension Without Explanation
**Evidence:** Multiple Reddit threads document users permanently banned with only a vague "policy violation" email, no details provided. Automated flagging with no human review path.
**Severity:** HIGH | **Metric impact:** Transparency Score -25pts
**Sources:** r/Anthropic/1rocwic, r/ClaudeAI/1hbdd14, r/Anthropic/1lxhmb4

### INC-002 — No Escalation Path After Ban
**Evidence:** Support limited to chatbot only (Fin AI / OpenAI bot). Appeals unanswered for months. No human agent reachable.
**Severity:** HIGH | **Metric impact:** Transparency -20pts, Accountability -15pts
**Sources:** r/Anthropic/1rocwic, r/OpenAI/1d8qk8c

### INC-003 — Account Reinstated But Still Banned (Contradictory System State)
**Evidence:** Anthropic support confirmed reinstatement by email, yet Claude still responds "Your account has been disabled". Mass error confirmed March 2024.
**Severity:** MEDIUM | **Metric impact:** Reliability Score -15pts
**Sources:** r/ClaudeAI/1b82cpu, r/ClaudeAI/1b9lfc0

### INC-004 — Subscription Silently Cancelled Without Refund
**Evidence:** Max 20x plan ($200) cancelled 3 weeks early, no notification, no refund. User then permanently banned same day new plan purchased.
**Severity:** HIGH | **Metric impact:** Transparency -30pts, Financial Fairness -25pts
**Sources:** r/Anthropic/1rocwic

---

## PILLAR 2: Data & Privacy

### INC-005 — Training on User Data Without Consent
**Evidence:** Reddit v. Anthropic (SF Superior Court, CGC-25-524892, filed June 4 2025): Anthropic scraped Reddit 100,000+ times after promising to stop; trained Claude on personal user data without authorization.
**Severity:** CRITICAL | **Metric impact:** Privacy Score -40pts
**Sources:** TechCrunch 2025-06-04, Reuters 2025-06-05

### INC-006 — Bypassing robots.txt and Access Controls
**Evidence:** Anthropic ignored robots.txt (CFAA potential violation). Perplexity AI sued (Reddit v. SerpApi, SDNY 2025) for bypassing technical protections via proxy scrapers.
**Severity:** CRITICAL | **Metric impact:** Privacy -35pts, Legal Compliance -30pts

### INC-007 — GDPR Data Access Request Systematically Blocked
**Evidence:** OpenAI blocking Article 15/17 GDPR requests after identity verified twice. NOYB filed formal complaint with Austrian DPA 2024.
**Severity:** HIGH | **Metric impact:** Privacy -30pts, Legal Compliance -25pts
**Sources:** r/gdpr/1qwqx7r, noyb complaint 2024

### INC-008 — Indefinite Retention of User Chat Data
**Evidence:** OpenAI retaining all chat data indefinitely (June 2025). No user-controlled deletion guarantee. Disclosed via NYT lawsuit.
**Severity:** HIGH | **Metric impact:** Privacy Score -25pts
**Sources:** r/OpenAI/1l4jvk3

---

## PILLAR 3: Fairness & Accountability

### INC-009 — Geopolitical / IP Discrimination in Bans
**Evidence:** Users from China, Spain, VPN users disproportionately auto-banned. No geographic policy disclosed publicly.
**Severity:** MEDIUM | **Metric impact:** Fairness -20pts, Transparency -15pts
**Sources:** r/Anthropic/1lxhmb4, r/ClaudeAI/1m7r4fu

### INC-010 — False Age Classification (Adults Flagged as Minors)
**Evidence:** Anthropic suspended adult accounts after erroneous minor classification by automated system (April 2026). No manual override path.
**Severity:** MEDIUM | **Metric impact:** Reliability -20pts, Fairness -15pts
**Sources:** MediaNama 2026-04-15

### INC-011 — Unauthorized / Duplicate Billing
**Evidence:** OpenAI charged users $197.40 + $200 without authorization. Refund process requires bank fraud report. Auto-renewals without consent.
**Severity:** HIGH | **Metric impact:** Financial Fairness -30pts
**Sources:** r/OpenAI/1q7yf8b, r/OpenAI/12tf77w

### INC-012 — Refused Licensing Negotiations (Ethics-Claims Gap)
**Evidence:** Anthropic "refused to engage" with Reddit licensing while presenting as AI "white knight". OpenAI and Google negotiated valid licenses. Gap between public ethics claims and behavior confirmed by lawsuit.
**Severity:** HIGH | **Metric impact:** Accountability -35pts, Transparency -20pts
**Sources:** TechCrunch 2025-06-04, Forbes AU 2025-06-05

---

## Scoring Impact Summary

| ID | Description | Pillar | Severity | Max Impact |
|---|---|---|---|---|
| INC-001 | Account Suspension No Explanation | Transparency | HIGH | -25pts |
| INC-002 | No Escalation Path | Transparency+Accountability | HIGH | -35pts |
| INC-003 | Contradictory Account State | Reliability | MEDIUM | -15pts |
| INC-004 | Silent Subscription Cancel | Transparency+Financial | HIGH | -55pts |
| INC-005 | Training Without Consent | Privacy | CRITICAL | -40pts |
| INC-006 | Bypassing robots.txt | Privacy+Legal | CRITICAL | -65pts |
| INC-007 | GDPR Request Blocked | Privacy+Legal | HIGH | -55pts |
| INC-008 | Indefinite Data Retention | Privacy | HIGH | -25pts |
| INC-009 | Geo/IP Discrimination | Fairness+Transparency | MEDIUM | -35pts |
| INC-010 | False Age Flagging | Reliability+Fairness | MEDIUM | -35pts |
| INC-011 | Unauthorized Billing | Financial Fairness | HIGH | -30pts |
| INC-012 | Refused Licensing | Accountability+Transparency | HIGH | -55pts |

---

## Confirmed Incidents Per Company (Default Scorecard)

### Anthropic (Claude)
- INC-001, INC-002, INC-003, INC-004 (account management)
- INC-005, INC-006 (data scraping — confirmed via lawsuit CGC-25-524892)
- INC-009, INC-010 (discrimination/classification errors)
- INC-012 (ethics-claims gap — confirmed via lawsuit)

### OpenAI (ChatGPT)
- INC-001, INC-002 (account management, poor support)
- INC-007, INC-008 (GDPR non-compliance, data retention)
- INC-011 (billing issues)

### Perplexity AI
- INC-006 (bypassing access controls — Reddit v. SerpApi, SDNY 2025)

---

## Implementation Notes

- Incident report form should include INC-XXX category selector
- Pre-populate company scorecards with confirmed incidents above
- Each INC entry links to source URL as primary evidence
- 3 geopolitical pillars in UI = Data Sovereignty / Platform Access Equity / Legal Jurisdiction Compliance
- 12 metrics per score in UI = this taxonomy provides the evidence base

---
*Evidence sweep: Reddit + legal filings, July 2025*
*Sources: r/Anthropic, r/ClaudeAI, r/OpenAI, r/gdpr, r/privacy, TechCrunch, Reuters, MediaNama*
