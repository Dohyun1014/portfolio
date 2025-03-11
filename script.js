document.addEventListener("DOMContentLoaded", () => {
    const elements = document.querySelectorAll(".title-text, .slide-in, .subtitle");
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = "translateY(0) translateX(0) scale(1)";
            } else {
                entry.target.style.opacity = 0;
                if (entry.target.classList.contains("slide-in")) {
                    entry.target.style.transform = "translateX(-50px)";
                } else if (entry.target.classList.contains("subtitle")) {
                    entry.target.style.transform = "scale(0.8)";
                } else {
                    entry.target.style.transform = "translateY(20px)";
                }
            }
        });
    }, { threshold: 0.2 });

    elements.forEach(el => observer.observe(el));
});
