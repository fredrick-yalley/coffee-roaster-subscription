const menu = document.querySelector(".fa");
const nav = document.querySelector("ul");
const paragraphOne = document.querySelector("#p-arrow-1");
const paragraphTwo = document.querySelector("#p-arrow-2");
const paragraphThree = document.querySelector("#p-arrow-3");
const paragraphFour = document.querySelector("#p-arrow-4");
const paragraphFive = document.querySelector("#p-arrow-5");
// span
const aOneSpan = document.querySelector("#a1-span");
const aTwoSpan = document.querySelector("#a2-span");
const aThreeSpan = document.querySelector("#a3-span");
const aFourSpan = document.querySelector("#a4-span");
const aFiveSpan = document.querySelector("#a5-span");

// arrow
const arrowOne = document.querySelector("#arrow-1");
const arrowtwo = document.querySelector("#arrow-2");
const arrowthree = document.querySelector("#arrow-3");
const arrowfour = document.querySelector("#arrow-4");
const arrowfive = document.querySelector("#arrow-5");


const options = document.querySelector(".options");
// options
const preference = document.querySelector("#pref-option");
const type = document.querySelector("#type-option");
const quantity = document.querySelector("#quantity-option");
const grind = document.querySelector("#grind-option");
const delivery = document.querySelector("#delivery-option");
const boxes = document.querySelectorAll('.select');

menu.addEventListener("click", () => {
    if(menu.classList.contains("fa-bars")) {
        menu.classList.remove("fa-bars");
        menu.classList.add("fa-times");
        nav.classList.add("active")
    } else {
        menu.classList.remove("fa-times");
        menu.classList.add("fa-bars");
        nav.classList.remove("active")
    }
})

paragraphOne.addEventListener("click", () => {
    if(!preference.classList.contains("view-state")) {
        preference.classList.add("view-state");
        arrowOne.style.transform = "rotate(360deg)";
        paragraphOne.style.color = "#333D4B";
        paragraphOne.style.fontWeight = "bolder";
        aOneSpan.style.color = "#0E8784";
    } else {
        preference.classList.remove("view-state");
        arrowOne.style.transform = "rotate(180deg)";
        paragraphOne.style.color = "#83888F";
        aOneSpan.style.color = "#83888F";
        paragraphOne.style.fontWeight = "normal";
    }
})

paragraphTwo.addEventListener("click", () => {
    if(type.classList.contains("view-state")) {
        type.classList.remove("view-state");
        arrowtwo.style.transform = "rotate(180deg)";
        paragraphTwo.style.color = "#333D4B";
        paragraphTwo.style.fontWeight = "bolder";
        aTwoSpan.style.color = "#0E8784";
    } else {
        type.classList.add("view-state");
        arrowtwo.style.transform = "rotate(360deg)";
        paragraphTwo.style.color = "#83888F";
        aTwoSpan.style.color = "#83888F";
        paragraphTwo.style.fontWeight = "normal";
    }
})
paragraphThree.addEventListener("click", () => {
    if(quantity.classList.contains("view-state")) {
        quantity.classList.remove("view-state");
        arrowthree.style.transform = "rotate(180deg)";
        paragraphThree.style.color = "#333D4B";
        paragraphThree.style.fontWeight = "bolder";
        aThreeSpan.style.color = "#0E8784";
    } else {
        quantity.classList.add("view-state");
        arrowthree.style.transform = "rotate(360deg)";
        paragraphThree.style.color = "#83888F";
        aThreeSpan.style.color = "#83888F";
        paragraphThree.style.fontWeight = "normal";
    }
})
paragraphFour.addEventListener("click", () => {
    if(grind.classList.contains("view-state")) {
        grind.classList.remove("view-state");
        arrowfour.style.transform = "rotate(180deg)";
        paragraphFour.style.color = "#333D4B";
        paragraphFour.style.fontWeight = "bolder";
        aFourSpan.style.color = "#0E8784";
    } else {
        grind.classList.add("view-state");
        arrowfour.style.transform = "rotate(360deg)";
        paragraphFour.style.color = "#83888F";
        aFourSpan.style.color = "#83888F";
        paragraphFour.style.fontWeight = "normal";
    }
})
paragraphFive.addEventListener("click", () => {
    if(delivery.classList.contains("view-state")) {
        delivery.classList.remove("view-state");
        arrowfive.style.transform = "rotate(180deg)";
        paragraphFive.style.color = "#333D4B";
        paragraphFive.style.fontWeight = "bolder";
        aFiveSpan.style.color = "#0E8784";
    } else {
        delivery.classList.add("view-state");
        arrowfive.style.transform = "rotate(360deg)";
        paragraphFive.style.color = "#83888F";
        aFiveSpan.style.color = "#83888F";
        paragraphFive.style.fontWeight = "normal";
    }
})

arrowOne.addEventListener("click", () => {
    if(!preference.classList.contains("view-state")) {
        preference.classList.add("view-state");
        arrowOne.style.transform = "rotate(360deg)";
    } else {
        preference.classList.remove("view-state");
        arrowOne.style.transform = "rotate(180deg)";
    }
})

arrowtwo.addEventListener("click", () => {
    if(type.classList.contains("view-state")) {
        type.classList.remove("view-state");
        arrowtwo.style.transform = "rotate(180deg)";
    } else {
        type.classList.add("view-state");
        arrowtwo.style.transform = "rotate(360deg)";
    }
})
arrowthree.addEventListener("click", () => {
    if(quantity.classList.contains("view-state")) {
        quantity.classList.remove("view-state");
        arrowthree.style.transform = "rotate(180deg)";
    } else {
        quantity.classList.add("view-state");
        arrowthree.style.transform = "rotate(360deg)";

    }
})
arrowfour.addEventListener("click", () => {
    if(grind.classList.contains("view-state")) {
        grind.classList.remove("view-state");
        arrowfour.style.transform = "rotate(180deg)";
    } else {
        grind.classList.add("view-state");
        arrowfour.style.transform = "rotate(360deg)";
    }
})

arrowfive.addEventListener("click", () => {
    if(delivery.classList.contains("view-state")) {
        delivery.classList.remove("view-state");
        arrowfive.style.transform = "rotate(180deg)";
    } else {
        delivery.classList.add("view-state");
        arrowfive.style.transform = "rotate(360deg)";
    }
})

boxes.forEach(box => {
    box.addEventListener('click', () => {
        box.style.backgroundColor = '#0E8784';
    })
    
});