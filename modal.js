document.addEventListener('DOMContentLoaded', function() {
	var modal = document.getElementById("privacy-policy-modal");
	var span = document.getElementsByClassName("close-btn")[0];

    modal.style.display = "block";

    span.onclick = function() {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
});