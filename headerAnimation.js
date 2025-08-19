function fadeAnimation(el, newText, delay) {
  setTimeout(() => {
    el.style.opacity = 0; // fade out
    el.style.transition = "opacity 0.4s, text-shadow 0.6s"; // smooth transition

    setTimeout(() => {
      el.innerHTML = newText;
      el.style.opacity = 1;

      // Add glow effect
      el.style.textShadow = "0 0 10px #ffffff81";

      // Remove glow after some time (optional)
      setTimeout(() => {
        el.style.textShadow = "none";
      }, 800);
    }, 400);
  }, delay);
}

export function headerAnimation() {
  const elements = document.querySelectorAll(".header-letter");
  const FLAMES = ["F", "L", "A", "M", "E", "S"];
  const EMOJI = ["🤝", "❤️", "🫣", "💐", "😑", "🤗"];

  function runAnimation(chars) {
    for (let i = 0; i < chars.length; i++) {
      fadeAnimation(elements[i], chars[i], i * 200); // staggered by 600ms
    }
  }

  runAnimation(FLAMES);

  // Then alternate between FLAMES and EMOJI every 5 seconds
  let toggle = false;
  setInterval(() => {
    toggle = !toggle;
    runAnimation(toggle ? EMOJI : FLAMES);
  }, 5000);
}
