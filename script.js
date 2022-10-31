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
var carpisma = setInterval(() => {
    var dinoLocation= parseInt(window.getComputedStyle(dino).getPropertyValue(`bottom`))
    var kaktusLocation= parseInt(window.getComputedStyle(flower).getPropertyValue(`left`))
    if (kaktusLocation>0 && kaktusLocation<40 && dinoLocation<40) {
        flower.classList.remove("kaktus-animate")
        flower.style.display="none"
        alert("oyun bitti yandin")
    }
    console.log(dinoLocation, kaktusLocation)
}, 10);
