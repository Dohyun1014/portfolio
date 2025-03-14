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

document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("section");
    let currentIndex = 0;
    let isScrolling = false; // 연속 입력 방지

    function scrollToSection(index) {
        if (index < 0 || index >= sections.length) return;

        isScrolling = true;
        sections[index].scrollIntoView({ behavior: "smooth" });

        setTimeout(() => {
            isScrolling = false;
        }, 700); // 애니메이션이 끝난 후 다시 입력 가능
    }

    window.addEventListener("wheel", (event) => {
        if (isScrolling) return;

        if (event.deltaY > 0) {
            // 아래로 스크롤
            currentIndex = Math.min(currentIndex + 1, sections.length - 1);
        } else {
            // 위로 스크롤
            currentIndex = Math.max(currentIndex - 1, 0);
        }

        scrollToSection(currentIndex);
    });

    window.addEventListener("keydown", (event) => {
        if (isScrolling) return;

        if (event.key === "ArrowDown") {
            currentIndex = Math.min(currentIndex + 1, sections.length - 1);
        } else if (event.key === "ArrowUp") {
            currentIndex = Math.max(currentIndex - 1, 0);
        }

        scrollToSection(currentIndex);
    });
});
