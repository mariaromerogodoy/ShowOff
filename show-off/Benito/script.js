document.getElementById('A').addEventListener('click', function() {
    document.getElementById('CorrectHidden').style.display = 'block';
  });
  
  function toggleMessage(elementId) {
    const el = document.getElementById(elementId);
    el.style.display = (el.style.display === 'block') ? 'none' : 'block';
  }
  
  document.getElementById('B').addEventListener('click', function() {
    toggleMessage('WrongHiddenB');
  });
  
  document.getElementById('C').addEventListener('click', function() {
    toggleMessage('WrongHiddenC');
  });
  
  document.getElementById('D').addEventListener('click', function() {
    toggleMessage('WrongHiddenD');
  });

  const playPauseBtn = document.getElementById('playPauseBtn');
const audio = document.getElementById('my-audio');


playPauseBtn.addEventListener('click', function() {
  if (audio.paused) {
    audio.play();
    playPauseBtn.textContent = "Pause"; 
  } else {
    audio.pause();
    playPauseBtn.textContent = "Play"; 
  }
});
