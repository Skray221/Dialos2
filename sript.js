document.addEventListener('DOMContentLoaded', function() {
    const ovalTexts = document.querySelectorAll('.oval-text');

    ovalTexts.forEach(text => {
        text.addEventListener('mouseover', function() {
            text.classList.add('highlight');
        });

        text.addEventListener('mouseout', function() {
            text.classList.remove('highlight');
        });
    });
});
