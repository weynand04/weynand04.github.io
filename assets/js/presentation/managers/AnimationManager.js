/**
 * @class AnimationManager
 * Initializes 3rd party animations (Typed.js, ScrollReveal).
 */
export class AnimationManager {
    init() {
        this.initTyped();
        this.initScrollReveal();
    }

    initTyped() {
        if (window.Typed) {
            new window.Typed(".typedText", {
                strings: ["FE Developer", "UI UX Design"],
                loop: true,
                typeSpeed: 100,
                backSpeed: 80,
                backDelay: 2000,
            });
        }
    }

    initScrollReveal() {
        if (!window.ScrollReveal) return;

        const sr = window.ScrollReveal({
            origin: "top",
            distance: "80px",
            duration: 2000,
            reset: true,
        });

        // Home
        sr.reveal(".featured-text-card", {});
        sr.reveal(".featured-name", { delay: 100 });
        sr.reveal(".featured-text-info", { delay: 200 });
        sr.reveal(".featured-text-btn", { delay: 200 });
        sr.reveal(".social_icons", { delay: 200 });
        sr.reveal(".featured-image", { delay: 300 });

        // Headings
        sr.reveal(".top-header", {});

        // Left/Right Animations
        const srLeft = window.ScrollReveal({
            origin: "left",
            distance: "80px",
            duration: 2000,
            reset: true,
        });

        srLeft.reveal(".about-info", { delay: 100 });

        const srRight = window.ScrollReveal({
            origin: "right",
            distance: "80px",
            duration: 2000,
            reset: true,
        });

        srRight.reveal(".skills-box", { delay: 100 });
    }
}
