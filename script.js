document.addEventListener("DOMContentLoaded", () => {

    /* BURGER */
    const burger = document.getElementById("burger");
    const menu = document.getElementById("menu");

    if (burger && menu) {
        burger.addEventListener("click", () => {
            menu.classList.toggle("open");
        });
    }

    /* SCROLL ANIMATIONS */
    const items = document.querySelectorAll(".animate");

    if (!items.length) return;

    if (!("IntersectionObserver" in window)) {
        items.forEach(el => el.classList.add("animate-show"));
        return;
    }

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("animate-show");
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.15
    });

    items.forEach(el => {
        el.classList.add("animate-hidden");
        observer.observe(el);
    });
});