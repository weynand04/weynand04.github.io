/**
 * @class NavigationManager
 * Handles navigation bar logic: toggle menu, sticky header, scrollspy.
 */
export class NavigationManager {
    constructor() {
        this.header = document.getElementById("header");
        this.menuBtn = document.getElementById("myNavMenu");
        this.toggleBtn = document.querySelector(".nav-menu-btn");
        this.sections = document.querySelectorAll("section[id]");
        this.navLinks = document.querySelectorAll(".nav-menu a");
    }

    init() {
        this.setupMobileMenu();
        this.setupScrollListener();
    }

    setupMobileMenu() {
        if (this.toggleBtn) {
            this.toggleBtn.onclick = () => {
                if (this.menuBtn.className === "nav-menu") {
                    this.menuBtn.className += " responsive";
                } else {
                    this.menuBtn.className = "nav-menu";
                }
            };
        }
    }

    setupScrollListener() {
        window.addEventListener("scroll", () => {
            this.handleHeaderShadow();
            this.handleScrollSpy();
        });
    }

    handleHeaderShadow() {
        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
            this.header.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1)";
            this.header.style.height = "70px";
            this.header.style.lineHeight = "70px";
        } else {
            this.header.style.boxShadow = "none";
            this.header.style.height = "90px";
            this.header.style.lineHeight = "90px";
        }
    }

    handleScrollSpy() {
        const scrollY = window.scrollY;

        this.sections.forEach((current) => {
            const sectionHeight = current.offsetHeight;
            const sectionTop = current.offsetTop - 50;
            const sectionId = current.getAttribute("id");
            const navLink = document.querySelector(".nav-menu a[href*=" + sectionId + "]");

            if (navLink) {
                if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                    navLink.classList.add("active-link");
                } else {
                    navLink.classList.remove("active-link");
                }
            }
        });
    }
}
