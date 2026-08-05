const btnHistoria = document.getElementById("btnHistoria");
const btnTurismo = document.getElementById("btnTurismo");

const modalHistoria = document.getElementById("modalHistoria");
const modalTurismo = document.getElementById("modalTurismo");

const fecharHistoria = document.getElementById("fecharHistoria");
const fecharTurismo = document.getElementById("fecharTurismo");

// Abrir os modais
btnHistoria.onclick = function () {
    modalHistoria.style.display = "flex";
};

btnTurismo.onclick = function () {
    modalTurismo.style.display = "flex";
};

// Fechar pelos botões X
fecharHistoria.onclick = function () {
    modalHistoria.style.display = "none";
};

fecharTurismo.onclick = function () {
    modalTurismo.style.display = "none";
};

// Fechar clicando fora
window.onclick = function (event) {

    if (event.target == modalHistoria) {
        modalHistoria.style.display = "none";
    }

    if (event.target == modalTurismo) {
        modalTurismo.style.display = "none";
    }

};