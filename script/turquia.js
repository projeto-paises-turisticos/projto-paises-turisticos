const btnHistoria = document.getElementById("btnHistoria");
const btnTurismo = document.getElementById("btnTurismo");

const modalHistoria = document.getElementById("modalHistoria");
const modalTurismo = document.getElementById("modalTurismo");

const fechar = document.querySelectorAll(".fechar");


// Abrir modais
btnHistoria.onclick = () => {
    modalHistoria.style.display = "flex";
};

btnTurismo.onclick = () => {
    modalTurismo.style.display = "flex";
};

// Fechar ao clicar no X
fechar.forEach(botao => {
    botao.onclick = () => {
        modalHistoria.style.display = "none";
        modalTurismo.style.display = "none";
    };
});

// Fechar clicando fora do modal
window.onclick = (e) => {
    if(e.target == modalHistoria){
        modalHistoria.style.display = "none";
    }

    if(e.target == modalTurismo){
        modalTurismo.style.display = "none";
    }
};