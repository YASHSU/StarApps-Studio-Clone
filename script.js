document.querySelectorAll('.nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 60, // Adjust for header height
                behavior: 'smooth'
            });
        }
    });
});

// Modal Functionality
const modal = document.getElementById('modal');
const getStartedBtn = document.getElementById('getStartedBtn');
const closeModal = document.getElementById('closeModal');

// Show Modal
getStartedBtn.addEventListener('click', () => {
    modal.classList.add('visible');
});

// Hide Modal
closeModal.addEventListener('click', () => {
    modal.classList.remove('visible');
});

// Close Modal on Outside Click
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.classList.remove('visible');
    }
});
