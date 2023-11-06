function tocaSom(idElementoAuio){
    document.querySelector(idElementoAuio).play();
}    
    const listaDeTeclas = document.querySelectorAll(".tecla");

    let contador = 0;
    while(contador < listaDeTeclas.length){
        const efeito = listaDeTeclas[contador].classList[1];
        const idAuio = "#som_"+efeito;
        listaDeTeclas[contador].onclick = function (){
            tocaSom(idAuio)
        }
        contador = contador + 1;
    }
