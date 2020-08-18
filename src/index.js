import "./styles/main.scss";
import { gsap } from "gsap";




const cloneAwards = () => {
    const allAwards = document.querySelector(".glide__slides")
    var cln = allAwards.cloneNode(true)
    document.querySelector(".glide__container").appendChild(cln)

    console.log("Cloned!")
}



function carouselAnim(){

    gsap.to(".glide__container", 5, {
x:"-100vw",
repeat: -1,
ease: "none"
    })
}




window.addEventListener("DOMContentLoaded", init);

function init(){
    cloneAwards();
    carouselAnim();
}