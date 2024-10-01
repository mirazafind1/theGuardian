/* -- 
déclaration et affectation des variables contenant les données ou les options 
-- */
const svgFilePath1 = "svg/visuel_VEVT.svg";

/* -- 
déclaration des variables globales 
-- */
let s;

/* -- 
déclaration des fonctions de callback 
-- */
function loadSVG1() {
    Snap.load(svgFilePath1, function (affichage) {
        s.append(affichage); // Ajoute le contenu SVG chargé au conteneur sélectionné

        // sélection VE_2024, VE_2023, et VE_2022
        const VE_2024 = s.select("#VE_2024");
        const VE_2023 = s.select("#VE_2023");
        const VE_2022 = s.select("#VE_2022");

        // sélection pourcentage
        const PR6 = s.select("#PR6");
        const PR4 = s.select("#PR4");
        const PR3 = s.select("#PR3");

        // masquer pourcentage
        PR6.attr({ display: 'none' });
        PR4.attr({ display: 'none' });
        PR3.attr({ display: 'none' });

        // pour afficher pourcentages
        function showPercentage(percentageElement) {
            percentageElement.attr({ display: 'block' }); // affiche pourcentage
        }

        // masquer à nouveau
        function hidePercentage(percentageElement) {
            percentageElement.attr({ display: 'none' }); // masquer l'élément
        }

        // fonction pour agrandir les trois éléments et afficher les pourcentages
        function onHoverIn(event) {
            const targetId = event.target.id;
            switch(targetId) {
                case 'VE_2024':
                    VE_2024.animate({ transform: 's1.2,1.2' }, 300);
                    showPercentage(PR6);
                    break;
                case 'VE_2023':
                    VE_2023.animate({ transform: 's1.2,1.2' }, 300);
                    showPercentage(PR4);
                    break;
                case 'VE_2022':
                    VE_2022.animate({ transform: 's1.2,1.2' }, 300);
                    showPercentage(PR3);
                    break;
            }
        }

        // fonction pour revenir à la taille de base et masquer les pourcentages
        function onHoverOut(event) {
            const targetId = event.target.id;
            switch(targetId) {
                case 'VE_2024':
                    VE_2024.animate({ transform: 's1,1' }, 300);
                    hidePercentage(PR6);
                    break;
                case 'VE_2023':
                    VE_2023.animate({ transform: 's1,1' }, 300);
                    hidePercentage(PR4);
                    break;
                case 'VE_2022':
                    VE_2022.animate({ transform: 's1,1' }, 300);
                    hidePercentage(PR3);
                    break;
            }
        }

        // ajout événements de survol à chaque élément
        VE_2024.hover(onHoverIn, onHoverOut);
        VE_2023.hover(onHoverIn, onHoverOut);
        VE_2022.hover(onHoverIn, onHoverOut);
    });
}


window.onload = function() {
    s = Snap("#svg-pourcentages");
    loadSVG1();
};







