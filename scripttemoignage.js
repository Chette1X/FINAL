const cards = document.querySelectorAll(".card");
const filterButtons = document.querySelectorAll(".filter-btn");

// Filtrage
filterButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    filterButtons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    const filter = btn.getAttribute("data-filter");

    cards.forEach(card => {
      card.style.display = (filter === "all" || card.classList.contains(filter)) ? "block" : "none";
    });
  });
});

let currentAudio = null;

// Audio
document.querySelectorAll('.custom-audio-player').forEach(player => {
  const audio = player.querySelector('audio');
  const playBtn = player.querySelector('.play-btn');
  const bars = player.querySelectorAll('.waves span');

  playBtn.addEventListener('click', () => {
    // Si un autre audio est en cours, on le stoppe
    if (currentAudio && currentAudio !== audio) {
      currentAudio.pause();
      const currentPlayer = currentAudio.closest('.custom-audio-player');
      currentPlayer.querySelectorAll('.waves span').forEach(bar => bar.style.animationPlayState = 'paused');
      currentPlayer.querySelector('.play-btn').textContent = '▶';
    }

    if (audio.paused) {
      audio.play();
      playBtn.textContent = '⏸';
      bars.forEach(bar => bar.style.animationPlayState = 'running');
      currentAudio = audio;
    } else {
      audio.pause();
      playBtn.textContent = '▶';
      bars.forEach(bar => bar.style.animationPlayState = 'paused');
    }
  });

  audio.addEventListener('ended', () => {
    playBtn.textContent = '▶';
    bars.forEach(bar => bar.style.animationPlayState = 'paused');
    if (currentAudio === audio) {
      currentAudio = null;
    }
  });
});
