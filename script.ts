const toggleButton = document.getElementById("toggle-skills")!;
const skillsSection = document.getElementById("skills-info")!;

toggleButton.addEventListener("click", () => {
    skillsSection.classList.toggle("hidden");
    toggleButton.textContent = skillsSection.classList.contains("hidden")
        ? "Show Skills"
        : "Hide Skills";
});
