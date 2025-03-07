document.addEventListener("DOMContentLoaded", function() {
    let retourBtn = document.querySelector(".btn");

    if (retourBtn) {
        retourBtn.addEventListener("click", function(event) {
            event.preventDefault(); // Empêche le comportement par défaut
            window.location.href = "index.html"; // Redirection forcée
        });
    }
});
