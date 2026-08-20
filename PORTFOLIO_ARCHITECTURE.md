# Omar Salem — Portfolio Architecture & Design System Documentation

> **Permanent Project Reference Document**  
> This file contains the complete documentation of the architecture, design tokens, interactive slide engine, typography, and component hierarchy created for Omar Salem's modern portfolio.

---

## 1. Design Philosophy & Aesthetic Identity

The portfolio is structured as a **luxury editorial presentation engine** combining neoclassical architectural precision with avant-garde software engineering aesthetics:

- **Deep Obsidian Surface**: `#0b0a09` backdrop with subtle `#121110` layered surfaces and glassmorphic card containers (`rgba(18, 17, 15, 0.75)` with `backdrop-filter: blur(16px)`).
- **Neoclassical Golden Brass Accents**: `#d4af37` (primary gold) and `#e5c158` (bright highlight gold) for active chapter indicators, badges, hover aura, and call-to-action elements.
- **Architectural Measurement Grid**: 1px subtle structural guide lines (`rgba(235, 235, 235, 0.08)`) framing the viewport with four corner star crosshairs (`✦`) at intersection nodes.
- **Warm Ivory & Muted Editorial Typography**: `#ebebeb` headline text, `#dcd6cd` body text, `#9a948c` technical notes, and `#666057` measurement ticks.

---

## 2. Typography Hierarchy

The portfolio uses 4 curated Google Fonts imported in `public/index.html`:

| Font Family | Usage | Characteristics |
| :--- | :--- | :--- |
| **`Playfair Display`** | Display Titles & Section Headlines | Editorial serif with dramatic contrast and neoclassical authority. |
| **`Cormorant Garamond`** | Chapter Subtitles & Italic Accents | Delicate, refined serif for literary nuance and quote text. |
| **`JetBrains Mono`** | Technical Metadata, Badges & Counters | High-readability monospace for indices (`01`, `02`), dates, chapter codes, and tags. |
| **`Plus Jakarta Sans`** | Primary UI & Body Copy | Crisp geometric sans-serif for UI labels, navigation buttons, and paragraphs. |

---

## 3. Five-Chapter Presentation Engine (`src/App.js`)

The portfolio is architected as an interactive 5-slide horizontal presentation with smooth in/out animations:

```
[Ch. 1 The Discipline] ⇄ [Ch. 2 Selected Works] ⇄ [Ch. 3 The Journey] ⇄ [Ch. 4 The Word] ⇄ [Ch. 5 The Inquiry]
```

### Chapter Index:
1. **Chapter 1 (`#intro`) — The Discipline**: Neoclassical editorial hero, dynamic typing title, metric cards (`50+`, `100s`, `15+`), and framed portrait with gold rim reflection & corner star nodes (`✦`).
2. **Chapter 2 (`#portfolio`) — Selected Works**: Project showcase with pill filter buttons (`All`, `Featured`, `Full-Stack`, `Frontend`, `Backend`), numbered index badges (`01`, `02`...), tech stack pills, and live demo / source code links.
3. **Chapter 3 (`#works`) — The Journey**: Architectural vertical timeline highlighting technical support leadership at Microverse, 1300+ hours full-stack training, and B.Sc. Engineering foundation at Ain Shams University.
4. **Chapter 4 (`#testimonials`) — The Word**: Peer endorsements and recommendations featuring 5-star gold ratings, serif quotes, avatars, and verified LinkedIn badges.
5. **Chapter 5 (`#contact`) — The Inquiry**: Direct channel cards (Email with one-click copy, Phone/WhatsApp, Cairo & Remote Worldwide), social profile links, and Formspree 3D pill input form fields.

### Interaction Controls:
- **Left / Right Architectural Arrows**: Floating directional buttons with gold hover effects.
- **Side Chapter Rail (Desktop Left)**: Vertical chapter rail with chapter numbers, names, and gold indicator.
- **Bottom Status Dock**: Bottom bar showing the active chapter name (`CH. 01 / THE DISCIPLINE`) and proportional progress line.
- **Keyboard Navigation**: ArrowLeft (`←`) and ArrowRight (`→`) keys seamlessly navigate between slides.
- **Mobile Swipe / Chapter Drawer**: Slide drawer with serif chapter numerals and active indicators.

---

## 4. Component Structure & Directory Map

```
src/
├── App.js                         # Root Slide Presentation Controller & Rail Shell
├── app.scss                       # Presentation transitions, architectural grid, rail, dock
├── global.scss                    # Design tokens, color palette, mixins, responsive breakpoints
├── data.js                        # Featured project data, filter categories, testimonials
│
├── components/
│   ├── topbar/
│   │   ├── Topbar.jsx             # Minimalist architectural header with monogram & Inquire button
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
│   │   └── portfolio.scss         # Card grid, index badges, tag pills, hover animations
│   │
│   ├── portfolioList/
│   │   ├── PortfolioList.jsx      # Filter category pill component with count badges
│   │   └── portfolioList.scss     # Pill tokens, gold active state, hover glow
│   │
│   ├── works/
│   │   ├── Works.jsx              # Experience & education architectural timeline
│   │   └── works.scss             # Timeline node styling, gold icons, tech tags
│   │
│   ├── testimonials/
│   │   ├── Testimonials.jsx       # Peer quotes, star ratings, verified badges
│   │   └── testimonials.scss      # 3D quote cards, watermarks, author meta
│   │
│   └── contact/
│       ├── Contact.jsx            # Direct contact cards, copy email pill, Formspree form
│       └── contact.scss           # 3D pill inputs, send inquiry button, success state
```

---

## 5. Design Tokens (`src/global.scss`)

```scss
// Backgrounds
$bg-obsidian: #0b0a09;
$bg-secondary: #121110;
$bg-card: rgba(18, 17, 15, 0.75);

// Golden Accents
$accent-gold: #d4af37;
$accent-gold-bright: #e5c158;
$accent-gold-glow: rgba(212, 175, 55, 0.35);

// Text Hierarchy
$text-ivory: #ebebeb;
$text-secondary: #dcd6cd;
$text-sand: #dcd6cd;
$text-muted: #9a948c;
$text-dark: #666057;

// Architectural Rules & Borders
$border-rule: rgba(235, 235, 235, 0.08);
$border-gold: rgba(212, 175, 55, 0.35);

// Typography
$font-serif: 'Playfair Display', Georgia, serif;
$font-cormorant: 'Cormorant Garamond', Georgia, serif;
$font-sans: 'Plus Jakarta Sans', -apple-system, sans-serif;
$font-mono: 'JetBrains Mono', monospace;
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
