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


// PDF Modal Logic
const pdfTriggers = document.querySelectorAll('.pdf-trigger');
const pdfModal = document.getElementById('pdf-modal');
const pdfFrame = document.getElementById('pdf-frame');
const closeModal = document.getElementById('close-modal');

// Open Modal when a PDF icon is clicked
pdfTriggers.forEach(trigger => {
    trigger.addEventListener('click', () => {
        const pdfPath = trigger.getAttribute('data-pdf');
        pdfFrame.src = pdfPath; 
        pdfModal.style.display = 'flex'; 
    });
});

// Close Modal when the "X" is clicked
closeModal.addEventListener('click', () => {
    pdfModal.style.display = 'none';
    pdfFrame.src = ""; 
});

// Close Modal if the user clicks anywhere in the dark background outside the box
window.addEventListener('click', (e) => {
    if (e.target === pdfModal) {
        pdfModal.style.display = 'none';
        pdfFrame.src = ""; 
    }
});