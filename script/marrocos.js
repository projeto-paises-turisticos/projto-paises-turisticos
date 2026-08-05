// Botões
const btnHistoria = document.getElementById("btnHistoria");
const btnTurismo = document.getElementById("btnTurismo");

// Modais
const modalHistoria = document.getElementById("modalHistoria");
const modalTurismo = document.getElementById("modalTurismo");

// Botões de fechar
const fecharHistoria = document.getElementById("fecharHistoria");
const fecharTurismo = document.getElementById("fecharTurismo");

// Abrir modal História
btnHistoria.addEventListener("click", function () {
    modalHistoria.style.display = "flex";
});

// Abrir modal Turismo
btnTurismo.addEventListener("click", function () {
    modalTurismo.style.display = "flex";
});

// Fechar modal História
fecharHistoria.addEventListener("click", function () {
    modalHistoria.style.display = "none";
});

// Fechar modal Turismo
fecharTurismo.addEventListener("click", function () {
    modalTurismo.style.display = "none";
});

// Fechar clicando fora do modal
window.addEventListener("click", function (event) {
    if (event.target === modalHistoria) {
        modalHistoria.style.display = "none";
    }

    if (event.target === modalTurismo) {
        modalTurismo.style.display = "none";
    }
});

// Fechar com ESC
document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
        modalHistoria.style.display = "none";
        modalTurismo.style.display = "none";
    }
});