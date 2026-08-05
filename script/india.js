// Botões
const btnHistoria = document.getElementById("btnHistoria");
const btnTurismo = document.getElementById("btnTurismo");

// Modais
const modalHistoria = document.getElementById("modalHistoria");
const modalTurismo = document.getElementById("modalTurismo");

// Botões de fechar
const fecharHistoria = document.getElementById("fecharHistoria");
const fecharTurismo = document.getElementById("fecharTurismo");

// ===== Abrir Modais =====
btnHistoria.addEventListener("click", () => {
    modalHistoria.style.display = "flex";
});

btnTurismo.addEventListener("click", () => {
    modalTurismo.style.display = "flex";
});

// ===== Fechar Modais =====
fecharHistoria.addEventListener("click", () => {
    modalHistoria.style.display = "none";
});

fecharTurismo.addEventListener("click", () => {
    modalTurismo.style.display = "none";
});

// ===== Fechar clicando fora =====
window.addEventListener("click", (event) => {

    if (event.target === modalHistoria) {
        modalHistoria.style.display = "none";
    }

    if (event.target === modalTurismo) {
        modalTurismo.style.display = "none";
    }

});

// ===== Fechar com a tecla ESC =====
document.addEventListener("keydown", (event) => {

    if (event.key === "Escape") {
        modalHistoria.style.display = "none";
        modalTurismo.style.display = "none";
    }

});