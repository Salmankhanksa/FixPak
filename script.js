const greenPanel = document.getElementById("green-panel");
const panelButton = document.getElementById("panel-button");
const registerForm = document.getElementById("register-form");
const loginForm = document.getElementById("login-form");

panelButton.addEventListener("click", () => {
    if (panelButton.textContent === "Register") {
        greenPanel.style.transform = "translateX(100%)";
        panelButton.textContent = "Login";
        registerForm.classList.remove("hidden");
        loginForm.classList.add("hidden");
    } else {
        greenPanel.style.transform = "translateX(0)";
        panelButton.textContent = "Register";
        loginForm.classList.remove("hidden");
        registerForm.classList.add("hidden");
    }
});
