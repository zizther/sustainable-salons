//import "alpinejs"; // uncomment if you want to use alpinejs
import { gsap, Power3, Power2 } from "gsap";
import { Observer } from "gsap/Observer";

gsap.registerPlugin(Observer);

const documentHeight = () => {
    // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
    let vh = window.innerHeight * 0.01;
    // Then we set the value in the --vh custom property to the root of the document
    document.documentElement.style.setProperty("--vh", `${vh}px`);
};

documentHeight();
