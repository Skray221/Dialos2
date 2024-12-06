document.addEventListener('DOMContentLoaded', function() {
    document.body.classList.add('fade-in');

    document.querySelectorAll('a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const isSameOrigin = this.origin === window.location.origin;
            if (isSameOrigin) {
                e.preventDefault();
                document.body.classList.remove('fade-in');
                document.body.classList.add('fade-out');

                setTimeout(() => {
                    window.location = this.href;
                }, 500);
            }
        });
    });
});
