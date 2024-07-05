document.addEventListener('DOMContentLoaded', function() {
    const boxes = document.querySelectorAll('.box');

    window.addEventListener('scroll', function() {
        boxes.forEach(box => {
            const rect = box.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom > 0) {
                box.classList.add('visible');
            }
        });
    });
});
