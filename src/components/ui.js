import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function initUI() {
    // ─── Love Note Envelope ────────────────────────
    const envelope = document.querySelector('.envelope-wrapper');
    if (envelope) {
        envelope.addEventListener('click', () => {
            envelope.classList.toggle('open');
        });
    }

    // ─── Bucket List Toggles ────────────────────────
    document.querySelectorAll('.bucket-item').forEach(item => {
        item.addEventListener('click', () => {
            item.classList.toggle('completed');
        });
    });

    // ─── Scroll Reveal (Intersection Observer) ────────────────────────
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('reveal-active');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.reveal-text').forEach(el => {
        observer.observe(el);
    });
}
