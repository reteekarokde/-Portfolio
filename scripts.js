// Add any interactive JavaScript here
document.addEventListener('DOMContentLoaded', function() {
    // Example: Smooth scroll for navigation links
    const links = document.querySelectorAll('.nav-links a');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
