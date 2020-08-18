import "./styles/main.scss";
import { gsap } from "gsap";

const oneFifthOfTheScreen = window.innerWidth/5;
const slideCount = document.querySelectorAll(".carousel__slide").length;

function carouselAnim(){

    gsap.set(".carousel__slide", {
        x: (i) => i * oneFifthOfTheScreen
      });
      
      
      gsap.to(".carousel__slide", {
        duration: 10,
        ease: "none",
        x: `+=${oneFifthOfTheScreen*slideCount}`,
        modifiers: {
          x: gsap.utils.unitize(x => parseFloat(x) % (oneFifthOfTheScreen*slideCount))
        },
        repeat: -1
      });

      document.querySelector(".carousel").style.width = oneFifthOfTheScreen*slideCount+"px";
}


window.addEventListener("DOMContentLoaded", init);

function init(){
    carouselAnim();
}