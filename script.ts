const toggleButton = document.getElementById("toggle-skills")!;
const skillsSection = document.getElementById("skills-info")!;

toggleButton.addEventListener("click", () => {
    if (skillsSection.classList.contains("hidden")) {
        skillsSection.classList.remove("hidden");
    } else {
        skillsSection.classList.add("hidden");
    }
});
