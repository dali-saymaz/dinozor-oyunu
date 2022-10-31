 
const trex=document.querySelector("#trex");
const kaktus=document.querySelector("#kaktus");
 

// //...1
// function zipla(){ // css kodunda ziplama ve kayma hareketlerini baska bir classname atadik
//         trex.classList.add("trex-animate");
// }

// //...2
// function zipla(){ 
//     trex.classList.add("trex-animate");
// setTimeout(function(){
//     trex.classList.remove("trex-animate");
// },500);
// }

// //...3
// function zipla(){
   
//     if(kaktus.classList!="kaktus-animate")
//     {
//         kaktus.classList.add("kaktus-animate");
//     }
 
//     if(trex.classList!="trex-animate")
//     {
//         trex.classList.add("trex-animate");
//         setTimeout(function(){
//             trex.classList.remove("trex-animate");
//         },500);
//     }
// }


// //.....4
// function zipla(){
   
//     if(kaktus.classList!="kaktus-animate")
//     {
//         kaktus.classList.add("kaktus-animate");
//     }
 
//     if(trex.classList!="trex-animate")
//     {
//         trex.classList.add("trex-animate");
//         setTimeout(function(){
//             trex.classList.remove("trex-animate");
//         },500);
//     }
// }

// var carpismaKOntrol =setInterval(function(){
 
//     var trexBottom =window
//             .getComputedStyle(trex) // bir ogenin butun css ozelliklerini getirir
//             .getPropertyValue("bottom"); // bottom degerinin yuksekligini verir.
//             console.log(trexBottom)

// },10);

// //.....5

// function zipla(){
   
//     if(kaktus.classList!="kaktus-animate")
//     {
//         kaktus.classList.add("kaktus-animate");
//     }
 
//     if(trex.classList!="trex-animate")
//     {
//         trex.classList.add("trex-animate");
//         setTimeout(function(){
//             trex.classList.remove("trex-animate");
//         },500);
//     }
// }

// var carpismaKOntrol =setInterval(function(){
 
//     var trexBottom =parseInt(window
//             .getComputedStyle(trex) // bir ogenin butun css ozelliklerini getirir
//             .getPropertyValue("bottom")); // bottom degerinin yuksekligini verir.
//             console.log(trexBottom)

// },10);


 
function zipla(){
   
    if(kaktus.classList!="kaktus-animate")
    {
        kaktus.classList.add("kaktus-animate");
    }
 
    if(trex.classList!="trex-animate")
    {
        trex.classList.add("trex-animate");
        setTimeout(function(){
            trex.classList.remove("trex-animate");
        },500);
    }
}
 
var carpismaKOntrol =setInterval(function(){
 
        var trexBottom =parseInt(window
                .getComputedStyle(trex)
                .getPropertyValue("bottom"));
 
        var kaktusLeft =parseInt(window
                .getComputedStyle(kaktus)
                .getPropertyValue("left"));
        
        if(kaktusLeft > 0 && kaktusLeft < 40 && trexBottom < 40){

            
            kaktus.classList.remove("kaktus-animate"); //eger bu iki kodu kullanmazsak kakdus ortadan baslayabilir daima sifirlama yapmamiz lazim
            kaktus.style.display="none";

            alert("oyun bitti");
        }
},10);
 