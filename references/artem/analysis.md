# Artem Shcherbakov Portfolio Analysis

This document breaks down the design system, hero layout, and scroll-linked animations of Artem Shcherbakov's portfolio website ([artemartemartem.com](https://artemartemartem.com/)).

---

## 🎨 Visual Style & Theme
* **Color Palette:** Minimalist high-contrast light theme.
  * **Background:** Pure White (`rgb(255, 255, 255)`)
  * **Text/Typography:** Charcoal/Black (`rgb(0, 0, 0)`)
* **Core Aesthetics:** Immersive minimalism with high-end editorial layouts. Dynamic spacing utilizing viewport-width (`vw`) units (e.g. `calc(16 / 1440 * 100vw)`) ensuring that layouts scale perfectly across different screen sizes.

---

## 🅰️ Typography
* **Primary Display Font:** `"EaseDouble"` (serif/sans-serif display face used for heavy, overlapping, high-impact titles in weights `900`, `600`, `500`, and `400`).
* **Accent Font:** `"Great Rebellion"` (used for stylistic hand-written elements or secondary display highlights).
* **Body & Navigation Font:** `"Arial Narrow"` (weights `700` and `400`). Gives a clean, high-density technical reading experience.

---

## 📐 Layout & Structure
* **Hero Section Layout:**
  * Centered displays featuring a large typography statement: `"Hey I'm Artem. Director & Creative Lead. Founder of ZHEESHEE studio."`
  * Floating animated GIF/canvas element in the center representing an **"Animated head"** that tracks interactive cursor movements.
  * Structured labels and links placed at the corners using absolute positioning relative to the viewport.
* **Bento Grid & Project Cases:**
  * Viewport-height pinning (`200vh` for the hero wrapper, and `450vh` for the projects section).
  * Project cases stack and slide dynamically on top of each other as the user scrolls, creating a tactile card-peel effect.

---

## 🎬 Motion & Animation
* **Scroll Engine:** **Lenis (v1.3.17)** custom scrollbar engine (`window.__GLOBAL_SCROLL`), which overrides native scroll behavior for smooth, fluid momentum scroll.
* **Animation Library:** **GSAP (v3.14.2)**.
* **Scroll-Linked Pinning:** Utilizes GSAP ScrollTrigger to pin sections (like the hero text or video showcases) while sub-components or project details scroll or slide horizontally.
* **Text Reveals:** Heading texts are split into individual `<span>` letters or words, revealing dynamically with staggered delays.

---

## 🎞️ Captured Scroll Progression (Flipbook)
Click on the frames below to view the scroll-linked transitions step-by-step:

| Frame | Scroll Position | Description | Link |
| :--- | :--- | :--- | :--- |
| **00** | `0px` | Hero section landing view with centering head GIF and intro text | [Frame 00](file:///C:/Users/Manit/Desktop/portfolioe/references/artem/frame_00.png) |
| **01** | `500px` | Scroll begins; head GIF shifts and text begins sliding out | [Frame 01](file:///C:/Users/Manit/Desktop/portfolioe/references/artem/frame_01.png) |
| **02** | `1000px` | First project card enters viewport, overlapping previous elements | [Frame 02](file:///C:/Users/Manit/Desktop/portfolioe/references/artem/frame_02.png) |
| **03** | `1500px` | Project card pins to center and plays full video background | [Frame 03](file:///C:/Users/Manit/Desktop/portfolioe/references/artem/frame_03.png) |
| **04** | `2000px` | Next project card starts sliding in from the bottom | [Frame 04](file:///C:/Users/Manit/Desktop/portfolioe/references/artem/frame_04.png) |
| **05** | `2500px` | Second project card pins; display of wide typography overlays | [Frame 05](file:///C:/Users/Manit/Desktop/portfolioe/references/artem/frame_05.png) |
| **06** | `3000px` | Scrolling through projects list showing details | [Frame 06](file:///C:/Users/Manit/Desktop/portfolioe/references/artem/frame_06.png) |
| **07** | `3500px` | Grid section transitions with grid lines fading in | [Frame 07](file:///C:/Users/Manit/Desktop/portfolioe/references/artem/frame_07.png) |
| **08** | `4000px` | Text-reveal columns detailing ZHEESHEE studio and Roar Games | [Frame 08](file:///C:/Users/Manit/Desktop/portfolioe/references/artem/frame_08.png) |
| **09** | `4500px` | Contact details and socials slide in from the bottom | [Frame 09](file:///C:/Users/Manit/Desktop/portfolioe/references/artem/frame_09.png) |
| **10** | `4891px` | Final footer showing social links and copyright notice | [Frame 10](file:///C:/Users/Manit/Desktop/portfolioe/references/artem/frame_10.png) |
