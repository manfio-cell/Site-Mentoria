// script.js - comportamento simples: music toggle + smooth scroll
document.addEventListener('DOMContentLoaded', function(){
  const bgMusic = document.getElementById('bgMusic');
  const toggle = document.getElementById('musicToggle');
  let playing = true;
  // Try to play (may be blocked by browser autoplay policies)
  bgMusic.play().catch(()=>{playing=false; toggle.textContent='▶'; toggle.title='Tocar música'});

  toggle.addEventListener('click', function(){
    if(playing){
      bgMusic.pause();
      toggle.textContent = '▶';
      toggle.title = 'Tocar música';
    } else {
      bgMusic.play();
      toggle.textContent = '⏸';
      toggle.title = 'Pausar música';
    }
    playing = !playing;
  });

  // Smooth scroll for in-page links
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click', function(e){
      const target = document.querySelector(this.getAttribute('href'));
      if(target){ e.preventDefault(); target.scrollIntoView({behavior:'smooth', block:'start'}); }
    });
  });
});
