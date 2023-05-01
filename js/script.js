const turnOn = document.getElementById('turnOn') //botaoligar
const turnOff = document.getElementById('turnOff') //botaodesligar
const lamp = document.getElementById('lamp') //img

function isLampBroken() {
    return lamp.src.indexOf('quebrada') > -1
}

function lampOn() {
    if(!isLampBroken()) {
    lamp.src = './img/ligada.jpg'
    }
}

function lampOff() {
    lamp.src = './img/desligada.jpg'
}

function lampBroken() {
    lamp.src = './img/quebrada.jpg'
}

turnOn.addEventListener('click', lampOn)
turnOff.addEventListener('click', lampOff)
lamp.addEventListener('mouseover', lampOn)
lamp.addEventListener('mouseleave', lampOff)
lamp.addEventListener('dblclick', lampBroken)
