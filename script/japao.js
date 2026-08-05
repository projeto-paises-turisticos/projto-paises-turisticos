const btnHistoria = document.getElementById("btnHistoria");
const btnTurismo = document.getElementById("btnTurismo");

const modalHistoria = document.getElementById("modalHistoria");
const modalTurismo = document.getElementById("modalTurismo");

const fecharHistoria = document.getElementById("fecharHistoria");
const fecharTurismo = document.getElementById("fecharTurismo");

// Abrir modais
btnHistoria.onclick = () => {
    modalHistoria.style.display = "flex";
};

btnTurismo.onclick = () => {
    modalTurismo.style.display = "flex";
};

// Fechar pelos botões X
fecharHistoria.onclick = () => {
    modalHistoria.style.display = "none";
};

fecharTurismo.onclick = () => {
    modalTurismo.style.display = "none";
};

// Fechar clicando fora
window.onclick = (e) => {
    if (e.target == modalHistoria) {
        modalHistoria.style.display = "none";
    }

    if (e.target == modalTurismo) {
        modalTurismo.style.display = "none";
    }
};