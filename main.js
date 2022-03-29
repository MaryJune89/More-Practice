const a = document.querySelector('#aNow')
const b = document.querySelector('#bNow')
const c = document.querySelector('#cNow')
const d = document.querySelector('#dNow')
const e = document.querySelector('#eNow')

document.querySelector('#aNow').addEventListener('click', aNow)
document.querySelector('#bNow').addEventListener('click', bNow)
document.querySelector('#cNow').addEventListener('click', cNow)
document.querySelector('#dNow').addEventListener('click', dNow)
document.querySelector('#eNow').addEventListener('click', eNow)

function aNow() {
    aye.classList.toggle('hidden')
    bee.classList.add('hidden')
    cee.classList.add('hidden')
    dee.classList.add('hidden')
    eww.classList.add('hidden')
}
function bNow() {
    aye.classList.add('hidden')
    bee.classList.toggle('hidden')
    cee.classList.add('hidden')
    dee.classList.add('hidden')
    eww.classList.add('hidden')
}
function cNow() {
    aye.classList.add('hidden')
    bee.classList.add('hidden')
    cee.classList.toggle('hidden')
    dee.classList.add('hidden')
    eww.classList.add('hidden')
}
function dNow() {
    aye.classList.add('hidden')
    bee.classList.add('hidden')
    cee.classList.add('hidden')
    dee.classList.toggle('hidden')
    eww.classList.add('hidden')
}
function eNow() {
    aye.classList.add('hidden')
    bee.classList.add('hidden')
    cee.classList.add('hidden')
    dee.classList.add('hidden')
    eww.classList.toggle('hidden')
}

//need image to show when letter is searched in the form//

let button = document.querySelector('button');
let container = document.getElementById('container');

button.onclick = function changeImage() {
    container.style.imageRendering = 'apple.jpg'
}

//function run() {
    //const apple = document.querySelector('#aye').value
    //const ball = document.querySelector('#bee').value
    //const cat = document.querySelector('#cee').value
    //const dog = document.querySelector('#dee').value
    //const egg = document.querySelector('#eww').value

    //document.querySelector('#placeToChoose').innerText = `${aye} ${bee} ${cee} ${dee} ${eww}`
//}
