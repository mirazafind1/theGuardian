/* --
déclaration et affectation des variables contenant les données ou les options
--*/
const cheminSVG = "svg/QUARTILE_VE.svg";

/* --
déclaration des variables globales
--*/
let conteneurSVG;


/* --
déclaration des fonctions classiques
--*/
function chargerSVG() {
    Snap.load(cheminSVG, function (contenuSVG) {
        conteneurSVG.append(contenuSVG); // ajout du SVG au conteneur

        const QR1_VE = conteneurSVG.select("#QR1_VE");
        const QR2_VE = conteneurSVG.select("#QR2_VE");
        const QR3_VE = conteneurSVG.select("#QR3_VE");

        // Cacher les éléments de nombre
        const QR1_NB_VE = conteneurSVG.select("#QR1_NB_VE");
        const QR2_NB_VE = conteneurSVG.select("#QR2_NB_VE");
        const QR3_NB_VE = conteneurSVG.select("#QR3_NB_VE");

        QR1_NB_VE.attr({ display: 'none' });
        QR2_NB_VE.attr({ display: 'none' });
        QR3_NB_VE.attr({ display: 'none' });

        // faire sauter les boules
        function faireSauter(element) {
            element.animate({ transform: 't0,-10' }, 300, mina.easeinout);
            setTimeout(() => {
                element.animate({ transform: 't0,0' }, 300, mina.easeinout);
            }, 300);
        }

        // Commencer le saut
        function demarrerSaut(element) {
            return setInterval(() => faireSauter(element), 1000);
        }

        // Gérer le survol de chaque élément
        function gererSurvol(element, nombreElement) {
            let interval = demarrerSaut(element);

            element.hover(
                () => {
                    clearInterval(interval); // pour arrêter le sut
                    nombreElement.attr({ display: 'block' }); // afficher le nombre
                },
                () => {
                    interval = demarrerSaut(element); // reprend le saut
                    nombreElement.attr({ display: 'none' }); // masque le nombre
                }
            );
        }

        // Appliquer aux trois éléments
        gererSurvol(QR1_VE, QR1_NB_VE);
        gererSurvol(QR2_VE, QR2_NB_VE);
        gererSurvol(QR3_VE, QR3_NB_VE);
    });
}

/* --
déclaration des fonctions de callback
--*/
function init() {
    conteneurSVG = Snap("#svg-quartiles");
    chargerSVG();
}


window.addEventListener("load", init);