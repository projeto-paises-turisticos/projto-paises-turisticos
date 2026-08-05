const btnHistoria = document.getElementById("btnHistoria");
const btnTurismo = document.getElementById("btnTurismo");

const modalHistoria = document.getElementById("modalHistoria");
const modalTurismo = document.getElementById("modalTurismo");

const fecharHistoria = document.getElementById("fecharHistoria");
const fecharTurismo = document.getElementById("fecharTurismo");

// Abrir modal História
btnHistoria.onclick = function () {
    modalHistoria.style.display = "flex";
};

// Abrir modal Turismo
btnTurismo.onclick = function () {
    modalTurismo.style.display = "flex";
};

// Fechar modal História
fecharHistoria.onclick = function () {
    modalHistoria.style.display = "none";
};

// Fechar modal Turismo
fecharTurismo.onclick = function () {
    modalTurismo.style.display = "none";
};

// Fechar ao clicar fora do modal
window.onclick = function (event) {

    if (event.target == modalHistoria) {
        modalHistoria.style.display = "none";
    }

    if (event.target == modalTurismo) {
        modalTurismo.style.display = "none";
    }

};