import "./styles/main.scss";
import { gsap } from "gsap";

const extraWidth = window.innerWidth/5;

const cloneAwards = () => {
    const allAwards = document.querySelector(".glide__slides")
    var cln = allAwards.cloneNode(true)
    document.querySelector(".glide__container").appendChild(cln)

    console.log("Cloned!")
}

function carouselAnim(){

    /* gsap.to(".glide__container", 5, {
x: "-100vw",
repeat: -1,
ease: "none"
    }) */



    gsap.set(".glide__slide", {
        x: (i) => i * extraWidth
      });
      
      
      gsap.to(".glide__slide", {
        duration: 5,
        ease: "none",
        x: `+=${window.innerWidth}`, //move each box 100vw to right
        modifiers: {
          x: gsap.utils.unitize(x => parseFloat(x) % window.innerWidth) //force x value to be between 0 and 100vw using modulus
        },
        repeat: -1
      });
}



window.addEventListener("DOMContentLoaded", init);

function init(){
    //cloneAwards();
    carouselAnim();
}