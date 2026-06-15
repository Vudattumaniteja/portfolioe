# ADR 0001: Front-end Tech Stack and Motion Architecture

* **Status:** Approved
* **Date:** 2026-06-15
* **Author:** Antigravity

---

## Context
For Maniteja's portfolio and AI agency website, we require a highly interactive, visually premium layout that merges n8n workflow simulations, custom cursors, and custom transitions. The design needs to match high-end references (Artem, Armory, Qiao Li) while maintaining fast page load speeds and smooth scrolling performance.

We considered two primary approaches:
1. **Framework-based (Next.js/React + Framer Motion):** Standard modern web stack, but introduces heavy package bundles and complex hooks that can interfere with smooth scroll momentum control.
2. **Vanilla-based (Vite + GSAP + Lenis):** Light, hyper-performant vanilla setup. Highly deterministic scroll control via Lenis, and industry-standard canvas/timeline manipulation via GSAP ScrollTrigger.

Additionally, we evaluated two scroll behaviors:
* **Standard vertical flow scroll**
* **Overlapping Card-Stack pinning (Artem style)**

---

## Decision
We decided to build the website using **Vite (Vanilla JS)** combined with **GSAP (GreenSock)**, **Lenis**, and **Vanilla CSS**, utilizing the **Overlapping Card-Stack pinning** transition scheme.

1. **Vite** keeps the build light, letting us compile assets without framework overhead.
2. **GSAP & ScrollTrigger** provide robust, hardware-accelerated animations for custom cursors, split-text letters, and bento card transitions.
3. **Lenis** provides momentum-based smooth scroll across desktop and mobile devices.
4. **Overlapping Card-Stack** transition is implemented by pinning a parent panel container and translating section cards vertically over each other, creating a tactile card-peel feel.
5. **Palette G** (Antwerp Blue/Teal `#007190` and Vermilion Red `#a72144` on a warm cream background `#faf8f5`) is utilized as the primary brand color system.

---

## Consequences
* **Pros:**
  * Ultra-high rendering performance and frame rates (60fps+).
  * Perfect, deterministic control over scroll-linked animations.
  * Easy integration of custom WebGL/Spline 3D embeds without framework hydration issues.
* **Cons:**
  * No built-in component routing (single-page design is required, which fits our portfolio scope perfectly).
  * UI components must be engineered in vanilla JS, which we have fully prototyped and verified.
