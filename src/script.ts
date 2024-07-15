﻿// Définition de la classe Quote
class Quote {
    constructor(
        public character: string,
        public quote: string,
        public episode: string
    ) {}
}

// Tableau de citations
const arrayQuotes: Quote[] = [
    new Quote(
        'Bohort',
        'D\'après mes derniers renseignements, il serait tout à fait possible que le Graal ne soit ni un vase, ni une coupe, mais... un récipient.',
        'Livre I, En forme de Graal'
    ),
    new Quote(
        'Perceval',
        'Si Joseph d\'Arimathie a pas été trop con, vous pouvez être sûr que le Graal, c\'est un bocal à anchois.',
        'Livre I, En forme de Graal'
    ),
    new Quote(
        'Grüdü',
        'J\'ai rêvé qu\'il y avait des scorpions qui voulaient me piquer. En plus, y en avait un il était mi-ours, mi-scorpion et re mi-ours derrière !',
        'Livre I, La queue d\'un scorpion'
    ),
    new Quote(
        'Angharad',
        'Hé ben, si un jour j\'oublie que je suis boniche, vous serez gentil de me le rappeler !',
        'Livre I, La romance de Lancelot'
    ),
    new Quote(
        'Yvain',
        'Je refuse d\'aller me battre pour soutenir une politique d\'expansion territoriale dont je ne reconnais pas la légitimité.',
        'Livre I, Le cas Yvain'
    ),
    new Quote(
        'Calogrenant',
        'Quoi ? Vous voulez que j\'humilie ma terre natale pour une connerie d\'armure rouillée ?',
        'Livre I, La jupe de Calogrenant'
    ),
    new Quote(
        'Arthur',
        'Perceval le Gallois en tout cas tout le monde s\'accorde à dire que c\'est une tanche et ça, c\'est pas une légende !',
        'Livre I, Le chevalier mystère'
    ),
    new Quote(
        'Arthur',
        'Bon... Déjà il me tutoie, ça part mal. Virez moi ce con.',
        'Livre I, Les défis de Merlin'
    ),
    new Quote(
        'Karadoc',
        'Ca y est je vois trouble. C\'est le manque de gras je me dessèche !',
        'Livre II, La restriction'
    ),
    new Quote(
        'Léodagan',
        'Moi en général je réponds "merde". En principe, ça colle avec tout.',
        'Livre IV, Tous les matins du monde'
    ),
    new Quote(
        'Perceval',
        'Non "psychologique", c\'est tout ce qui est à la campagne non ?',
        'Livre I, Unagi'
    ),
    new Quote(
        'Le Roi Burgonde',
        'La fleur en bouquet fane... et jamais ne renaît !',
        'Livre II, Le dialogue de Paix'
    ),
    new Quote(
        'Guethenoc',
        'Je gueule je gueule, je pourrais gueuler dans le cul d\'un poney, ça serait pareil !',
        'Livre II, La révolte'
    ),
    new Quote(
        'Roparzh',
        'Je vais tellement si tant y taper sa gueule... qu\'il va décéder !',
        'Livre II, Feue la vache de Roparzh'
    ),
    new Quote(
        'Le Roi Loth',
        'Les mômes maintenant ils lisent, ils lisent, ils lisent et résultat : ils sont encore puceaux à dix ans...',
        'Livre III, L\'assemblée des rois'
    ),
    new Quote(
        'Le Roi Loth',
        'Je ne reviendrai plus jamais, cette fois je le dis, je le fais je reste chez moi, merde, ça suffit.',
        'Livre III, L\'assemblée des rois'
    ),
    new Quote(
        'Le Roi Loth',
        'Moi, ma femme, on peut dire qu\'une bonne partie du monde breton est passé dessus. Eh ben, je prends sur moi !',
        'Livre IV, Loth et le Graal'    
    )
];

function getRandomQuote(usedQuotes: Set<number>): Quote {
    let randomIndex = Math.floor(Math.random() * arrayQuotes.length);
    while (usedQuotes.has(randomIndex)) {
        randomIndex = Math.floor(Math.random() * arrayQuotes.length);
    }
    usedQuotes.add(randomIndex);
    return arrayQuotes[randomIndex];
}

function shuffleArray<T>(array: T[]): T[] {
    return array.sort(() => Math.random() - 0.5);
}

let usedQuotes: Set<number> = new Set();
let score: number = 0;
let totalQuestions: number = 10;
let currentQuote: Quote | null = null;

const containerElement: HTMLElement = document.querySelector('.container') as HTMLElement;
const quoteElement: HTMLElement = document.querySelector('.quote') as HTMLElement;
const choicesElements: NodeListOf<HTMLButtonElement> = document.querySelectorAll('.choice') as NodeListOf<HTMLButtonElement>;
const scoreElement: HTMLElement = document.querySelector('.score') as HTMLElement;
const startGameBtn: HTMLButtonElement = document.getElementById('startGameBtn') as HTMLButtonElement;
const rules: HTMLElement = document.querySelector('.rules') as HTMLElement;

function updateQuoteAndChoices(): void {
    if (usedQuotes.size === totalQuestions) {
        let message: string = '';
        if (score < 5) {
            message = `<p>Fin du jeu. Votre score : ${score}/${totalQuestions}</p> <p>Il va falloir revoir toute la série !</p>`;
        } else if (score < 8) {
            message = `<p>Fin du jeu. Votre score : ${score}/${totalQuestions}</p> <p>Tu peux mieux faire, retourne regarder Kaamelott !</p>`;
        } else {
            message = `<p>Fin du jeu. Votre score : ${score}/${totalQuestions}</p> <p>Parfait ! Tu es un pro de Kaamelott</p>`;
        }
        message += `<button id="startGameBtn">Recommencer</button>`;
        containerElement.innerHTML = message;

        // Réinitialisation pour recommencer le jeu
        startGameBtn.addEventListener('click', startGame);
        return;
    }

    currentQuote = getRandomQuote(usedQuotes);
    quoteElement.innerHTML = `<p><i>${currentQuote.quote}</i></p>`;

    const characters: string[] = [...new Set(arrayQuotes.map(quote => quote.character))];
    characters.splice(characters.indexOf(currentQuote.character), 1);

    const shuffledChoices: string[] = shuffleArray([...characters.slice(0, 3), currentQuote.character]);
    choicesElements.forEach((choice, index) => {
        choice.textContent = shuffledChoices[index];
        choice.onclick = null;
        choice.addEventListener('click', handleChoiceClick);
    });
}

function handleChoiceClick(event: MouseEvent): void {
    const clickedChoice: HTMLButtonElement = event.target as HTMLButtonElement;

    // Définir les boutons corrects et incorrects
    choicesElements.forEach(button => {
        if (button.textContent === currentQuote?.character) {
            button.style.backgroundColor = 'green';
        } else {
            button.style.backgroundColor = 'red';
        }
    });

    // Mettre à jour le score et l'affichage de la citation
    if (clickedChoice.textContent === currentQuote?.character) {
        score++;
        quoteElement.style.backgroundColor = 'green';
    } else {
        quoteElement.style.backgroundColor = 'red';
    }
    
    quoteElement.innerHTML = `<p><i>${currentQuote?.quote}</p></i><p><strong>${currentQuote?.character}</strong>, ${currentQuote?.episode}</p>`;
    scoreElement.textContent = `Votre score est de : ${score}/${usedQuotes.size}`;

    // Réinitialiser les styles après 2,5 secondes
    setTimeout(() => {
        choicesElements.forEach(button => {
            button.style.backgroundColor = '';
        });
        quoteElement.style.backgroundColor = '';
        updateQuoteAndChoices();
    }, 2500); 
}

function startGame(): void {
    console.log('Le jeu commence !');

    usedQuotes.clear();
    score = 0;
    scoreElement.textContent = `Votre score est de : ${score}/0`;
    startGameBtn.style.display = 'none';
    rules.style.display = 'none';
    containerElement.style.display = 'flex';
    updateQuoteAndChoices();
}

document.addEventListener('DOMContentLoaded', () => {
    console.log('Le document est complètement chargé.');

    startGameBtn.addEventListener('click', startGame);
});