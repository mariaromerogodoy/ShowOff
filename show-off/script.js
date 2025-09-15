document.addEventListener('DOMContentLoaded', () => {
    const outputDiv = document.getElementById('output');
    outputDiv.style.fontFamily = 'monospace';
  
    const specialties = [
      "*",
      "My name is Maria Romero Godoy",
      "I'm from Mexico City + the Bay Area",
      "And I love",
      "Music",
      "Press BEGIN to experience my playlist"
    ];
  
    let index = 0;
  
    function showNextSpecialty() {
      index = (index + 1) % specialties.length;
      outputDiv.textContent = specialties[index];
    }
  
    const cycleButton = document.getElementById('myButton');
    cycleButton.addEventListener('click', showNextSpecialty);
  });

// Then use this JS:
const changeButton = document.getElementById('changeButton');
if (changeButton) {
  changeButton.addEventListener('click', function () {
    outputDiv.innerHTML = "<span style='font-size: 100px; color: blue;'>I’VE CHANGED!!!</span>";
  });
}
