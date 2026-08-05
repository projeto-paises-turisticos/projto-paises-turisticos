const btnHistoria = document.getElementById("btnHistoria");
const btnTurismo = document.getElementById("btnTurismo");

const modalHistoria = document.getElementById("modalHistoria");
const modalTurismo = document.getElementById("modalTurismo");

const fecharHistoria = document.getElementById("fecharHistoria");
const fecharTurismo = document.getElementById("fecharTurismo");

// Abrir modal História
btnHistoria.addEventListener("click", () => {
    modalHistoria.style.display = "block";
});

// Abrir modal Turismo
btnTurismo.addEventListener("click", () => {
    modalTurismo.style.display = "block";
});

// Fechar modal História
fecharHistoria.addEventListener("click", () => {
    modalHistoria.style.display = "none";
});

// Fechar modal Turismo
fecharTurismo.addEventListener("click", () => {
    modalTurismo.style.display = "none";
});

// Fechar ao clicar fora do modal
window.addEventListener("click", (e) => {
    if (e.target === modalHistoria) {
        modalHistoria.style.display = "none";
    }

    if (e.target === modalTurismo) {
        modalTurismo.style.display = "none";
    }
});