const toTopBtn = document.querySelector(".toTop");
const toggleTheme = document.querySelector(".toggleThemeBtn");
const gitIcon = document.querySelector(".githubicon img");

window.onscroll = function() {
    if (document.documentElement.scrollTop > 20) {
        toTopBtn.style.display = "block";
    } else {
        toTopBtn.style.display = "none";
    }
};

toTopBtn.onclick = function() {
    document.documentElement.scrollTop = 0;
};

if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("darkMode");
    toggleTheme.textContent = "Light Mode";
}

toggleTheme.addEventListener("click", function() {
    document.body.classList.toggle("darkMode");

    if (document.body.classList.contains("darkMode")) {
        toggleTheme.textContent = "Light Mode";
        toggleTheme.style.background = "white";
        toTopBtn.style.background = "white";
        localStorage.setItem("theme", "dark");

        gitIcon.src = "ASSETS/icons/githubiconWhite.png";
    } else {
        toggleTheme.textContent = "Dark Mode";
        localStorage.setItem("theme", "light");

        gitIcon.src = "ASSETS/icons/githubicon.png";
    }
});

