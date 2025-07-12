document.addEventListener('DOMContentLoaded', function() {
    
    setupNavigation();
    
    
    setupPhotoGallery();
});


function setupNavigation() {
    
    const navLinks = document.querySelectorAll('nav a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const href = this.getAttribute('href');
            
            if (href === '#home') {
                alert('Home button clicked!');
            } else if (href === '#campus') {
                alert('Campus News button clicked!');
            } else if (href === '#events') {
                alert('Events button clicked!');
            } else if (href === '#academics') {
                alert('Academics button clicked!');
            } else if (href === '#sports') {
                alert('Sports button clicked!');
            }
        });
    });
}


function setupPhotoGallery() {
    const galleryLink = document.querySelector('a[href="#gallery"]');
    if (galleryLink) {
        galleryLink.addEventListener('click', function(e) {
            e.preventDefault();
            openPhotoGallery();
        });
    }
}


function openPhotoGallery() {
    const modal = document.createElement('div');
    modal.className = 'gallery-modal';
    modal.innerHTML = `
        <div class="gallery-content">
            <div class="gallery-header">
                <h2>ISM T!mes Photo Gallery</h2>
                <span class="close-btn" onclick="this.parentElement.parentElement.parentElement.remove()">&times;</span>
            </div>
            <div class="gallery-grid">
                <div class="gallery-item">
                    <img src="Logo_ismtimes.jpg" alt="ISM T!mes Logo">
                </div>
                <div class="gallery-item">
                    <img src="Logo_ismtimes.jpg" alt="ISM T!mes Logo">
                </div>
                <div class="gallery-item">
                    <img src="Logo_ismtimes.jpg" alt="ISM T!mes Logo">
                </div>
                <div class="gallery-item">
                    <img src="Logo_ismtimes.jpg" alt="ISM T!mes Logo">
                </div>
                <div class="gallery-item">
                    <img src="Logo_ismtimes.jpg" alt="ISM T!mes Logo">
                </div>
                <div class="gallery-item">
                    <img src="Logo_ismtimes.jpg" alt="ISM T!mes Logo">
                </div>
                <div class="gallery-item">
                    <img src="Logo_ismtimes.jpg" alt="ISM T!mes Logo">
                </div>
                <div class="gallery-item">
                    <img src="Logo_ismtimes.jpg" alt="ISM T!mes Logo">
                </div>
                <div class="gallery-item">
                    <img src="Logo_ismtimes.jpg" alt="ISM T!mes Logo">
                </div>
                <div class="gallery-item">
                    <img src="Logo_ismtimes.jpg" alt="ISM T!mes Logo">
                </div>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.remove();
        }
    });
} 
