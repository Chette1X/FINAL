// Animation au chargement (optionnelle, améliore l'apparence)
document.addEventListener("DOMContentLoaded", () => {
  const card = document.getElementById("bookCard");
  card.style.opacity = "0";
  card.style.transform = "translateY(30px)";
  setTimeout(() => {
    card.style.transition = "all 0.8s ease";
    card.style.opacity = "1";
    card.style.transform = "translateY(0)";
  }, 100);
});
