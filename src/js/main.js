document.getElementById("startButton").addEventListener("click", function () {
  // Cache le bouton "Commencer la séance" immédiatement après le clic
  this.style.display = "none";

  // Affiche le cercle avec une transition
  const circle = document.getElementById("circle");
  circle.style.display = "block";

  setTimeout(() => {
    // Début de l'animation de respiration lente
    circle.style.animation = "slowBreath 5s infinite"; // Cycle de 5 secondes

    // L'animation dure 60 secondes (respiration lente)
    setTimeout(() => {
      // Cache le cercle après 60 secondes
      circle.style.display = "none";

      // Affiche le message de félicitations
      document.getElementById("congratulations").style.display = "block";
    }, 6000);
  }, 2000); // Transition de 2 secondes avant l'apparition du cercle
});
