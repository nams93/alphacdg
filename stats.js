document.addEventListener("DOMContentLoaded", function() {
    document.querySelector(".btn").addEventListener("click", function(event) {
        event.preventDefault(); // Empêche le comportement par défaut
        window.location.href = "index.html"; // Redirection forcée
    });
});

