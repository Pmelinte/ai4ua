# AI4UA — Master Context Document

## Ce este AI4UA
**Artificial Intelligence for User Aid** — sistem de trust scoring pentru companii bazat pe metrici obiective și modele AI multiple. Scopul este să ofere utilizatorilor informații clare și verificabile despre comportamentul companiilor față de clienți, și să stimuleze companiile să devină mai transparente și mai responsabile.

## Fondator
- **Nume:** Pmelinte (Dr.)
- **Locație:** Satu Mare, România
- **Context personal:** Cont Anthropic suspendat fără notificare clară și fără proces de appeal funcțional — cazul documentat personal, baza pentru primul audit real al platformei Anthropic
- **Profesie:** Medic — non-developer, construiește AI4UA cu ajutorul AI

## Stack Tehnic
- **Framework:** Next.js (App Router)
- **Deployment:** Vercel
- **Database:** Supabase
- **Repo:** github.com/Pmelinte/ai4ua
- **Media:** Cloudinary
- **AI Models:** HuggingFace (open source pillar)

## Tooluri de dezvoltare active
- Perplexity Pro (via Revolut Ultra) — strategie, arhitectură, fișiere
- ChatGPT Plus — cod general, debugging
- Grok Super — monitorizare știri, date X/Twitter
- GitHub Copilot — autocompletare cod în editor
- Microsoft Copilot — documente business
- DeepSeek (~10€ credit) — pilonul Asian în metodologia AI4UA
- Claude — cont suspendat (ironie documentată)

## Cele 5 Companii Pilot
1. **Alphabet** (Google) — suspendări conturi YouTube/Ads fără explicații
2. **Anthropic** — cazul fondatorului, ToS ambiguu, appeal inexistent
3. **OpenAI** — suspendări ChatGPT, billing surprize
4. **Perplexity** — produs nou, politici în formare, transparență date
5. **X (Twitter)** — suspendări arbitrare, verificare plătită

## Cei 3 Piloni AI (Metodologie)
- 🌍 **Western:** ChatGPT (OpenAI)
- 🌏 **Asian:** DeepSeek
- 🔓 **Open Source:** Llama via Groq (gratuit)

## Structura Metricilor

### Nivel 1 — Metrici Universale (7) — active pentru orice incident
1. Claritate ToS
2. Notificare prealabilă
3. Motivație explicită
4. Proces de contestare
5. Timp de răspuns
6. Restituire date/bani
7. Precedent public documentat

### Nivel 2 — Metrici Contextuale (activate per tip incident)
4-8 metrici extra activate automat în funcție de tipul incidentului raportat.

### Nivel 3 — Metrici Industriale (adăugate pe măsură ce AI4UA crește)
Specifice per industrie: Aviation, Banking, Healthcare, Insurance, Telecom etc.

## Taxonomie Incidente — 42 tipuri în 6 categorii

### ACC — Acces la Cont (7)
- ACC-01: Cont suspendat fără notificare
- ACC-02: Cont suspendat cu notificare insuficientă
- ACC-03: Cont blocat temporar fără explicație
- ACC-04: Imposibilitate de recuperare cont
- ACC-05: Autentificare blocată fără motiv
- ACC-06: Ștergere cont fără consimțământ
- ACC-07: Acces restricționat la date proprii

### DAT — Date și Confidențialitate (7)
- DAT-01: Breșă de date personale
- DAT-02: Date vândute/transferate fără consimțământ
- DAT-03: Refuz de ștergere date (GDPR/CCPA)
- DAT-04: Date folosite în antrenament AI fără acord
- DAT-05: Export date imposibil sau incomplet
- DAT-06: Transparență insuficientă despre date colectate
- DAT-07: Date partajate cu terți nedeclarați

### FIN — Financiar și Facturare (7)
- FIN-01: Taxă neautorizată / surpriză
- FIN-02: Refuz rambursare nejustificat
- FIN-03: Abonament continuat după anulare
- FIN-04: Prețuri diferite față de cele promise
- FIN-05: Lipsă factură / documentație fiscală
- FIN-06: Comisioane nedeclarate în ToS
- FIN-07: Dispute de plată ignorate

### SUP — Suport și Comunicare (7)
- SUP-01: Suport inaccesibil / inexistent
- SUP-02: Răspuns automatizat fără rezoluție
- SUP-03: Timp de răspuns excesiv (>72h)
- SUP-04: Imposibilitate de escaladare la om real
- SUP-05: Limbaj abuziv sau discriminatoriu din suport
- SUP-06: Închidere ticket fără rezoluție
- SUP-07: Dezinformare deliberată din suport

### CON — Conținut și Serviciu (7)
- CON-01: Moderare arbitrară / inconsistentă
- CON-02: Ștergere conținut fără explicație
- CON-03: Algoritm discriminatoriu documentat
- CON-04: Publicitate înșelătoare față de produs real
- CON-05: Funcționalitate promisă inexistentă
- CON-06: Schimbare ToS retroactivă fără notificare
- CON-07: Limitare funcționalitate fără notificare

### AI — Inteligență Artificială Specifică (7)
- AI-01: Output AI discriminatoriu / biased
- AI-02: Halucinații cu impact real documentat
- AI-03: Lipsă explicabilitate decizie AI
- AI-04: Decizie automată fără posibilitate de contestare
- AI-05: Model AI folosit fără consimțământ clar
- AI-06: Identitate AI nedeclarată (chatbot fals uman)
- AI-07: Date personale în output AI (privacy leak)

## Structura Site Next.js
```
app/
├── page.tsx                  ← Homepage
├── layout.tsx                ← Layout global
├── globals.css               ← Stiluri globale
├── score/[company]/page.tsx  ← Scor per companie
├── report/page.tsx           ← Formular incident
├── companies/page.tsx        ← Onboarding companii
├── transparency/page.tsx     ← Metodologie publică
├── dashboard/page.tsx        ← Dashboard companie Pro
└── api/
    ├── score/route.ts
    └── report/route.ts
```

## Decizii arhitecturale luate
- Scorul se adaptează la natura incidentului (nu e fix)
- Metodologia publică pe /transparency — CE măsurăm, nu CUM agregăm matematic
- Algoritmul exact de ponderare a celor 3 piloni AI = IP privat
- Prima industrie pilot: AI/SaaS
- Lansare cu 7 metrici universale, extindere graduală
- Scorurile vor fi mai mici decât se așteaptă companiile — e un avantaj, nu o problemă

## Proiecte paralele ale fondatorului
- **Swaply** (swaply.world) — swap objects without money, în dezvoltare activă
- **AI4UA** — acest proiect
- 7+ proiecte în minte pentru viitor

## Note importante
- Fondatorul nu are background tehnic (medic) — explicațiile tehnice trebuie să fie clare
- Tot codul se face prin AI (Perplexity, ChatGPT, Copilot)
- Filosofia centrală: **un om în centrul algoritmului, nu algoritmul în centrul omului**
- Contul Claude al fondatorului e suspendat — ironie vie care demonstrează necesitatea AI4UA
