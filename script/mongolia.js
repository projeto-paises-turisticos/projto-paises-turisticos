const btnHistoria = document.getElementById("btnHistoria");
const btnTurismo = document.getElementById("btnTurismo");

const modalHistoria = document.getElementById("modalHistoria");
const modalTurismo = document.getElementById("modalTurismo");

const fecharHistoria = document.getElementById("fecharHistoria");
const fecharTurismo = document.getElementById("fecharTurismo");


function abrirModal(modal){
    modal.style.display = "flex";
    document.body.style.overflow = "hidden";
}

function fecharModal(modal){
    modal.style.display = "none";
    document.body.style.overflow = "auto";
}

// BOTÕES 

btnHistoria.addEventListener("click", () => {
    abrirModal(modalHistoria);
});

btnTurismo.addEventListener("click", () => {
    abrirModal(modalTurismo);
});


fecharHistoria.addEventListener("click", () => {
    fecharModal(modalHistoria);
});

fecharTurismo.addEventListener("click", () => {
    fecharModal(modalTurismo);
});


window.addEventListener("click", (e) => {

    if(e.target === modalHistoria){
        fecharModal(modalHistoria);
    }

    if(e.target === modalTurismo){
        fecharModal(modalTurismo);
    }

});

/* ---------- TECLA ESC ---------- */

document.addEventListener("keydown", (e) => {

    if(e.key === "Escape"){

        fecharModal(modalHistoria);
        fecharModal(modalTurismo);

    }

});

/* ---------- ANIMAÇÃO DOS CARDS ---------- */

const cards = document.querySelectorAll(".card");

const observador = new IntersectionObserver((entradas)=>{

    entradas.forEach((entrada)=>{

        if(entrada.isIntersecting){

            entrada.target.style.opacity = "1";
            entrada.target.style.transform = "translateY(0)";

        }

    });

},{
    threshold:0.2
});

cards.forEach((card)=>{

    card.style.opacity = "0";
    card.style.transform = "translateY(40px)";
    card.style.transition = "all .8s ease";

    observador.observe(card);

});

// ANIMAÇÃO DA IMAGEM 

const imagem = document.querySelector(".hero-imagem img");

imagem.addEventListener("mousemove",(e)=>{

    const x = (e.offsetX / imagem.clientWidth - 0.5) * 10;
    const y = (e.offsetY / imagem.clientHeight - 0.5) * 10;

    imagem.style.transform =
        `perspective(1000px) rotateY(${x}deg) rotateX(${-y}deg) scale(1.03)`;

});

imagem.addEventListener("mouseleave",()=>{

    imagem.style.transform =
        "perspective(1000px) rotateY(0deg) rotateX(0deg) scale(1)";

});

// BOTÕES 

const botoes = document.querySelectorAll("button");

botoes.forEach((botao)=>{

    botao.addEventListener("mouseenter",()=>{

        botao.style.letterSpacing = "1px";

    });

    botao.addEventListener("mouseleave",()=>{

        botao.style.letterSpacing = "0px";

    });

});

// SCROLL SUAVE

document.querySelector('a[href="/index.html"]').addEventListener("click",()=>{

    window.scrollTo({
        top:0,
        behavior:"smooth"
    });

});