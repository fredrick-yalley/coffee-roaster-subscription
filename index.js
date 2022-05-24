const menu = document.querySelector(".fa");
const nav = document.querySelector("ul");
const toggler = document.getElementsByClassName("toggler"),
  orderCards = document.getElementsByClassName("order-cards"),
  preferences = document.getElementsByClassName("preferences"),
  beanTypes = document.getElementsByClassName("bean-types"),
  quantity = document.getElementsByClassName("quantity"),
  grindOption = document.getElementsByClassName("grind-option"),
  deliveries = document.getElementsByClassName("deliveries");

const capsule = document.getElementById("capsule"),
  grindOptions = document.getElementById("grind-options"),
  grindToggler = document.getElementById("grind-toggler");

const usingOrAs = document.getElementById("using-or-as"),
  preferencesText = document.getElementById("preferences-text"),
  typeText = document.getElementById("type-text"),
  quantityText = document.getElementById("quantity-text"),
  grindOptionsText = document.getElementById("grind-options-text"),
  deliveriesText = document.getElementById("deliveries-text");

  const filterOrEspresso = document.getElementById("filter-or-espresso");
  const grindHeading = document.getElementById("grind-heading");


let preferencesClicked = false;
let beanTypesClicked = false;
let orderquantitiesClicked = false;
let deliveriesClicked = false;

let pricePerMouthNumber = 0;


const listOne = document.querySelector("#p-arrow-1");
    const listTwo = document.querySelector("#p-arrow-2");
    const listThree = document.querySelector("#p-arrow-3");
    const listFour = document.querySelector("#p-arrow-4");
    const listFive = document.querySelector("#p-arrow-5");

    const arrowOne = document.querySelector("#arrow-1");
    const arrowtwo = document.querySelector("#arrow-2");
    const arrowfour = document.querySelector(".arrow-4");
    const arrowthree = document.querySelector("#arrow-3");
    const arrowfive = document.querySelector("#arrow-5");

   const preference = document.querySelector("#pref-option");
    const type = document.querySelector("#type-option");
    const quant = document.querySelector("#quantity-option");
    const grind = document.querySelector("#grind-option");
    const delivery = document.querySelector("#delivery-option");

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


listOne.addEventListener("click", () => {
     if(!preference.classList.contains("view-state")) {
         preference.classList.add("view-state");
         arrowOne.style.transform = "rotate(360deg)";
         listOne.style.color = "#83888F";
         listOne.style.fontWeight = "bolder";
         aOneSpan.style.color = "#83888F";
     } else {
         preference.classList.remove("view-state");
         arrowOne.style.transform = "rotate(180deg)";
         listOne.style.color = "#333D4B";
         aOneSpan.style.color = "#0E8784";
         listOne.style.fontWeight = "bolder";
     }
 })

 listTwo.addEventListener("click", () => {
     if(type.classList.contains("view-state")) {
         type.classList.remove("view-state");
         arrowtwo.style.transform = "rotate(180deg)";
         listTwo.style.color = "#333D4B";
         listTwo.style.fontWeight = "bolder";
         aTwoSpan.style.color = "#0E8784";
     } else {
         type.classList.add("view-state");
         arrowtwo.style.transform = "rotate(360deg)";
         listTwo.style.color = "#83888F";
         aTwoSpan.style.color = "#83888F";
         listTwo.style.fontWeight = "normal";
     }
 })
 listThree.addEventListener("click", () => {
     if(quant.classList.contains("view-state")) {
         quant.classList.remove("view-state");
         arrowthree.style.transform = "rotate(180deg)";
         listThree.style.color = "#333D4B";
         listThree.style.fontWeight = "bolder";
         aThreeSpan.style.color = "#0E8784";
    } else {
         quant.classList.add("view-state");
         arrowthree.style.transform = "rotate(360deg)";
         listThree.style.color = "#83888F";
         aThreeSpan.style.color = "#83888F";
         listThree.style.fontWeight = "normal";
     }
 })
 listFour.addEventListener("click", () => {
     if(grind.classList.contains("view-state")) {
         grind.classList.remove("view-state");
         arrowfour.style.transform = "rotate(180deg)";
         listFour.style.color = "#333D4B";
         listFour.style.fontWeight = "bolder";
         aFourSpan.style.color = "#0E8784";
     } else {
         grind.classList.add("view-state");
         arrowfour.style.transform = "rotate(360deg)";
         listFour.style.color = "#83888F";
         aFourSpan.style.color = "#83888F";
         listFour.style.fontWeight = "normal";
     }
 })
 listFive.addEventListener("click", () => {
     if(delivery.classList.contains("view-state")) {
         delivery.classList.remove("view-state");
         arrowfive.style.transform = "rotate(180deg)";
         listFive.style.color = "#333D4B";
         listFive.style.fontWeight = "bolder";
         aFiveSpan.style.color = "#0E8784";
     } else {
         delivery.classList.add("view-state");
         arrowfive.style.transform = "rotate(360deg)";
         listFive.style.color = "#83888F";
         aFiveSpan.style.color = "#83888F";
         listFive.style.fontWeight = "normal";
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
     if(quant.classList.contains("view-state")) {
         quant.classList.remove("view-state");
         arrowthree.style.transform = "rotate(180deg)";
     } else {
         quant.classList.add("view-state");
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


for (let i = 0; i < preferences.length; i++) {
  preferences[i].addEventListener("click", () => {
    for (let j = 0; j < preferences.length; j++) {
      preferences[j].classList.remove("order-card-selected");
      preferences[j].style.backgroundColor = "#F4F1EB";
      filterOrEspresso.style.display = "none";
      grindHeading.style.fontWeight = "450";
    }
    preferences[i].classList.add("order-card-selected");
    preferences[i].style.backgroundColor = "#0E8784";
    if (preferences[i] === capsule) {
      grindToggler.style.pointerEvents = "none";
      grindOptions.classList.add("collapsed");
      usingOrAs.innerText = "using";
      preferencesText.innerText = "Capsule";
      grindOptionsText.style.display = "none";
    } else if (i === 1) {
      usingOrAs.innerText = "as";
      preferencesText.innerText = "Filter";
      filterOrEspresso.style.display = "inline";
      grindHeading.style.fontWeight = "600";

    } else if (i === 2) {
      usingOrAs.innerText = "as";
      preferencesText.innerText = "Espresso";
      filterOrEspresso.style.display = "inline";
      grindHeading.style.fontWeight = "600";

    }
    if (preferences[i] !== capsule) {
      grindToggler.style.pointerEvents = "all";
      grindOptionsText.style.display = "inline";
    }

    preferencesClicked = true;
    r = isElementClicked(preferencesClicked);
  });
}

for (let i = 0; i < beanTypes.length; i++) {
  beanTypes[i].addEventListener("click", () => {
    for (let j = 0; j < beanTypes.length; j++) {
      beanTypes[j].classList.remove("order-card-selected");
      beanTypes[j].style.backgroundColor = "#F4F1EB";
    }
    beanTypes[i].classList.add("order-card-selected");
    beanTypes[i].style.backgroundColor = "#0E8784";
    typeText.innerText = i === 0 ? "Single Origin" : i === 1 ? "Decaf" : "Blended";
    beanTypesClicked = true;
  });
}

for (let i = 0; i < quantity.length; i++) {
  quantity[i].addEventListener("click", () => {
    for (let j = 0; j < quantity.length; j++) {
      quantity[j].classList.remove("order-card-selected");
      quantity[j].style.backgroundColor = "#F4F1EB";

    }
    quantity[i].classList.add("order-card-selected");
    quantity[i].style.backgroundColor = "#0E8784";
    quantityText.innerText = i === 0 ? "250g" : i === 1 ? "500g" : "1000g";
    orderquantitiesClicked = true;
  });
}

for (let i = 0; i < grindOption.length; i++) {
  grindOption[i].addEventListener("click", () => {
    for (let j = 0; j < grindOption.length; j++) {
      grindOption[j].classList.remove("order-card-selected");
      grindOption[j].style.backgroundColor = "#F4F1EB";

    }
    grindOption[i].classList.add("order-card-selected");
    grindOption[i].style.backgroundColor = "#0E8784";
    grindOptionsText.innerText = i === 0 ? " Wholebean" : i === 1 ? " Filter" : " Cafetiére";
  });
}

for (let i = 0; i < deliveries.length; i++) {
  deliveries[i].addEventListener("click", () => {
    for (let j = 0; j < deliveries.length; j++) {
      deliveries[j].classList.remove("order-card-selected");
      deliveries[j].style.backgroundColor = "#F4F1EB";

    }
    deliveries[i].classList.add("order-card-selected");
    deliveries[i].style.backgroundColor = "#0E8784";
    deliveriesText.innerText = i === 0 ? "Every week" : i === 1 ? "Every 2 weeks" : "Every month";
    deliveriesClicked = true;
  });
}

// Added by Koffi
function isElementClicked(){
  console.log(preferencesClicked ? "clicked" : "not");
  console.log(beanTypesClicked ? "clicked" : "not");
  console.log(orderquantitiesClicked ? "clicked" : "not");
  console.log(deliveriesClicked ? "clicked" : "not");
   if(preferencesClicked === true && beanTypesClicked === true && orderquantitiesClicked === true && deliveriesClicked === true){
    document.getElementById("show").classList.add("create_plan_active");
  }
}
setInterval(isElementClicked, 2000);


document.getElementById("show").addEventListener('click', function(){
  if(quantityText.innerHTML === "250g"){
    if(deliveriesText.innerHTML === "Every week"){
      pricePerMouthNumber = 7.20 * 4;
    }else if(deliveriesText.innerHTML === "Every 2 weeks"){
      pricePerMouthNumber = 9.60 * 2;
    }else if(deliveriesText.innerHTML === "Every month"){
      pricePerMouthNumber = 12.00;
    }
  }else if(quantityText.innerHTML === "500g"){
    if(deliveriesText.innerHTML === "Every week"){
      pricePerMouthNumber = 13.00 * 4;
    }else if(deliveriesText.innerHTML === "Every 2 weeks"){
      pricePerMouthNumber = 17.50 * 2;
    }else if(deliveriesText.innerHTML === "Every month"){
      pricePerMouthNumber = 22.00;
    }
  }else if(quantityText.innerHTML === "1000g"){
    if(deliveriesText.innerHTML === "Every week"){
      pricePerMouthNumber = 22.00 * 4;
    }else if(deliveriesText.innerHTML === "Every 2 weeks"){
      pricePerMouthNumber = 32.00 * 2;
    }else if(deliveriesText.innerHTML === "Every month"){
      pricePerMouthNumber = 42.00;
    }
  }
  console.log(pricePerMouthNumber.toString());

  document.getElementById("price-per-month").innerHTML = pricePerMouthNumber.toString();
});          