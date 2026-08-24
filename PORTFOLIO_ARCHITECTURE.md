# Omar Salem — Portfolio Architecture & Design System Documentation

> **Permanent Project Reference Document**  
> This file contains the complete documentation of the architecture, design tokens, interactive slide engine, typography, and component hierarchy for Omar Salem — Senior Frontend Developer.

---

## 1. Professional Profile

- **Name**: Omar Salem
- **Title**: Senior Frontend Developer
- **Experience**: 4+ years of experience delivering high-impact enterprise, government, and commercial web applications.
- **Location**: Riyadh, Saudi Arabia (Available on-site & remote worldwide)
- **Direct Phone / WhatsApp**: `+966 50 239 7466`
- **Email**: `omarsalem0721@gmail.com`
- **Profiles**: [LinkedIn](https://www.linkedin.com/in/omarsalem7/) &bull; [GitHub](https://github.com/omarsalem7)

---

## 2. Design Philosophy & Aesthetic Identity

The portfolio is structured as a **luxury editorial presentation engine** combining neoclassical architectural precision with avant-garde software engineering aesthetics:

- **Deep Obsidian Surface**: `#0b0a09` backdrop with subtle `#121110` layered surfaces and glassmorphic card containers (`rgba(18, 17, 15, 0.75)` with `backdrop-filter: blur(16px)`).
- **Neoclassical Golden Brass Accents**: `#d4af37` (primary gold) and `#e5c158` (bright highlight gold) for active chapter indicators, badges, hover aura, and call-to-action elements.
- **Architectural Measurement Grid**: 1px subtle structural guide lines (`rgba(235, 235, 235, 0.08)`) framing the viewport with four corner star crosshairs (`✦`) at intersection nodes.
- **Warm Ivory & Muted Editorial Typography**: `#ebebeb` headline text, `#dcd6cd` body text, `#9a948c` technical notes, and `#666057` measurement ticks.

---

## 3. Typography Hierarchy

The portfolio uses 4 curated Google Fonts imported in `public/index.html`:

| Font Family | Usage | Characteristics |
| :--- | :--- | :--- |
| **`Playfair Display`** | Display Titles & Section Headlines | Editorial serif with dramatic contrast and neoclassical authority. |
| **`Cormorant Garamond`** | Chapter Subtitles & Italic Accents | Delicate, refined serif for literary nuance and quote text. |
| **`JetBrains Mono`** | Technical Metadata, Badges & Counters | High-readability monospace for indices (`01`, `02`), dates, chapter codes, and tags. |
| **`Plus Jakarta Sans`** | Primary UI & Body Copy | Crisp geometric sans-serif for UI labels, navigation buttons, and paragraphs. |

---

## 4. Five-Chapter Presentation Engine (`src/App.js`)

The portfolio is architected as an interactive 5-slide horizontal presentation with smooth in/out animations:

```
[Ch. 1 The Discipline] ⇄ [Ch. 2 Selected Works] ⇄ [Ch. 3 The Journey] ⇄ [Ch. 4 The Word] ⇄ [Ch. 5 The Inquiry]
```

### Chapter Index:
1. **Chapter 1 (`#intro`) — The Discipline**: Neoclassical editorial hero, dynamic typing title, metric cards (`4+ Yrs`, `30%`, `200+`, `6+`), framed portrait with gold rim reflection & corner star nodes (`✦`), and floating tech badges (`Angular/ABP`, `React/Next.js`, `TypeScript/Esri GIS`).
2. **Chapter 2 (`#portfolio`) — Selected Works**: Enterprise government and commercial project showcase with pill filter buttons (`Featured Works`, `Gov & Enterprise`, `Angular & Esri GIS`, `React & Next.js`), client badges (Ministry of Energy, UN COP16, NCVC, GEOSA), descriptions, and live/internal links.
3. **Chapter 3 (`#works`) — The Journey**: Multi-view career hub featuring:
   - **Career Timeline**: Tec Solution Group (Riyadh), Neutral, Microverse (Mentor), Co.Lab (Intern), Microverse 1300+ hrs program, Ain Shams University B.Sc.
   - **Skills Matrix**: Categorized taxonomy for Frontend, UI/UX, Performance, Geospatial, Backend, Tools & Languages.
   - **Certifications**: Microverse Full Stack, Co.Lab Product Dev (with verification link), Microverse React/Redux.
4. **Chapter 4 (`#testimonials`) — The Word**: Peer endorsements and recommendations featuring 5-star gold ratings, serif quotes, avatars, and verified LinkedIn badges.
5. **Chapter 5 (`#contact`) — The Inquiry**: Direct channel cards (Email with one-click copy, Phone + WhatsApp direct dial for Riyadh `+966 50 239 7466`, Location), social profile links, and Formspree 3D pill input form fields.

---

## 5. Component Structure & Directory Map

```
src/
├── App.js                         # Root Slide Presentation Controller & Rail Shell
├── app.scss                       # Presentation transitions, architectural grid, rail, dock
├── global.scss                    # Design tokens, color palette, mixins, responsive breakpoints
├── data.js                        # Flagship enterprise projects, filter categories, skills matrix, certs
│
├── components/
│   ├── topbar/
│   │   ├── Topbar.jsx             # Minimalist architectural header with monogram, phone & Inquire button
│   │   └── topbar.scss            # Topbar styling & hamburger mechanics
│   │
│   ├── menu/
│   │   ├── Menu.jsx               # Chapter drawer for mobile and quick navigation
│   │   └── menu.scss              # Chapter drawer typography & gold indicator styles
│   │
│   ├── intro/
│   │   ├── Intro.jsx              # Hero slide with dynamic typing, metric cards, portrait frame
│   │   └── intro.scss             # Hero layout, metric badges, gold rim lighting
│   │
│   ├── portfolio/
│   │   ├── Portfolio.jsx          # Projects showcase with live filter state & card deck
│   │   └── portfolio.scss         # Card grid, index badges, client tags, hover animations
│   │
│   ├── portfolioList/
│   │   ├── PortfolioList.jsx      # Filter category pill component with count badges
│   │   └── portfolioList.scss     # Pill tokens, gold active state, hover glow
│   │
│   ├── works/
│   │   ├── Works.jsx              # Experience timeline, interactive skills matrix, and certs deck
│   │   └── works.scss             # Timeline node styling, gold icons, tab switches
│   │
│   ├── testimonials/
│   │   ├── Testimonials.jsx       # Peer quotes, star ratings, verified badges
│   │   └── testimonials.scss      # 3D quote cards, watermarks, author meta
│   │
│   └── contact/
│       ├── Contact.jsx            # Direct contact cards, copy email pill, WhatsApp badge, Formspree form
│       └── contact.scss           # 3D pill inputs, send inquiry button, success state
```

---

## 6. How to Run & Build the Project

### Development Server:
```bash
npm start
# Runs locally at http://localhost:3000
```

### Production Build:
```bash
npm run build
# Compiles optimized production bundle in /build
```

---

*Authored for Omar Salem's Portfolio Codebase — Future Maintenance Reference.*
