function tocaSomBuzina(){
    document.querySelector("#som_tecla_buzina").play();
}    
    const listaDeTeclas = document.querySelectorAll(".tecla");
    listaDeTeclas[0].onclick = tocaSomBuzina;

function tocaSomAlarme(){
    document.querySelector("#som_tecla_alarme").play();   
}
    const listaDeTeclas = document.querySelectorAll(".tecla");
    listaDeTeclas[1].onclick = tocaSomAlarme;