/* main.js - Micro-interactions & telemetry */
import './style.css';

document.addEventListener('DOMContentLoaded', () => {
    // 0. Confidential Password Gate Controller
    const gate = document.getElementById('password-gate');
    const gateForm = document.getElementById('gate-form');
    const gateInput = document.getElementById('gate-input');
    const gateError = document.getElementById('gate-error');

    const VALID_PASSCODES = ['academy', 'academy2026', 'theacademy', 'maniteja'];

    const unlockGate = () => {
        if (!gate) return;
        gate.classList.add('gate-hidden');
        document.body.classList.remove('gate-locked');
        sessionStorage.setItem('portfolio_unlocked', 'true');
    };

    if (sessionStorage.getItem('portfolio_unlocked') === 'true') {
        unlockGate();
    }

    if (gateForm) {
        gateForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const val = (gateInput.value || '').trim().toLowerCase();
            if (VALID_PASSCODES.includes(val)) {
                if (gateError) gateError.style.display = 'none';
                unlockGate();
            } else {
                if (gateError) gateError.style.display = 'block';
                gateInput.select();
            }
        });
    }
    // 1. Subtle smooth scroll anchor handling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#' || targetId === '') return;
            const targetEl = document.querySelector(targetId);
            if (targetEl) {
                e.preventDefault();
                targetEl.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // 2. Subtle Card Glow Tracking on Mouse Move
    const cards = document.querySelectorAll('.flagship-card, .system-card, .principle-card');
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            card.style.setProperty('--mouse-x', `${x}px`);
            card.style.setProperty('--mouse-y', `${y}px`);
        });
    });

    // 3. Console telemetry stamp
    console.log(
        '%c Maniteja Vudattu %c Systems & AI Agent Engineer %c',
        'background: #f59e0b; color: #000; font-weight: bold; padding: 2px 6px; border-radius: 3px 0 0 3px;',
        'background: #1e293b; color: #fff; padding: 2px 6px; border-radius: 0 3px 3px 0;',
        'background: transparent;'
    );
    console.log('The Horowitz Andreessen Academy (The Academy SF, a16z) Portfolio Dossier initialized.');
});
