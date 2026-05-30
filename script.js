// ================= HAMBURGER MENU =================
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// ================= SMOOTH SCROLL =================
document.querySelectorAll("a[href^='#']").forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

// ================= IMAGE FALLBACK =================
document.querySelectorAll("img").forEach(img => {
  img.onerror = function() {
    this.style.background = "#ccc";
    this.alt = "Gambar tidak tersedia";
  };
});