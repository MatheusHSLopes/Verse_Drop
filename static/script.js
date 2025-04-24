let verses = [];  // Lista onde vamos guardar os versículos

// Quando a página carregar, buscamos os versículos da API
fetch("/api/verses")
    .then(res => res.json())           // Convertendo o retorno em JSON
    .then(data => {
        verses = data;                // Salvamos os versículos
        getRandomVerse();            // Mostramos o primeiro
    });

// Função que sorteia e exibe um versículo


//Animação da gota caindo
function animateDrop() {
    const drop = document.getElementById('drop');
    drop.style.animation = 'none'; // reset
    drop.offsetHeight; // força reflow
    drop.style.animation = 'fall 1s ease-out';
}

function getRandomVerse() {
    if (verses.length === 0) return;

    // Escolhe um versículo aleatório
    const verse = verses[Math.floor(Math.random() * verses.length)];

    // Atualiza o conteúdo HTML
    document.getElementById("reference").innerText = `${verse.book} ${verse.chapter}:${verse.verse}`;
    document.getElementById("verse-text").innerText = verse.text;
    
    animateDrop()
  
//Som de Gota

function animateDrop() {
    const drop = document.getElementById('drop');
    const dropSound = document.getElementById('drop-sound');

    // Reinicia e toca o som
    dropSound.pause();            // pausa se estiver tocando
    dropSound.currentTime = 0;    // volta pro início
    dropSound.volume = 0.4;       // controla volume fixo
    dropSound.play();

    // Recomeça a animação
    drop.style.animation = 'none';
    drop.offsetHeight; // força reflow
    drop.style.animation = 'fall 1s ease-out';
}
}