// ==========================================
// 1. Tab Switching Logic
// ==========================================
const btnFiles = document.getElementById('btn-files');
const btnGallery = document.getElementById('btn-gallery');
const contentFiles = document.getElementById('content-files');
const contentGallery = document.getElementById('content-gallery');

// Listen for clicks on the Gallery button
btnGallery.addEventListener('click', () => {
    btnGallery.classList.add('active');
    btnFiles.classList.remove('active');
    
    // Show Gallery, Hide Files
    contentGallery.style.display = 'block';
    contentFiles.style.display = 'none';
});

// Listen for clicks on the Files button
btnFiles.addEventListener('click', () => {
    btnFiles.classList.add('active');
    btnGallery.classList.remove('active');
    
    // Show Files, Hide Gallery
    contentFiles.style.display = 'block';
    contentGallery.style.display = 'none';
});

// Set default state on page load
contentGallery.style.display = 'none'; 
contentFiles.style.display = 'block';


// ==========================================
// 2. PDF Modal Logic
// ==========================================
const pdfTriggers = document.querySelectorAll('.pdf-trigger');
const pdfModal = document.getElementById('pdf-modal');
const pdfFrame = document.getElementById('pdf-frame');
const closeModal = document.getElementById('close-modal');

if (pdfTriggers.length > 0) {
    pdfTriggers.forEach(trigger => {
        trigger.addEventListener('click', () => {
            const pdfPath = trigger.getAttribute('data-pdf');
            pdfFrame.src = pdfPath; 
            pdfModal.style.display = 'flex'; 
        });
    });

    closeModal.addEventListener('click', () => {
        pdfModal.style.display = 'none';
        pdfFrame.src = ""; 
    });
}

// ==========================================
// 3. Gallery Image Lightbox Logic
// ==========================================
const galleryTriggers = document.querySelectorAll('.gallery-trigger');
const imageModal = document.getElementById('image-modal');
const modalImageDisplay = document.getElementById('modal-image-display');
const closeImageModal = document.getElementById('close-image-modal');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');

let imagePaths = [];
let currentPhotoIndex = 0;

if (galleryTriggers.length > 0) {
    galleryTriggers.forEach((trigger, index) => {
        const imgElement = trigger.querySelector('.gallery-img');
        imagePaths.push(imgElement.src);

        trigger.addEventListener('click', () => {
            currentPhotoIndex = index; 
            modalImageDisplay.src = imagePaths[currentPhotoIndex];
            imageModal.style.display = 'flex';
        });
    });

    nextBtn.addEventListener('click', () => {
        currentPhotoIndex++;
        if (currentPhotoIndex >= imagePaths.length) {
            currentPhotoIndex = 0; 
        }
        modalImageDisplay.src = imagePaths[currentPhotoIndex];
    });

    prevBtn.addEventListener('click', () => {
        currentPhotoIndex--;
        if (currentPhotoIndex < 0) {
            currentPhotoIndex = imagePaths.length - 1; 
        }
        modalImageDisplay.src = imagePaths[currentPhotoIndex];
    });

    closeImageModal.addEventListener('click', () => {
        imageModal.style.display = 'none';
    });
}

// Close Modals if clicking the dark background
window.addEventListener('click', (e) => {
    if (e.target === pdfModal) {
        pdfModal.style.display = 'none';
        if(pdfFrame) pdfFrame.src = ""; 
    }
    if (e.target === imageModal) {
        imageModal.style.display = 'none';
    }
});