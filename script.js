 // Reveal Answer Button
 document.getElementById('reveal-answer').addEventListener('click', function () {
  const response = document.getElementById('response');
  const resetButton = document.getElementById('reset-proposal');
  response.classList.remove('hidden');
  this.style.display = 'none'; // Hide the reveal button
  resetButton.classList.remove('hidden'); // Show the reset button
});

// Reset Proposal Button
document.getElementById('reset-proposal').addEventListener('click', function () {
  const response = document.getElementById('response');
  const revealButton = document.getElementById('reveal-answer');
  const surpriseContainer = document.getElementById('surprise-container');
  response.classList.add('hidden');
  revealButton.style.display = 'inline-block'; // Show the reveal button again
  this.classList.add('hidden'); // Hide the reset button
  surpriseContainer.classList.add('hidden'); // Hide the surprise container
});

// Show Surprise Button
document.getElementById('show-surprise').addEventListener('click', function () {
  const surpriseContainer = document.getElementById('surprise-container');
  surpriseContainer.classList.remove('hidden'); // Show the surprise
});
function revealImage() {
    const hiddenOverlay = document.querySelector('.hidden-image');
    const revealedImage = document.querySelector('.revealed-image');
    const heartsContainer = document.querySelector('.hearts-container');
  
    // Reveal the image
    hiddenOverlay.style.display = 'none';
    revealedImage.style.display = 'block';
  
    // Create and animate hearts
    for (let i = 0; i < 20; i++) {
      const heart = document.createElement('div');
      heart.classList.add('heart');
      heart.style.left = Math.random() * 100 + '%';
      heart.style.animationDelay = `${Math.random() * 0.5}s`;
      heartsContainer.appendChild(heart);
  
      // Remove heart after animation
      heart.addEventListener('animationend', () => {
        heart.remove();
      });
    }
  }
  
  function resetImage() {
    const hiddenOverlay = document.querySelector('.hidden-image');
    const revealedImage = document.querySelector('.revealed-image');
    const heartsContainer = document.querySelector('.hearts-container');
  
    // Reset the overlay and hide the image
    hiddenOverlay.style.display = 'block';
    revealedImage.style.display = 'none';
  
    // Clear remaining hearts
    heartsContainer.innerHTML = '';
  }
  