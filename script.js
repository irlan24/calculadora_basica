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

/* DESENVOLVIMENTO DOS TEMAS */
    let container = document.querySelector('.container')
    let nav = document.querySelector('nav')
    let footer = document.querySelector('footer')
    let h1 = document.querySelector('h1')
    let tabela = document.querySelector('table')
    

function tema2(){
    
    container.style.backgroundColor = "#206343d2"
    nav.style.backgroundColor = "#206343d2"
    footer.style.backgroundColor = "#206343d2"
    h1.style.color = '#206343d2'
    tabela.style.backgroundColor = '#4AE89Bc0'
    
}
function tema1(){
    container.style.backgroundColor = "#526d70d2"
    nav.style.backgroundColor = "#526d70d2"
    footer.style.backgroundColor = "#526d70d2"
    h1.style.color = '#526d70d2'
    tabela.style.backgroundColor = '#6ce9fac0'
}