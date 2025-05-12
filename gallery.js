document.addEventListener("DOMContentLoaded", () => {
  if (!localStorage.getItem("navHintSeen")) {
    const hint = document.createElement("div");
    hint.id = "nav-hint";
    hint.textContent = "Swipe ←  /  →";
    document.body.appendChild(hint);

    requestAnimationFrame(() => hint.classList.add("visible"));

    document.addEventListener("touchstart", () => {
      hint.classList.remove("visible");
      hint.addEventListener("transitionend", () => hint.remove());
      localStorage.setItem("navHintSeen", "true");
    }, { once: true });
  }
});
