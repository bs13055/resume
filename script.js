const navbar = document.getElementById("mainNav");
const menu = document.getElementById("navMenu");

window.addEventListener("scroll", () => {
    if (window.scrollY > 30) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});

document.querySelectorAll(".nav-link").forEach(link => {
    link.addEventListener("click", () => {
        if (menu.classList.contains("show")) {
            bootstrap.Collapse.getOrCreateInstance(menu).hide();
        }
    });
});

const items = document.querySelectorAll(
    ".title-row,.glass-box,.education-item,.skill-box,.other-box,.profile-wrap"
);

items.forEach(item => item.classList.add("reveal"));

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.15
});

items.forEach(item => observer.observe(item));