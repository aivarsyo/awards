import "./styles/main.scss";
import { gsap } from "gsap";
import { Power2 } from "gsap";
const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)

window.addEventListener("DOMContentLoaded", init);

function init(){

    checkPos();
}

var isOutOfViewport = function (elem) {

    // Get element's bounding
    var bounding = elem.getBoundingClientRect();

    // Check if it's out of the viewport on each side
    var out = {};
    out.top = bounding.top < 0;
    out.left = bounding.left < 0;
    out.bottom = bounding.bottom > (window.innerHeight || document.documentElement.clientHeight);
    out.right = bounding.right > (window.innerWidth || document.documentElement.clientWidth);
    out.any = out.top || out.left || out.bottom || out.right;
    out.all = out.top && out.left && out.bottom && out.right;

    return out;

};

/* function checkPos(){

    var award = document.querySelectorAll('.glide__slide');
    award.forEach(elem => {

        var cln = elem.cloneNode(true);
        document.querySelector(".glide__slides").appendChild(cln);

        elem.addEventListener("animationiteration", () => {

            console.log("animation ends")

            elem.remove();

            var cln = elem.cloneNode(true);
            document.querySelector(".glide__slides").appendChild(cln);

            var isOut = isOutOfViewport(elem);

            if (isOut.left) {
                console.log("square is out");
                elem.remove();
            } else{
                console.log("not showing");
            }

        })

        
        
        
    })
} */
    


/* function checkPos(){

    var awards = document.querySelectorAll(".glide__slide");

    gsap.to(awards, 5, {
        x: (index, element) => {
            var box = element.getBoundingClientRect();
        return vw + box.x;
        }
    });

} */

function checkPos(){

    var award = document.querySelectorAll('.glide__slide');
    award.forEach(elem => {
        elem.addEventListener("animationend", () => {

            console.log("works")

elem.classList.add("glide__slide__anim");


        })
        })

        const allAwards = document.querySelector(".glide__slides");
        var cln = allAwards.cloneNode(true);
        cln.classList.add("glide__slide__anim");
        document.querySelector(".glide__track").appendChild(cln);

        }



