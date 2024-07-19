"use strict";
// Définition de la classe Quote
class Quote {
    constructor(character, quote, episode) {
        this.character = character;
        this.quote = quote;
        this.episode = episode;
    }
}
// Tableau de citations
const arrayQuotes = [
    new Quote('Bohort', 'D\'après mes derniers renseignements, il serait tout à fait possible que le Graal ne soit ni un vase, ni une coupe, mais... un récipient.', 'Livre I, En forme de Graal'),
    new Quote('Perceval', 'Si Joseph d\'Arimathie a pas été trop con, vous pouvez être sûr que le Graal, c\'est un bocal à anchois.', 'Livre I, En forme de Graal'),
    new Quote('Grüdü', 'J\'ai rêvé qu\'il y avait des scorpions qui voulaient me piquer. En plus, y en avait un il était mi-ours, mi-scorpion et re mi-ours derrière !', 'Livre I, La queue d\'un scorpion'),
    new Quote('Angharad', 'Hé ben, si un jour j\'oublie que je suis boniche, vous serez gentil de me le rappeler !', 'Livre I, La romance de Lancelot'),
    new Quote('Yvain', 'Je refuse d\'aller me battre pour soutenir une politique d\'expansion territoriale dont je ne reconnais pas la légitimité.', 'Livre I, Le cas Yvain'),
    new Quote('Calogrenant', 'Quoi ? Vous voulez que j\'humilie ma terre natale pour une connerie d\'armure rouillée ?', 'Livre I, La jupe de Calogrenant'),
    new Quote('Arthur', 'Perceval le Gallois en tout cas tout le monde s\'accorde à dire que c\'est une tanche et ça, c\'est pas une légende !', 'Livre I, Le chevalier mystère'),
    new Quote('Arthur', 'Bon... Déjà il me tutoie, ça part mal. Virez moi ce con.', 'Livre I, Les défis de Merlin'),
    new Quote('Arthur', 'Je suis chef de guerre moi. Je suis pas là pour secouer des drapeaux et jouer de la trompette', 'Livre I, Codes et Stratégies'),
    new Quote('Arthur', 'Le prochain qui l\'ouvre, je l\'envoie aux galères pendant trois ans. Sans déconner je le fais.', 'Livre III, l\'Étudiant'),
    new Quote('Karadoc', 'Ca y est je vois trouble. C\'est le manque de gras je me dessèche !', 'Livre II, La restriction'),
    new Quote('Léodagan', 'Moi en général je réponds "merde". En principe, ça colle avec tout.', 'Livre IV, Tous les matins du monde'),
    new Quote('Perceval', 'Non "psychologique", c\'est tout ce qui est à la campagne non ?', 'Livre I, Unagi'),
    new Quote('Le Roi Burgonde', 'La fleur en bouquet fane... et jamais ne renaît !', 'Livre II, Le dialogue de Paix'),
    new Quote('Guethenoc', 'Je gueule je gueule, je pourrais gueuler dans le cul d\'un poney, ça serait pareil !', 'Livre II, La révolte'),
    new Quote('Roparzh', 'Je vais tellement si tant y taper sa gueule... qu\'il va décéder !', 'Livre II, Feue la vache de Roparzh'),
    new Quote('Le Roi Loth', 'Les mômes maintenant ils lisent, ils lisent, ils lisent et résultat : ils sont encore puceaux à dix ans...', 'Livre III, L\'assemblée des rois'),
    new Quote('Le Roi Loth', 'Je ne reviendrai plus jamais, cette fois je le dis, je le fais je reste chez moi, merde, ça suffit.', 'Livre III, L\'assemblée des rois'),
    new Quote('Le Roi Loth', 'Moi, ma femme, on peut dire qu\'une bonne partie du monde breton est passé dessus. Eh ben, je prends sur moi !', 'Livre IV, Loth et le Graal'),
    new Quote('Le Roi Loth', 'Bon, ça c\est bien gentil mais... À quel moment on trahit ?', 'Livre VI, Nuptiæ'),
    new Quote('Dame Séli', 'Y\'en a marre de se comporter comme des sagouins avec tout le monde sous prétexte qu\'on a des responsabilités !', 'Livre I, La tarte aux myrtilles'),
    new Quote('Dame Séli', 'Si les dieux avaient du être de notre côté, ils nous auraient pas refilé des enfants comme vous déjà !', 'Livre V, La roche et le Fer'),
    new Quote('Dame Séli', 'Oh non mais c\'est dingue cette histoire ! Mais s\'il a pas envie d\'aller aux pendaisons il fait ce qu\'il veut, mais qu\'il empêche pas les autres de s\'amuser !', 'Livre I, Létal'),
    new Quote('Merlin', 'Rendez-vous compte de la magnificence de ces colonnades ! L\'imposant ne le dispute-t-il pas à la majesté ?', 'Livre VI, Præceptores'),
    new Quote('Merlin', 'Faut vraiment que je mette de l\'ordre dans ce merdier. C\'est pas compliqué, on dirait ma piaule !', 'Livre III, La potion de vivacité'),
    new Quote('Le Maître d\'Armes', 'En garde ma biquette ! Je vais vous découper le gras du cul, ça vous fera ça de moins à trimballer !', 'Livre II, Excalibur et le Destin'),
    new Quote('Le Maître d\'Armes', 'Sire ! Mon père est peut-être unijambiste, mais moi, ma femme a pas de moustaches !', 'Livre I, Le Maître d\'Armes'),
    new Quote('Venec', 'Des bandits ?! Non...! Des gars futés !', 'Livre II, Les Tuteurs'),
    new Quote('Kadoc', 'Faut pas respirer de la compote, ça fait tousser.', 'Livre V, Le Destitué'),
    new Quote('Kadoc', 'Pour savoir si il va y avoir du vent, faut mettre son doigt dans le cul du coq.', 'Livre II, O\'Brother'),
    new Quote('Verinus', 'Moi comme j\'habite nulle part parce que je... Je me considère comme un papillon', 'Livre VI, Præceptores'),
    new Quote('Verinus', 'Pourquoi aux geôles ? Pourquoi aux geôles ?? Je suis en train de coopérer comme une petite salope !', "Livre VI, Præceptores"),
    new Quote('Gauvain', 'Seigneur Bohort, pouvons-nous nous retirer afin d\'aller prendre notre goûter ?', 'Livre II, Les Tuteurs'),
    new Quote('Goustant', 'Non, les enfants il faut les détester ! C\'est comme ça qu\'ils deviennent hargneux.', 'Livre I, Goustant le Cruel'),
    new Quote('Goustant', 'Non seulement je vais rester. Mais croyez-moi que je vais tâcher de crever le plus tard possible ! Peut-être même après vous deux !', 'Livre VI, Nuptiæ'),
    new Quote('César', 'On ne devient pas chef parce qu\'on le mérite andouille ! On devient chef par un concours de circonstances, on le mérite après !', 'Livre VI, Dux bellorum'),
    new Quote('La Dame du Lac', 'Ça vous ennuie si je pleure un tout petit peu ?', 'Livre IV, La Clandestine'),
    new Quote('Méléagant', 'Vous étiez perdant le jour-même de votre naissance. Voué aux offices secondaires, aux ambitions raisonnables.', 'Livre V, Jizô'),
    new Quote('Dame Cryda', 'Dit donc c\'est magique hein, le mariage. En trente secondes, on passe de fille de fermier à reine de Bretagne.', 'Livre III, Cryda de Tintagel'),
    new Quote('Dame Cryda', 'D\'ailleurs, on se faisait une réflexion amusante : c\'est vrai, autour de votre table ronde, y\'a pratiquement que des connards !', 'Livre IV, L\'Approbation'),
    new Quote('Lancelot', 'Non et puis si votre but c\'était de séduire les dames, fallait faire chevalier c\'est tout !', 'Livre I, L\'imposteur'),
    new Quote('Lancelot', 'Pour tout vous dire, je crois pas que ce soit bon pour mon autorité que mes soldats apprennent que je suis une grosse pucelle !', 'Livre IV, Les Novices'),
    new Quote('Perceval', 'C\'est marrant les petits bouts de fromage par terre ! C\est ça que vous appelez une fondue ?', 'Livre II, Séli et les rongeurs'),
    new Quote('Grüdü', 'Moi une fois j\'ai rêvé qu\il y a quelqu\'un qui venait me voir. Il arrive il me dit: "Vous avez jamais connu vos parents ?". Moi je lui dis "non". Et il me fait: "Bah vous inquitez pas, ils sont fromgers', 'Livre IV, Le Rêve d\'Ygerne'),
    new Quote('Perceval', 'Je crois que c\'est rentré par là, et c\'est ressorti par là ; et c\'est re-rentré par là, et c\'est RE-RE-SORTI PAR LA. ET NOUS ON S\'SAIGNE AUX QUATRE FROMAGES !!!', 'Livre V, Domi Nostræ'),
    new Quote('Perceval', 'Si on avait bu un coup dans des trucs qui s\'cassent, j\'en aurais pété un par terre avant d\'monter dans ma chambre, pour bien montrer comment j\'suis colère.', 'Livre V, La Promesse'),
    new Quote('Perceval', 'Mais moi, j\'m\'en fous des honneurs, rien à péter, le Graal aussi, rien à péter. Moi, c\'est Arthur qui compte. Moi je suis pas un as de la stratégie ou du tir à l\'arc, mais je peux me vanter de savoir ce que c\'est que d\'aimer quelqu\'un.', 'Livre IV, L\'Habitué'),
    new Quote('Merlin', 'J\'adore la chataîgne. Je m\'en ferais péter le bide. Vous en voulez ?', 'Livre I, La Blessure Mortelle'),
    new Quote('Kadoc', 'Dans trois jours, ma tata elle m\'emmène à la mer pour me noyer.', 'Livre IV, Le Paladin'),
    new Quote('Yvain', 'Ça pique trop de la vie, quoi : ça pique, ça lance, et derrière, comment ça re-pique trop.', 'Livre IV, La Blessure d\'Yvain'),
    new Quote('Dame Séli', 'C\'est des tartes dans le museau qu\'elles cherchent, les sœurs Tape-Dur ?', 'Livre V, L\'épée des Rois'),
    new Quote('Le Tavernier', 'La seule solution pour que ce soit encore plus sale, ça serait de demander aux clients de chier directement par terre ! Je vois que ça.', 'Livre V, L\'épée des Rois'),
    new Quote('Perceval', 'On va pas installer notre carré germinal à la taverne !', 'Livre V, L\'épée des Rois'),
    new Quote('Le Roi Loth', 'J\'ai soudain la sensation limpide d\'avoir gaspillé ma jeunesse... L\'avoir vue s\'échapper de mes mains comme l\'anguille effrayée et m\'appeler à présent sur le lierre du tombeau, où patiente depuis toujours le chant des enfants, les raisins volés…', 'Livre V, Les Dauphins'),
    new Quote('Le Roi Loth', 'Moi, après deux heures de retard, j\'ai passé le cap de l\'agacement. Le peu de volonté que j\'avais de me farcir une réunion avec ce débile de Dagonet a définitivement disparu. Je suis une sorte de meuble.', 'Livre V, Les Dauphins'),
    new Quote('Perceval', 'Si la mémoire est à la tête ce que le passé, peut-on y accéder à six ? Oui, non, zbradaraldjan ?', 'Livre V, Les recruteurs'),
    new Quote('Capito', 'Vous préférez monter dans la barque, maintenant, de plein gré, ou dans vingt secondes avec un coup de pompe dans l\'oignon ?', 'Livre VI, Centurio'),
    new Quote('Merlin', 'Quand je dis que Rome est à la Cité ce que la chèvre est au fromage de chèvre, je veux dire que c\'est le petit plus qui est corollaire au noyau mais qui est pas directement dans le cœur du fruit !', 'Livre VI, Præceptores'),
    new Quote('Bohort', 'Séchez vos larmes mon épousée, je m\'occupe d\'aller chercher ces petites salopes par la peau du fion !', 'Livre VI, Dux Bellorum'),
    new Quote('Perceval', 'Si ça se trouve c\'est bourré d\'oiseaux venimeux. Y\'en a des rouges, des jaunes, des re-rouges et des pourpres ! Y bouffent que des noisettes et des escalopes de veau. Et quand ils vous donnent un coup de bec vous voyez une grande lumière et ça vous donne la diarrhée !', 'Livre VI, Dux Bellorum'),
    new Quote('Le Roi Loth', 'Ah voilà ! Et c\'est là le danger de la métaphore... si on parle avec des gros tas de bidoches, au bout de cinq minutes personne ne parle de la même chose!', 'Livre VI, Nuptiæ'),
    new Quote('Manilius', 'J\'pensais à une chose, en toute amitié, un gros pain dans votre tête, ça serait de nature à vous convenir ?', 'Livre VI, Nuptiæ'),
    new Quote('Le Maître D\'Armes', 'Euh, juste une chose... Manquez encore une seule fois de respect au futur roi de Bretagne, et je vous coupe les boules ! Ca vous fera une jolie petite sacoche pour ranger vos dés à coudre.', 'Livre VI, Nuptiæ'),
    new Quote('Manilius', 'Désolé mais vous l\'avez chié votre mariage. Ce s\'rait rien si c\'était pas juste la deuxième fois.', 'Livre VI, Nuptiæ'),
    new Quote('Manilius', 'Ici y a un mec qui dit que quand tu manges que du basilic pendant trois jours, les lions, y refusent de te bouffer à cause du goût.', 'Livre VI, Arturi Inquisitio')
];
// Variables de jeu
let usedQuotes = new Set();
let score = 0;
let totalQuestions = 10;
let currentQuote = null;
// Sélection des éléments DOM
const containerElement = document.querySelector('.container');
const quoteElement = document.querySelector('.quote');
const choicesElements = document.querySelectorAll('.choice');
const scoreElement = document.querySelector('.score');
const startGameBtn = document.getElementById('startGameBtn');
const rules = document.querySelector('.rules');
// Fonctions utilitaires
function getRandomQuote(usedQuotes) {
    let randomIndex = Math.floor(Math.random() * arrayQuotes.length);
    while (usedQuotes.has(randomIndex)) {
        randomIndex = Math.floor(Math.random() * arrayQuotes.length);
    }
    usedQuotes.add(randomIndex);
    return arrayQuotes[randomIndex];
}
function shuffleArray(array) {
    return array.sort(() => Math.random() - 0.5);
}
function getRandomCharacters(characters, exclude, count) {
    const filteredCharacters = characters.filter(character => character !== exclude);
    const shuffledCharacters = shuffleArray(filteredCharacters);
    return shuffledCharacters.slice(0, count);
}
// Fonctions de logique de jeu
function updateQuoteAndChoices() {
    if (usedQuotes.size === totalQuestions) {
        endGame();
        return;
    }
    currentQuote = getRandomQuote(usedQuotes);
    quoteElement.innerHTML = `<p><i>${currentQuote.quote}</i></p>`;
    const characters = [...new Set(arrayQuotes.map(quote => quote.character))];
    const randomCharacters = getRandomCharacters(characters, currentQuote.character, 3);
    const shuffledChoices = shuffleArray([...randomCharacters, currentQuote.character]);
    choicesElements.forEach((choice, index) => {
        choice.textContent = shuffledChoices[index];
        choice.onclick = null;
        choice.addEventListener('click', handleChoiceClick);
    });
    enableChoiceButtons();
}
function handleChoiceClick(event) {
    const clickedChoice = event.target;
    disableChoiceButtons();
    choicesElements.forEach(button => {
        if (button.textContent === (currentQuote === null || currentQuote === void 0 ? void 0 : currentQuote.character)) {
            button.style.backgroundColor = 'green';
        }
        else {
            button.style.backgroundColor = 'red';
        }
    });
    if (clickedChoice.textContent === (currentQuote === null || currentQuote === void 0 ? void 0 : currentQuote.character)) {
        score++;
        quoteElement.style.backgroundColor = 'green';
    }
    else {
        quoteElement.style.backgroundColor = 'red';
    }
    quoteElement.innerHTML = `<p><i>${currentQuote === null || currentQuote === void 0 ? void 0 : currentQuote.quote}</i></p><p><strong>${currentQuote === null || currentQuote === void 0 ? void 0 : currentQuote.character}</strong>, ${currentQuote === null || currentQuote === void 0 ? void 0 : currentQuote.episode}</p>`;
    scoreElement.textContent = `Votre score est de : ${score}/${usedQuotes.size}`;
    setTimeout(() => {
        choicesElements.forEach(button => {
            button.style.backgroundColor = '';
        });
        quoteElement.style.backgroundColor = '';
        updateQuoteAndChoices();
    }, 2500);
}
function disableChoiceButtons() {
    choicesElements.forEach(button => {
        button.disabled = true;
    });
}
function enableChoiceButtons() {
    choicesElements.forEach(button => {
        button.disabled = false;
    });
}
function endGame() {
    let message = '';
    if (score < 5) {
        message = `<p>Fin du jeu. Votre score : ${score}/${totalQuestions}</p> <p>Il va falloir revoir toute la série !</p>`;
    }
    else if (score < 8) {
        message = `<p>Fin du jeu. Votre score : ${score}/${totalQuestions}</p> <p>Tu peux mieux faire, retourne regarder Kaamelott !</p>`;
    }
    else {
        message = `<p>Fin du jeu. Votre score : ${score}/${totalQuestions}</p> <p>Parfait ! Tu es un pro de Kaamelott</p>`;
    }
    // Injecter le message de fin du jeu dans containerElement
    containerElement.innerHTML = message;
    // Appeler la fonction pour afficher le bouton "Retour à l'accueil"
    returnHome();
}
function returnHome() {
    // Création du bouton "Retour à l'accueil"
    const btnHome = `<button id="returnHomeBtn">Retour à l'accueil</button>`;
    // Ajout du bouton à containerElement sans écraser le contenu existant
    containerElement.insertAdjacentHTML('beforeend', btnHome);
    // Écouteur d'événement sur le bouton "Retour à l'accueil"
    const returnHomeBtn = document.getElementById('returnHomeBtn');
    returnHomeBtn.addEventListener('click', redirectToHome);
}
function redirectToHome() {
    // Redirection vers la page d'accueil
    window.location.href = "https://kaamelott-citations-jeux.netlify.app/";
}
function startGame() {
    console.log('Le jeu commence !');
    usedQuotes.clear();
    score = 0;
    scoreElement.textContent = `Votre score est de : ${score}/0`;
    startGameBtn.style.display = 'none';
    rules.style.display = 'none';
    containerElement.style.display = 'flex';
    updateQuoteAndChoices();
}
// Initialisation et lancement du jeu
document.addEventListener('DOMContentLoaded', () => {
    console.log('Le document est complètement chargé.');
    startGameBtn.addEventListener('click', startGame);
});
