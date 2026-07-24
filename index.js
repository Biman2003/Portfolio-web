
// ---------- Real-time date, day, and time ----------
function updateDateTime() {
    const now = new Date();

    const day = now.toLocaleDateString("en-US", { weekday: "short" });
    const date = now.toLocaleDateString("en-US", { day: "2-digit", month: "short", year:"numeric" });
    const time = now.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" });

    document.getElementById("datetime").innerHTML =
        " " + day + ", " + date + " &middot; " + time;
}

updateDateTime();
setInterval(updateDateTime, 1000);

// ---------- Dark mode toggle ----------
const darkModeBtn = document.getElementById("darkModeBtn");
const sunIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>`;
const moonIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>`;

darkModeBtn.innerHTML = document.body.classList.contains("dark-mode") ? sunIcon : moonIcon;

darkModeBtn.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
    
    darkModeBtn.classList.add("rotate");
    setTimeout(() => darkModeBtn.classList.remove("rotate"), 400);

    if (document.body.classList.contains("dark-mode")) {
        darkModeBtn.innerHTML = sunIcon;
    } else {
        darkModeBtn.innerHTML = moonIcon;
    }
});

// ---------- Mobile menu toggle ----------
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", function () {
    navLinks.classList.toggle("open");
});

navLinks.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
        navLinks.classList.remove("open");
    });
});