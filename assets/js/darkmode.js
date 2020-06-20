var toggle = document.getElementById("dark-mode-toggle");
var darkTheme = document.getElementById("dark-mode-theme");
var savedTheme = localStorage.getItem("dark-mode-storage") || "light";
setTheme(savedTheme);

function setTheme(mode) {
    localStorage.setItem("dark-mode-storage", mode);    
    if (mode === "dark") {
        darkTheme.disabled = false;
        toggle.className = "dark";
        toggle.innerHTML = "☀️"
    } else if (mode === "light") {
        darkTheme.disabled = true;
        toggle.className = "light";
        toggle.innerHTML = "🌛"

    }
}

toggle.addEventListener("click", () => {
    if (toggle.className === "light") {
        setTheme("dark");
    } else if (toggle.className === "dark") {
        setTheme("light");
    }
});
