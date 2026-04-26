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
const text = role.textContent;

role.textContent = "";
role.style.opacity = 1;
role.style.transform = "translateY(0)";
role.style.animation = "none";

setTimeout(() => {
    let i = 0;
    const type = () => {
        if (i < text.length) {
            role.textContent += text[i]; /* String */
            i++;
            setTimeout(type, 60);
        }
    };
    type();
}, 50);



setInterval(() => {
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

