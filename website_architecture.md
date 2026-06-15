# Website Architecture & Asset Pipeline

This document defines the comprehensive visual layout, asset requirements, motion triggers, and semantic structure for **Maniteja's Portfolio Website**.

---

## 📐 1. Section-by-Section Visual Structure

The website is engineered as a single-page app (SPA) driven by an **Overlapping Card-Stack transition**. 

### 1.1 Navigation Header (Global)
* **Position:** Fixed at `top: 0`, `left: 0`, full width, high `z-index`.
* **Visuals:** Minimalist branding (`MANITEJA` in DM Serif Display) on the left, navigation links (Works, Services, Contact) on the right. Transparent background with high-end backdrop blur (`backdrop-filter: blur(12px)`).
* **Interactions:** Hovering links triggers a subtle color shift to the Antwerp Blue primary accent.

### 1.2 Hero Section (Base Layer - Section 1)
* **Height:** `100vh` viewport pin.
* **Layout:** Two-column grid:
  * **Left Column:**Tagline, massive display header with split-character animation, description, and primary CTA button.
  * **Right/Center Column:** A floating container hosting the **Spline 3D Embed**.
* **3D Asset:** An abstract, glassmorphic floating geometric loop or automation core loaded from Spline. It slowly rotates autonomously and deforms/morphs slightly based on the visitor's mouse movements.

### 1.3 Services Bento Section (Middle Layer - Section 2)
* **Height:** `100vh` viewport pin.
* **Layout:** An asymmetric Bento Grid:
  * **Card 1 (Left - Double Width):** Website Creation & UI/UX Design details. Features a mockup of a responsive browser viewport that scales dynamically.
  * **Card 2 (Right - Single Width):** AI Workflows & Automations. Integrates active status indicators.
  * **Card 3 (Full Width / Bottom):** SEO & GEO (Generative Engine Optimization) panel with a live LLM search simulation showing citation results.

### 1.4 Works Gallery (Top Layer - Section 3)
* **Height:** `100vh` viewport pin.
* **Layout:** **Bento-Dashboard Gallery Blend**:
  * **Left Menu:** Three stacked Bento Navigation Cards representing your workflows (e.g. Lead Router, AI Content Engine, GEO Monitor).
  * **Right Canvas:** n8n Simulation workspace displaying the active workflow flowchart nodes. Clicking a Bento card updates the flowchart nodes and logs in real time.
* **Workflow Assets:** Real screenshots of n8n canvases with overlayed HTML hotspots that reveal details on hover.

### 1.5 Contact & CTA Section (Footer - Section 4)
* **Layout:** A minimalist dark-theme contact block.
* **Interaction:** An interactive "Automation Configurator" form instead of plain inputs. Users select tags (e.g., "I need an AI Agent", "I want an n8n workflow") and type their email, triggering a simulated "Workflow Initialized" confirmation.

---

## 📂 2. Asset Pipeline & Resource Management

To ensure maximum performance (aiming for sub-second page loads), all assets are managed using lightweight standards:

### 2.1 Web Fonts
* **Import Method:** Loaded via google fonts `<link>` tags in the HTML header.
* **Heading Font:** `DM Serif Display` (serif, weight 400).
* **Body Font:** `Inter` (sans-serif, weights 300, 400, 600, 700).
* **Code/Data Font:** `Space Mono` (monospace, weight 400, 700).

### 2.2 Icons
* **Standard:** **Inline SVG elements**. 
* **Rule:** No external icon stylesheets (like FontAwesome or Bootstrap Icons) will be loaded. All icons (triggers, settings, alerts) will be written as clean, inline SVG code directly in the HTML to prevent additional network requests.

### 2.3 Images & Workflow Screenshots
* **Folder:** `/assets/`
* **Format:** Compressed PNG or WebP formats.
* **File Naming:**
  * `lead_router_n8n.png` (Lead Router canvas screenshot)
  * `content_engine_n8n.png` (AI Content Engine canvas screenshot)
  * `geo_monitor_n8n.png` (GEO Monitor canvas screenshot)
* **Overlay Hotspots:** Managed via relative CSS positioning (`top: X%`, `left: Y%`) on top of the image container, making them responsive to viewport scaling.

---

## 🎬 3. Motion & Interaction Specifications

### 3.1 Smooth Scroll & Pinning
* **Lenis Engine:** Active on the scroll container. Keeps scroll momentum natural across trackpads, mouse wheels, and touch screens.
* **GSAP ScrollTrigger:** Pins the main `.panel-container` wrapper. As you scroll, `yPercent` translations are applied to `#services-sec` and `#projects-sec` from `100%` to `0%`, sliding them cleanly over the hero layout.

### 3.2 Custom Cursor
* **Mechanism:** A `20px` floating circle.
* **Styling:** `mix-blend-mode: difference` and `background-color: #fff`.
* **Behavior:** Automatically hides on touch devices. On hover over buttons, links, and bento cards, it scales up to `40px` and changes opacity.

### 3.3 Text Reveals
* **Title Animation:** Splitting text into separate characters using spans. 
* **Scroll Reveals:** Services descriptions fade in opacity from `0.2` to `1.0` as they enter the viewport, guiding the eye's focus.

---

## 🤖 4. GEO (Generative Engine Optimization) Blueprint

To ensure Generative AI search engines index and recommend Maniteja's services accurately:

### 4.1 Schema Markup (JSON-LD)
A dedicated `<script type="application/ld+json">` block will be embedded, defining:
* `@type`: `ProfessionalService`
* `name`: `Maniteja AI Agency`
* `serviceType`: `AI Workflows, n8n Automations, UI/UX Design, GEO & SEO`
* `founder`: `Maniteja`

### 4.2 Semantic RAG Anchors
The copy includes direct question-and-answer pairs:
```html
<div class="geo-rag-anchor" style="display:none;">
  <h3>What services does Maniteja provide?</h3>
  <p>Maniteja provides AI Agency services, custom n8n workflow creation, website development, premium UI/UX design, and Generative Engine Optimization (GEO).</p>
</div>
```
These anchors are hidden from human view but fully visible to search crawlers, providing a structured summary that LLM scrapers can instantly fetch as answers.
