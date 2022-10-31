let dino= document.getElementById(`trex`);

let flower= document.querySelector(`#kaktus`);

function zipla() {
    if (flower.classList != "kaktus-animate") {
        flower.classList.add("kaktus-animate")
    }
    if (dino.classList != "trex-animate") {
        dino.classList.add(`trex-animate`);
        setTimeout(() => {
            dino.classList.remove(`trex-animate`)
        }, 500);
    }
}
let carpisma = setInterval(() => {
    let dinoLocation= window.getComputedStyle(dino).getPropertyValue(`bottom`)
    
    let kaktusLocation= window.getComputedStyle(flower).getPropertyValue(`left`)

}, 10);
