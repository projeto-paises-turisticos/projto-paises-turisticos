// Botões
const btnHistoria = document.getElementById("btnHistoria");
const btnCuriosidades = document.getElementById("btnCuriosidades");

// Modais
const modalHistoria = document.getElementById("modalHistoria");
const modalCuriosidades = document.getElementById("modalCuriosidades");

// Botões de fechar
const fecharHistoria = document.getElementById("fecharHistoria");
const fecharCuriosidades = document.getElementById("fecharCuriosidades");

// Abrir modal História
btnHistoria.addEventListener("click", () => {
    modalHistoria.style.display = "flex";
});

// Abrir modal Curiosidades
btnCuriosidades.addEventListener("click", () => {
    modalCuriosidades.style.display = "flex";
});

// Fechar modal História
fecharHistoria.addEventListener("click", () => {
    modalHistoria.style.display = "none";
});

// Fechar modal Curiosidades
fecharCuriosidades.addEventListener("click", () => {
    modalCuriosidades.style.display = "none";
});

// Fechar ao clicar fora do modal
window.addEventListener("click", (event) => {

    if (event.target === modalHistoria) {
        modalHistoria.style.display = "none";
    }

    if (event.target === modalCuriosidades) {
        modalCuriosidades.style.display = "none";
    }

});

// Fechar ao pressionar ESC
document.addEventListener("keydown", (event) => {

    if (event.key === "Escape") {
        modalHistoria.style.display = "none";
        modalCuriosidades.style.display = "none";
    }

});