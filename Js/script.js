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




