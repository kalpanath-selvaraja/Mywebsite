document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll(".nav-links a");

    window.addEventListener("scroll", () => {
        let current = "";

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (window.scrollY >= sectionTop) {
                current = section.getAttribute("id");
            }
        });

        navLinks.forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("href") === `#${current}`) {
                link.classList.add("active");
            }
        });
    });




// Text show

    const role = document.getElementById("role");

    if (role) {
        const text = role.textContent;
        role.textContent = "";
        role.style.opacity = 1;
        role.style.transform = "translateY(0)";
        role.style.animation = "none";

        setTimeout(() => {
            let i = 0;
            const type = () => {
                if (i < text.length) {
                    role.textContent += text[i];
                    i++;
                    setTimeout(type, 60);
                }
            };
            type();
        }, 500);
    }



    setTimeout(() => {
        const animatedEls = document.querySelectorAll(".reveal, .slide-left, .slide-right, .stagger-child");

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.classList.add("visible");
                    }, entry.target.classList.contains("stagger-child") ? index * 100 : 0);
                }
            });
        }, { threshold: 0.15 });

        animatedEls.forEach(el => observer.observe(el));
    },300);



    const hamburger = document.getElementById("hamburger");
    const navMenu = document.getElementById("nav-links");

    if (hamburger && navMenu) {
        hamburger.addEventListener("click", () => {
            hamburger.classList.toggle("open");
            navMenu.classList.toggle("open");
        });

        navMenu.querySelectorAll("a").forEach(link => {
            link.addEventListener("click", () => {
                hamburger.classList.remove("open");
                navMenu.classList.remove("open");
            });
        });
    }





    const cards = document.querySelectorAll(".exercise-card");
    const frame = document.getElementById("preview-frame");
    const previewTitle = document.getElementById("preview-title");
    const previewTag = document.getElementById("preview-tag");

    if (cards.length > 0) {
        cards.forEach(card => {
            card.addEventListener("click", () => {
                cards.forEach(c => c.classList.remove("active"));
                card.classList.add("active");

                if (window.innerWidth <= 768) {
                    window.open(card.getAttribute("data-file"), "_blank");
                } else {
                    frame.src = card.getAttribute("data-file");
                    previewTitle.textContent = card.getAttribute("data-name");
                    previewTag.textContent = card.getAttribute("data-tag");
                }
            });
        });
    }

});








