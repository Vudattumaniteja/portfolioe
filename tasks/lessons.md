# Project Lessons Learned

## 1. 3D Spline Embed Failure
* **Mistake/Issue:** Using an iframe spline viewer linking to `prod.spline.design` which failed with a `403 Forbidden` error, showing a blank fallback screen.
* **Root Cause:** Reliance on external, unverified third-party 3D hosting assets.
* **Prevention Rule:** Avoid raw external spline-viewer embeds unless local `.splinecode` files are supplied. Instead, generate high-end visual key art assets (e.g. via text-to-image) and combine them with interactive HTML5 canvas particle networks that respond to cursor physics. This guarantees 100% loading reliability, instant loading times, and a stunning custom look.

## 2. Flat Layout and Navigation Aesthetics
* **Mistake/Issue:** The primary card deck deck looked flat and static in the initial version.
* **Root Cause:** Standard absolute 2D card indexing.
* **Prevention Rule:** Apply true 3D perspective wraps (`perspective: 1500px` and `transform-style: preserve-3d`) to overlapping deck elements, and animate cards dynamically in 3D space using GSAP mousemove listeners so elements rotate, scale, and lean toward the user's cursor.
