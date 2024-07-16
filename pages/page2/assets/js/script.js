document.addEventListener('DOMContentLoaded', function() {
    const circles = document.querySelectorAll('.progress-bar.fg');

    circles.forEach(circle => {
        const percentage = circle.getAttribute('data-percentage');
        const offset = 502 - (502 * percentage) / 100;
        circle.style.strokeDashoffset = offset;
    });
});