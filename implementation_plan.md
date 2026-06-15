# Implementation Plan: Card-Stack Navigation & Loket-Style Scroll Portfolio

This plan outlines the architecture, visual style, and execution steps to upgrade the portfolio of **Manitejs** by combining the stacked card navigation (from the first video) with the bold, red-accented scroll animation layout (from the second video, `loket.design`).

---

## 🎨 1. Design System & Theme Definition (Loket-Style Red & Cream)

We will modify the styling system from the cool Antwerp Blue/Vermilion dual tone to a single high-contrast **bold red & warm cream** editorial aesthetic:
- **Background:** `#faf8f5` (warm ivory/cream)
- **Text:** `#111314` (Sumi near-black)
- **Accent:** `#d0382b` (Loket-style bright crimson red)
- **Accent Muted:** `#e57c73` (soft rose-red)
- **Card Background:** `#f3efe9` (warm card gray)
- **Typography:**
  - **Display / Headlines:** `Pixelify Sans` & `Space Mono` (bold, tracking-tighter, uppercase)
  - **Body Text:** `Inter` (regular/medium, max-width `65ch` for readability)
  - **Telemetry / Logs:** `Space Mono` & `VT323` (monospaced)

---

## 📐 2. Structural & Layout Modifications

### A. Primary Navigation: Stacked Card Deck (First Video Style)
We will introduce an interactive, stacked card deck in the **Hero Section** to act as the primary navigation engine:
- **Structure:** 4 layered cards overlapping vertically.
  - Card 1: `[ 00 // Home ]` - AI Agency Intro
  - Card 2: `[ 01 // Services ]` - Core Capabilities
  - Card 3: `[ 02 // Work ]` - Automation Workflow Gallery
  - Card 4: `[ 03 // Contact ]` - System Initialization
- **Hover Physics (Top Up):**
  - Hovering a card increases its `z-index` dynamically.
  - The hovered card translates upward (`translateY(-40px)`) and rotates slightly to stand out.
  - Non-hovered cards dim (`opacity: 0.4`) and slide down slightly to create depth.
- **Click Behavior:** Clicking a card triggers Lenis to scroll smoothly to that section.

### B. Page Scrolling & Section Reveals (Second Video Style)
Instead of a rigid absolute-pinned card stack, the page will flow vertically with smooth scroll-linked reveals:
- **Smooth Scroll:** Enabled via Lenis.
- **Infinite Text Marquee:** A full-width horizontal scrolling ticker at the bottom of the Hero or Services section, reading:
  `AUTOMATION • WORKFLOWS • AI AGENCY • WEBSITE CREATION • UI/UX DESIGN • SEO & GEO •`
- **Text Scroll-Reveal:** Large display text reveals its opacity from `0.2` to `1.0` as the user scrolls, highlighting the reading position.
- **List Hover Blocks:** In the capabilities or works list, hovering over an item highlights it with a solid red block background and white text.

---

## 🎬 3. Step-by-Step Implementation Steps

### Step 1: HTML Structure Update (`index.html`)
- Update name instances from "Maniteja" to **"Manitejs"**.
- Add the **Interactive Navigation Stack** container into the Hero section.
- Add the **Infinite Scroll Marquee** banner between sections.
- Add semantic tags for SEO & GEO.

### Step 2: Styling Overhaul (`style.css`)
- Replace Palette G with the new **Ivory & Crimson Red** color variables.
- Write CSS for the **Stacked Card Deck Navigation** (`.nav-card-deck`, `.nav-card-item`).
- Write CSS for the **Infinite Text Marquee** animation (`.marquee-wrap`, `.marquee-content`).
- Add the **List Hover block highlight** styles (`.hover-block-item`).

### Step 3: Animation & Interaction Integration (`main.js`)
- Wire up the stacked card hover animations using GSAP or CSS variables.
- Program card click events to scroll smoothly using Lenis:
  `lenis.scrollTo(targetSection, { offset: -80, duration: 1.5 })`
- Integrate ScrollTrigger text opacity reveals for headlines.
- Maintain and restyle the **SEO/GEO Simulation Panels** and **n8n Workflow Dashboard** with the red theme.

---

## 🔍 4. Verification Seams & Quality Checks

1. **Card Hover ("Top Up"):** Ensure hovering any card in the deck correctly brings it to the top (maximum z-index) and applies the transform translation without visual jank.
2. **Smooth Navigation:** Verify that clicking a card triggers a smooth scroll to the correct section and updates the URL hash.
3. **Scroll reveals & Marquees:** Test that the infinite text marquee runs smoothly at 60fps and text opacity reveals work correctly on scroll.
4. **Mobile Fallback:** Ensure card stack behaves responsively, collapsing into a clean grid on screens smaller than 768px.
