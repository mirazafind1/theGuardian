/* --
déclaration et affectation des variables contenant les données ou les options
--*/
const svgFilePath2 = "svg/estimation_2030.svg";

/* -- 
déclaration des variables globales 
-- */
let s2;

/* -- 
déclaration des fonctions de callback 
-- */
// Fonction de callback pour charger le fichier SVG pour l'estimation
function loadSVG2() {
    Snap.load(svgFilePath2, function (affichage) {
        s2.append(affichage); //ajout du SVG au conteneur

        const estLegVe = s2.select("#EST_LEG_VE");
        const estVe = s2.select("#EST_VE");
        const estLegVt = s2.select("#EST_LEG_VT");
        const estVt = s2.select("#EST_VT");

        // affiche les 2 graphiques (VE et VT)
        estVe.attr({ display: 'block' });
        estVt.attr({ display: 'block' });

        // pour clir de EST_LEG_VE
        estLegVe.click(function() {
            if (estVe.attr("display") === "block") {
                estLegVe.animate({ opacity: 0.5 }, 300); // met opacité à 50%
                estVe.attr({ display: 'none' }); // masque VE
            } else {
                estLegVe.animate({ opacity: 1 }, 300); // met opacité à 100%
                estVe.attr({ display: 'block' }); // affiche VE
            }
        });

        // pour clic de EST_LEG_VT
        estLegVt.click(function() {
            if (estVt.attr("display") === "block") {
                estLegVt.animate({ opacity: 0.5 }, 300); // met opacité à 50%
                estVt.attr({ display: 'none' }); // masque VT
            } else {
                estLegVt.animate({ opacity: 1 }, 300); // met opacité à 100%
                estVt.attr({ display: 'block' }); // affiche VT
            }
        });
    });
}


function init() {
    s2 = Snap("#svg-estimation");
    loadSVG2();
}

window.addEventListener("load", init);