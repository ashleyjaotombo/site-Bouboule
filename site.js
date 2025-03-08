function main() {
    document.addEventListener("DOMContentLoaded", function() {
        let gif = document.getElementById("cadeau");
        let bouton = document.getElementById("acheter");
        let depart = 0;
        let fin = window.innerHeight - gif.offsetHeight + 310;
        let duration = 500;
        let startTime = null;
        let compteurElement = document.getElementById("banger");
        let compteurPanierElement = document.getElementById("compteurPanier");
        let listePanierElement = document.getElementById("listePanier");
        let totalPrixElement = document.getElementById("totalPrix");
        let prixUnitaire = 2468.76;
        let totalPrix = 0;

        gif.style.position = "absolute";
        gif.style.top = depart + "px";
        gif.style.opacity = '0';

        function animate(time) {
            if (!startTime) {
                startTime = time;
            }
            let tempsecoule = time - startTime;
            let progress = tempsecoule / duration;
            let Posactuel = depart + progress * (fin - depart);

            gif.style.top = Posactuel + "px";
            gif.style.opacity = '1';

            if (progress < 1) {
                requestAnimationFrame(animate);
            } else {
                gif.style.opacity = '0';
                let compteur = parseInt(compteurElement.textContent);
                compteurElement.textContent = compteur + 1;
                let compteurPanier = parseInt(compteurPanierElement.textContent) || 0;
                compteurPanierElement.textContent = compteurPanier + 1;

                let produitNom = "Boulebille";
                let li = document.createElement("li");
                li.textContent = produitNom;
                listePanierElement.appendChild(li);


            }
        }

        bouton.addEventListener("click", function() {
            startTime = null;
            gif.style.top = depart + "px";
            requestAnimationFrame(animate);
        });

        window.addEventListener('resize', function() {
            fin = window.innerHeight - gif.offsetHeight;
        });

        listePanierElement.addEventListener("click", function(event) {
            if (event.target.tagName === "LI") {
                event.target.remove();
                let compteurPanier = listePanierElement.getElementsByTagName("li").length;
                compteurPanierElement.textContent = compteurPanier;


            }
        });
    });
}

main();
