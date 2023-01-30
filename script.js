let visor = document.querySelector('.visor')


function numb(num) {
    visor.innerHTML += num
}

function clean(){
    visor.innerHTML = ''
}

function delet(){
    let resultado = visor.innerHTML
    visor.innerHTML = resultado.substr(0, resultado.length -1)
    
}

function operador(op){
    visor.innerHTML += op
}

function res(){

    visor.innerHTML = eval(visor.innerHTML)
}
