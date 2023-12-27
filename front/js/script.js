const div = document.querySelector("div");

div.addEventListener("mouseenter", () => {
    div.style.background = "#000";
    div.style.color = "#fff";
    div.classList.add("ativa")
})

div.addEventListener("mouseout", () => {
    div.style.background = "#fff";
    div.style.color = "#000";
    div.classList.remove("ativa");
})