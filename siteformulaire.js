function main() {
    document.addEventListener("DOMContentLoaded", function() {
        let monFormulaire = document.getElementById("formulaire");

        monFormulaire.addEventListener("submit", function(e) {
                e.preventDefault();

            let prenom = document.getElementById("prenom").value;
            let nom = document.getElementById("Nom").value;
            let email = document.getElementById("email").value;
            let password = document.getElementById("password").value;

            if(prenom==="")
            {
                let erreur=document.getElementById("erreur")
                erreur.textContent="Les champs doivent être completé"
                erreur.style.color="red"
            }
            console.log("Prénom : " + prenom);
            console.log("Nom : " + nom);
            console.log("Email : " + email);
            console.log("Mot de passe : " + password);
        });
    });
}

main();
