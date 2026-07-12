// Grab the buttons and the content areas
const btnFiles = document.getElementById('btn-files');
const btnGallery = document.getElementById('btn-gallery');
const contentFiles = document.getElementById('content-files');
const contentGallery = document.getElementById('content-gallery');

// When the "GALLERY" button is clicked...
btnGallery.addEventListener('click', () => {
    // 1. Switch the button highlights
    btnGallery.classList.add('active');
    btnFiles.classList.remove('active');
    
    // 2. Switch the visible content
    contentGallery.classList.add('active');
    contentFiles.classList.remove('active');
});

// When the "FILES" button is clicked...
btnFiles.addEventListener('click', () => {
    // 1. Switch the button highlights
    btnFiles.classList.add('active');
    btnGallery.classList.remove('active');
    
    // 2. Switch the visible content
    contentFiles.classList.add('active');
    contentGallery.classList.remove('active');
});