const cards = document.querySelectorAll('.project-card');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.2 });

cards.forEach(card => observer.observe(card));


document.getElementById('ct-btn').addEventListener('click', function() {
    const name = document.getElementById('ct-name').value.trim();
    const email = document.getElementById('ct-email').value.trim();
    const msg = document.getElementById('ct-msg').value.trim();

    // check all fields are filled
    if (!name || !email || !msg) {
        alert('Please fill in all fields');
        return;
    }

    // build the mailto link
    const mailto = `mailto:youremail@gmail.com
        ?subject=Portfolio message from ${encodeURIComponent(name)}
        &body=${encodeURIComponent(msg)}%0A%0AFrom: ${encodeURIComponent(name)}%0AEmail: ${encodeURIComponent(email)}`;

    window.location.href = mailto;
});