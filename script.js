document.addEventListener('DOMContentLoaded', () => {
    const profile = document.getElementById('profile-pic');
    const caption = document.getElementById('welcome-caption');
    const header = document.getElementById('header-container');

    // Run the Hero Animation and Text Scale on load
    setTimeout(() => {
        profile.classList.add('hero-active');
        caption.classList.add('animate');
        header.style.opacity = '1';
    }, 400);
});

function openPage(section) {
    const mainContent = document.getElementById('main-content');
    const overlay = document.getElementById('page-overlay');
    const dataContainer = document.getElementById('page-data');

    // Apply 42% blur to background AND profile picture
    mainContent.classList.add('is-blurred');

    // Content for each section
    dataContainer.innerHTML = `<h1>${section}</h1><p>This is your ${section} content.</p>`;
    
    overlay.style.display = 'flex';
}

function closePage() {
    const mainContent = document.getElementById('main-content');
    const overlay = document.getElementById('page-overlay');

    // Remove blur and hide window
    mainContent.classList.remove('is-blurred');
    overlay.style.display = 'none';
}

