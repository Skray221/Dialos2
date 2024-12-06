document.addEventListener('DOMContentLoaded', function() {
    var form = document.getElementById("appointment-form");
    var alertModal = document.getElementById("alert-modal");
    var alertSpan = alertModal.getElementsByClassName("close-btn")[0];

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        alertModal.style.display = "block";
    });

    alertSpan.onclick = function() {
        alertModal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == alertModal) {
            alertModal.style.display = "none";
        }
    }
});
