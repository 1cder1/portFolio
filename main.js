function toggleMusic() {
    var audio = document.getElementById('bg-music');
    var notes = document.getElementById('music-notes');

    if (audio.paused) {
        // Play the audio and show music notes
        audio.play();
        notes.style.display = "block"; // Show the notes
        setTimeout(function() {
            notes.style.opacity = 1; // Fade in
        }, 0);
    } else {
        // Pause the audio and gradually fade out the notes
        audio.pause();
        notes.style.opacity = 0; // Start fading out

        // After the fade-out is complete, hide the notes entirely
        setTimeout(function() {
            notes.style.display = "none"; // Hide the notes after fade-out
        }, 1000); // Match the duration of the fade-out transition (1s)
    }
}


// Function to switch between pages
function switchPage(page) {
    // Hide all pages
    document.querySelector('.welcomePage').style.display = 'block';
    document.querySelector('.aboutPage').style.display = 'none';
    document.querySelector('.workPage').style.display = 'none';

    // Show the selected page
    document.querySelector(`.${page}`).style.display = 'block';
}

// Event listener for the about button click
document.querySelector('.about-button').addEventListener('click', function() {
    switchPage('aboutPage');  // Show the About page when About button is clicked
});

// Event listeners for exit buttons to return to the welcomePage
document.querySelector('.welcome-exit').addEventListener('click', function() {
    switchPage('welcomePage');  // Show the Welcome page when the Welcome exit button is clicked
});

document.querySelector('.about-exit').addEventListener('click', function() {
    switchPage('welcomePage');  // Show the Welcome page from the About page
});

document.querySelector('.work-exit').addEventListener('click', function() {
    switchPage('welcomePage');  // Show the Welcome page from the Work page
});


//--------

// Get the slider element
const slider = document.querySelector('.about-slidder');

// Track whether the slider is being dragged
let isDragging = false;

// Event listener to start dragging
slider.addEventListener('mousedown', (e) => {
    isDragging = true;
    document.body.style.userSelect = 'none'; // Prevent text selection while dragging
});

// Event listener to stop dragging
document.addEventListener('mouseup', () => {
    isDragging = false;
    document.body.style.userSelect = 'auto'; // Re-enable text selection
});

// Event listener to drag the slider
document.addEventListener('mousemove', (e) => {
    if (isDragging) {
        let newTop = e.clientY - slider.offsetHeight / 2; // Adjust position based on mouse movement
        
        // Ensure the slider stays within bounds (no going off the screen)
        newTop = Math.max(newTop, 0); // Prevent going above the page
        newTop = Math.min(newTop, window.innerHeight - slider.offsetHeight); // Prevent going below the page

        // Update the slider position
        slider.style.top = newTop + 'px';
    }
});
