# Armory (Framer Template) Website Analysis

This document details the visual style, design patterns, and scroll animation mechanics of the Armory Framer template ([armory.framer.ai](https://armory.framer.ai/?via=eyitayo64)).

---

## 🎨 Visual Style & Theme
* **Alternating Theme Scheme:** 
  * Uses a clean narrative that alternates between deep, dark sections and high-brightness light sections.
  * **Dark Theme:** Background `#060606` with pure white (`#ffffff`) text.
  * **Light Theme:** Background `#ffffff` with dark charcoal (`#060606`) text.
* **Accent & Borders:**
  * Displays border animations using `conic-gradient` color stops to simulate a neon border sweep around card components.
  * Card units are styled with a soft `14px` border-radius and ambient occlusion shadows to lift them from the background.
  * Structures resemble a sleek, gapless **bento grid** layout.

---

## 🅰️ Typography
* **Headings Font:** `"Inter Display", sans-serif` (H1 `80px`, H2 `48px`). The weights are kept at a clean `400` (Regular) rather than Bold, evoking a high-end luxury, modern-tech feel.
* **Monospace Labels:** `"Geist Mono", monospace` (`13px`, weight `200` or `300`). Used for small telemetry tags, metadata, dates, and card tags.
* **Brand Logo:** `"Gasoek One", sans-serif` (thick, geometric display typeface).

---

## 📐 Layout & Structure
* **Central Visual Component:**
  * Features a custom flow diagram/canvas component modeling email trigger blocks, conditional filters, and actions.
  * Includes dashboard-style charts, telemetry logs, and active status indicators.

---

## 🎬 Motion & Animation
* **Inverting Custom Cursor:**
  * Uses a cursor element (`.cursor_root__BwgZW`) utilizing CSS `mix-blend-mode: difference`. When hovered over light or dark elements, it dynamically inverts the color of whatever is underneath it.
* **Scroll-Linked Word Reveal:**
  * Text sections split text into individual letters or words using span structures. As you scroll, their opacity fades from `0.2` (semi-visible placeholder) to `1.0` (fully active white/charcoal).
* **Telemetry Counters:**
  * Active counters (uptime percent, multipliers, speeds) animate digits from 0 up to their target values on viewport entry.

---

## 🎞️ Captured Scroll Progression (Flipbook)
Click on the frames below to view the scroll-linked transitions step-by-step:

| Frame | Scroll Position | Description | Link |
| :--- | :--- | :--- | :--- |
| **00** | `0px` | Dark hero section displaying the primary header and the interactive node-flow canvas | [Frame 00](file:///C:/Users/Manit/Desktop/portfolioe/references/armory/frame_00.png) |
| **01** | `1500px` | Scrolling to the features grid; neon glowing cards fade in | [Frame 01](file:///C:/Users/Manit/Desktop/portfolioe/references/armory/frame_01.png) |
| **02** | `3000px` | Dashboard mockup panel with telemetry logs and active counting metrics | [Frame 02](file:///C:/Users/Manit/Desktop/portfolioe/references/armory/frame_02.png) |
| **03** | `4500px` | Dark theme transition card explaining integrations | [Frame 03](file:///C:/Users/Manit/Desktop/portfolioe/references/armory/frame_03.png) |
| **04** | `6000px` | Transition to the light theme section; background sweeps to white | [Frame 04](file:///C:/Users/Manit/Desktop/portfolioe/references/armory/frame_04.png) |
| **05** | `7500px` | Detailed layout in light theme; text opacity reveals as you scroll | [Frame 05](file:///C:/Users/Manit/Desktop/portfolioe/references/armory/frame_05.png) |
| **06** | `9000px` | Card grids detailing product benefits and speed | [Frame 06](file:///C:/Users/Manit/Desktop/portfolioe/references/armory/frame_06.png) |
| **07** | `10500px` | Transition back to the dark theme; user testimonial section | [Frame 07](file:///C:/Users/Manit/Desktop/portfolioe/references/armory/frame_07.png) |
| **08** | `12000px` | Bento showcases of metrics and feature blocks | [Frame 08](file:///C:/Users/Manit/Desktop/portfolioe/references/armory/frame_08.png) |
| **09** | `13500px` | Interactive slider component demonstrating product states | [Frame 09](file:///C:/Users/Manit/Desktop/portfolioe/references/armory/frame_09.png) |
| **10** | `15000px` | Pricing table cards displaying available tiers | [Frame 10](file:///C:/Users/Manit/Desktop/portfolioe/references/armory/frame_10.png) |
| **11** | `16500px` | Frequently Asked Questions (FAQ) accordion block | [Frame 11](file:///C:/Users/Manit/Desktop/portfolioe/references/armory/frame_11.png) |
| **12** | `17225px` | Dark footer section showing CTA and brand logo | [Frame 12](file:///C:/Users/Manit/Desktop/portfolioe/references/armory/frame_12.png) |
