let visor = document.querySelector('.visor')

function numb(num) {
    visor.innerHTML += num
}

function clean(){
    visor.innerHTML = ''
}

function del(){
    let visor = document.querySelector('.visor')
    console.log(visor.length)
}

