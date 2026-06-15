# Product Requirement Document (PRD): Maniteja Portfolio Website

## Problem Statement

Prospective clients looking for a combined expert in **UI/UX Designing**, **Website Creation**, and **AI Automation** (like custom **n8n workflows** or multi-agent pipelines) often find it difficult to evaluate a creator's actual capabilities from static screenshots or generic portfolio lists. They need a premium, interactive, and visually immersive portfolio experience that demonstrates high-end design craftsmanship and provides a live, interactive visualization of complex automation workflows, traditional **SEO**, and modern **GEO** (Generative Engine Optimization).

## Solution

Build a high-performance, single-page portfolio website for **Maniteja's AI Agency** using a premium visual aesthetic (Palette G: Antwerp Blue & Vermilion Red Blend on warm cream background) and highly engaging motion design (Vite + GSAP + Lenis stack). The website will feature:
1. **Interactive Hero Section:** An immersive landing layer featuring a glassmorphic **Spline 3D Embed** animation with a smart cross-fade fallback mechanism.
2. **Services Bento Section:** An asymmetric Bento layout showcasing core services (UI/UX, Website Creation, AI Workflows) and containing an active **SEO & GEO Simulation Panels** demonstration.
3. **Interactive Workflow Gallery:** A **Dashboard View** showing a central SaaS-like n8n canvas where clicking on different Bento nav cards runs a mock workflow execution and displays active node telemetry changes in real-time.
4. **Automation Configurator Contact Form:** An interactive contact block replacing generic text fields with multi-select service tags and a live "Syncing with CRM..." workflow log sequence on submit.
5. **Fluid Motion System:** An overlapping card-stack scroll transition (Artem style) that collapses cleanly to vertical scrolling on mobile viewports.

---

## User Stories

### Global & Navigation Experience
1. As a site visitor, I want a smooth, momentum-based scrolling experience, so that the website navigation feels natural and premium.
2. As a site visitor, I want an inverted custom cursor that scales up on interactive elements, so that I receive visual feedback on hoverable items.
3. As a site visitor, I want a persistent minimalist header navigation with backdrop blur, so that I can jump to different sections of the page without losing my place.
4. As a mobile site visitor, I want the custom mouse cursor to be hidden on my touch device, so that it does not create redundant visual lag or interface clutter.

### Hero & Brand Impression
5. As a site visitor, I want to see a split-text staggered letter animation on the main headline when the page loads, so that the site immediately establishes a high-end, bespoke visual brand.
6. As a site visitor, I want to see a morphing glassmorphic 3D shape that deforms slightly based on my mouse movements, so that the hero section feels responsive and interactive.
7. As a site visitor on a slow network connection, I want to see a beautiful animated gradient placeholder that fades out only when the heavy 3D asset is fully loaded, so that I do not experience a flash of unstyled content or a blank screen.

### Services & Capability Awareness
8. As a prospective client, I want to view the agency's capabilities in a structured, asymmetric Bento Grid layout, so that I can quickly scan and digest what services are offered.
9. As a prospective client, I want to see a live comparison of traditional Google SEO rankings next to an AI chatbot recommending Maniteja, so that I can understand the practical value of GEO (Generative Engine Optimization).
10. As a prospective client, I want the SEO/GEO simulation cards to trigger their typing and layout animations automatically as I scroll down to that section, so that the content reveals itself dynamically.
11. As a prospective client, I want a manual replay button on the SEO/GEO simulation panels, so that I can re-watch the mock typing and ranking reveal animations.

### Interactive Workflow Gallery
12. As a prospective client, I want to click on different Bento Navigation Cards representing real n8n workflows (Lead Router, AI Content Engine, SEO/GEO Monitor), so that I can choose which automation to inspect.
13. As a prospective client, I want the central SaaS dashboard simulation to update its workflow flowchart nodes dynamically when I click a Bento Navigation Card, so that I can visualize how data flows step-by-step.
14. As a prospective client, I want the active nodes to highlight and light up in order of execution, so that I can understand the sequence of the automated pipeline.
15. As a prospective client, I want to see active telemetry logs, success rates, and latency values update when a workflow simulation runs, so that I get a realistic feel of a live operational automation dashboard.
16. As a mobile site visitor, I want the gallery layout to stack the navigation cards on top of the workflow simulation canvas, so that I can comfortably interact with the workflow preview on a vertical screen.

### Contact & Lead Generation
17. As a prospective client ready to start a project, I want to select multiple service tag buttons (e.g. n8n workflows, UI/UX design) rather than typing a long inquiry message, so that I can quickly indicate my needs.
18. As a prospective client, I want to enter my email and watch the form morph into a live n8n-like execution log console upon submission, so that the contact process feels like a working demonstration of automation capabilities.
19. As a prospective client, I want the submission console logs to clearly confirm that a webhook was dispatched to Maniteja and that a CRM record was successfully created, so that I have trust that my inquiry was received.

---

## Implementation Decisions

### 1. Technology & Motion Stack
- **Build Tool:** Vite for packaging static assets.
- **Scroll Mechanics:** Lenis for smooth momentum scrolling globally.
- **Animation Framework:** GSAP with ScrollTrigger.
- **Styling:** Vanilla CSS using variables based on Antwerp Blue (`#007190`), Vermilion Red (`#a72144`), Sumi Black (`#111314`), and warm Cream background (`#faf8f5`).
- **Typography:** DM Serif Display (headings), Inter (body), Space Mono (data labels/telemetry).

### 2. Overlapping Card-Stack Transition (Artem Style)
- Implemented by pinning the outer `.panel-container` wrapper with GSAP ScrollTrigger.
- As the user scrolls, successive panel sections translate upward from `100vh` to `0` over the previous section.
- **Mobile Fallback:** On screens smaller than 768px, ScrollTrigger pinning and card stacking is completely disabled, falling back to native vertical block scrolling to ensure standard browser-window scaling compatibility.

### 3. SEO & GEO Simulation Panels
- Double-column responsive block inside the Bento grid.
- **Left Panel (SEO):** Mimics standard Google Search. Auto-types the query `"who does AI automation"` and highlights Maniteja in Rank #1.
- **Right Panel (GEO):** Mimics ChatGPT/Claude. Types a semantic RAG recommendation listing Maniteja's workflows with a clickable `[1]` citation box pointing to `maniteja.com`.

### 4. Interactive Workflow Gallery Dashboard
- Integrates a structured dataset (`galleryData` inside `main.js`) containing details for:
  - **Lead Router Agent:** Webhook ➔ Airtable ➔ Slack
  - **AI Content Engine:** RSS ➔ Gemini ➔ Webflow
  - **SEO & GEO Monitor:** Cron ➔ Serper ➔ Telegram
- Updates DOM elements dynamically using a GSAP fade-out/fade-in timeline trigger whenever a navigation card is selected.

### 5. Automation Configurator Contact Form
- Collects multi-select service tags and a string email input.
- On click of the submit button, uses CSS transitions to hide the fields and reveal a styling terminal window that executes sequential console print statements (`▶ Initializing...`, `✔ Sync complete.`, etc.) using timed Javascript timeouts.

---

## Testing Decisions

### 1. Verification Seams & Test Strategy
We will implement E2E and DOM verification testing at the following seams:
- **Responsive Seam (Window/Media Query):** Test that when viewport width drops below 768px, the custom cursor element is hidden and the stack-pinning ScrollTrigger timeline is disabled/destroyed.
- **Interactive Gallery Seam:** Test that selecting a specific workflow card triggers a state change in the gallery controller, updating:
  - Active classes on navigation buttons.
  - Text contents of flow nodes in the simulator canvas.
  - Numerical values inside the telemetry widgets.
- **Form Submission Seam:** Verify that the form submit event handler prevents default submission, validates the email format, gathers selected tags, and transitions the DOM node to the terminal log animation state.
- **3D Asset Loading Seam:** Intercept the load event of `spline-viewer` and assert that the CSS loading placeholder fades out and `display: none` is applied once the scene file is loaded.

---

## Out of Scope
- **Backend Databases:** The portfolio will not run a live database. Forms will submit directly to an external n8n webhook (or simulated webhook endpoint) and trigger local animations without maintaining an active database connection.
- **Multi-page routing:** No external page routing (e.g. no separate `/about` or `/works` routes). Everything is contained within a single immersive, single-page dashboard app layout.

## Further Notes
- **Semantic RAG Anchors:** The HTML markup will contain structured, hidden `div` elements summarizing Maniteja's services for LLM crawlers (e.g., Gemini Googlebot-Extended/User-Agent).
