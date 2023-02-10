let visor = document.querySelector('.visor')
let container = document.querySelector('.container')
let nav = document.querySelector('nav')
let footer = document.querySelector('footer')
let h1 = document.querySelector('h1')
let tabela = document.querySelector('table')
let botao = document.querySelectorAll('.destaque')


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
    
    
function tema2(){
    let visor2 = document.querySelector('.visor')
    container.style.backgroundColor = "#206343d2"   // cor do container
    nav.style.backgroundColor = "#206343d2"     // cor do Nav
    footer.style.backgroundColor = "#206343d2"  // Cor do footer
    h1.style.color = '#206343d2'        // Cor do H1
    tabela.style.backgroundColor = '#4AE89Bc0'  // Cor da tabela
    visor2.style.color = '#206343d2'

    // LISTA DE EVENTOS
    const arrayBotao = Array.from(botao).map((item2)=>{

        item2.addEventListener('mouseover',()=>{     //mouseOver
            item2.style.backgroundColor = '#206343'
            item2.style.color = 'white'      // OVER-cor de letra
        })

        item2.addEventListener('mouseout', ()=>{     //mouseOut
            item2.style.backgroundColor = '#05F57F'
            item2.style.color = '#206343'    // OUT-cor de letra
        })
    })
    

    botao.forEach((itens, i)=>{     // cor de fundo e letra dos botoes
        botao[i].style.backgroundColor = '#05F57F'
        botao[i].style.color = '#206A54'
    })
    
}


function tema1(){
    let visor1 = document.querySelector('.visor')
    container.style.backgroundColor = "#526d70d2"       // cor do container
    nav.style.backgroundColor = "#526d70d2"         // cor do Nav
    footer.style.backgroundColor = "#526d70d2"      // Cor do footer
    h1.style.color = '#526d70d2'       // Cor do H1
    tabela.style.backgroundColor = '#6ce9fac0'   // Cor da tabela
    visor1.style.color = '#0000ffa6'

    // LISTA DE EVENTOS    
    const arrayBotao = Array.from(botao).map((item1)=>{

        item1.addEventListener('mouseover',()=>{     //mouseOver
            item1.style.backgroundColor = '#526d70'
            item1.style.color = 'white'      // OVER-cor de letra
        })

        item1.addEventListener('mouseout', ()=>{     //mouseOut
            item1.style.backgroundColor = '#6CE9FA'
            item1.style.color = 'blue'    // OUT-cor de letra
        })
    })


    botao.forEach((itens, i)=>{     // cor de fundo e letra dos botoes
        botao[i].style.backgroundColor = '#6ce9fa'
        botao[i].style.color = '#0000ffb9'

    })
    
}