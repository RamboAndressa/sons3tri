function tocaSomBuzina(){
    document.querySelector("#som_tecla_buzina").play();
}    
    const listaDeTeclas = document.querySelectorAll(".tecla");

    let contador = 0;
    while(contador < 9) {
        listaDeTeclas[contador].onclick = tocaSomBuzina
        contador = contador + 1;
        console.log(contador) ;
    }
