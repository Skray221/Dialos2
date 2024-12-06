document.getElementById('review-form').addEventListener('submit', function(event) {
    event.preventDefault();
   
    var modal = document.getElementById('alert-modal');
    modal.style.display = 'block';

    var span = document.getElementsByClassName('close-btn')[0];
    span.onclick = function() {
        modal.style.display = 'none';
    }
    
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    }
});
