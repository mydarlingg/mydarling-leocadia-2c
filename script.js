// =========================
// CONTROLE DO TAMANHO DO TEXTO
// =========================

const aumentarTexto = document.getElementById("aumentarTexto");
const diminuirTexto = document.getElementById("diminuirTexto");

let tamanhoTexto = 100;

aumentarTexto.addEventListener("click", () => {

    if (tamanhoTexto < 160) {
        tamanhoTexto += 10;
        document.documentElement.style.fontSize = `${tamanhoTexto}%`;
    }

});

diminuirTexto.addEventListener("click", () => {

    if (tamanhoTexto > 80) {
        tamanhoTexto -= 10;
        document.documentElement.style.fontSize = `${tamanhoTexto}%`;
    }

});


// =========================
// ALTO CONTRASTE
// =========================

const botaoContraste = document.getElementById("contraste");

botaoContraste.addEventListener("click", () => {

    document.body.classList.toggle("alto-contraste");

    const contrasteAtivado =
        document.body.classList.contains("alto-contraste");

    botaoContraste.setAttribute(
        "aria-pressed",
        contrasteAtivado
    );

    if (contrasteAtivado) {
        botaoContraste.textContent = "Contraste normal";
    } else {
        botaoContraste.textContent = "Alto contraste";
    }

});


// =========================
// LEITURA EM VOZ ALTA
// =========================

const lerTexto = document.getElementById("lerTexto");
const pararLeitura = document.getElementById("pararLeitura");
const conteudo = document.getElementById("conteudo");

let falaAtual = null;

lerTexto.addEventListener("click", () => {

    // Verifica se o navegador oferece síntese de voz
    if (!("speechSynthesis" in window)) {

        alert(
            "Desculpe, seu navegador não oferece suporte à leitura em voz alta."
        );

        return;
    }

    // Para uma leitura anterior
    window.speechSynthesis.cancel();

    const texto = conteudo.innerText;

    falaAtual = new SpeechSynthesisUtterance(texto);

    // Português do Brasil
    falaAtual.lang = "pt-BR";

    // Velocidade da leitura
    falaAtual.rate = 0.9;

    // Tom da voz
    falaAtual.pitch = 1;

    window.speechSynthesis.speak(falaAtual);
});


// =========================
// PARAR LEITURA
// =========================

pararLeitura.addEventListener("click", () => {

    if ("speechSynthesis" in window) {
        window.speechSynthesis.cancel();
    }

});


// =========================
// ACESSIBILIDADE DO BOTÃO
// =========================

botaoContraste.setAttribute("aria-pressed", "false");


// =========================
// TECLA ESC PARA PARAR A LEITURA
// =========================

document.addEventListener("keydown", (event) => {

    if (event.key === "Escape") {

        if ("speechSynthesis" in window) {
            window.speechSynthesis.cancel();
        }

    }

});
