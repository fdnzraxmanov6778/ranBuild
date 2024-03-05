const hidden = document.querySelector(".hidden");
const btnHeader = document.querySelector(".header-btn");
const container = document.querySelector(".container");
const overlay = document.querySelector(".overlay");
const header = document.querySelector(".header");
const body = document.querySelector("body");

const hiddenBtn = document.querySelector(".hidden-btn");
const inputHidden = document.querySelectorAll(".hidden-input1");
const hiddenInput = document.querySelectorAll(".hidden-input");

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        overlay.style.display = "none";
    } else if (event.key === "Enter") {
        overlay.style.display = "none";
    }
});
btnHeader.addEventListener("click", () => {
    hidden.classList.add("hidden-anime");
    overlay.style.display = "block";
    inputHidden.innertext = "";
});
hiddenBtn.addEventListener("click", () => {
    hidden.classList.remove("hidden-anime");
    overlay.style.display = "none";
    2;
    inputHidden.textContent = "none";
});

const burger = document.querySelector(".burger");
const burgerIcon = document.querySelector(".burgerIocn");
const overlayBurger = document.querySelector(".overlay-burger");

burger.addEventListener(`click`, (e) => {
    console.log("hello");
    overlayBurger.style.display = "block";
});
overlayBurger.addEventListener(`click`, (e) => {
    overlayBurger.style.display = "none";
});

const icons1 = document.querySelector(".icons1");
const icons2 = document.querySelector(".icons2");
const icons3 = document.querySelector(".icons3");
const icons4 = document.querySelector(".icons4");
const iconLike1 = document.querySelector(`.like1`);
const iconLike2 = document.querySelector(`.like2`);
const iconLike3 = document.querySelector(`.like3`);
const iconLike4 = document.querySelector(`.like4`);

icons1.addEventListener("click", (e) => {
    iconLike1.classList.toggle("color-red");
});
icons2.addEventListener("click", (e) => {
    iconLike2.classList.toggle("color-red");
});
icons3.addEventListener("click", (e) => {
    iconLike3.classList.toggle("color-red");
});
icons4.addEventListener("click", (e) => {
    iconLike4.classList.toggle("color-red");
});
// const mapsGoogle = `https://maps.app.goo.gl/jVmqrFF6E6HpDNGH7`;

// // Initialize and add the map
// function initMap() {
//   // The location of your desired center
//   var center = { lat: 40.7128, lng: -74.006 }; // Example: New York City

//   // The map, centered at your desired location
//   var map = new google.maps.Map(document.getElementById("map"), {
//     zoom: 10, // Adjust the zoom level as needed
//     center: center,
//   });
//   // Optionally, add a marker at the center
//   var marker = new google.maps.Marker({
//     position: center,
//     map: map,
//   });
// }

const titlePage = document.querySelector(".title-page");
const myArrays1 = [
    "make your dreams come true with usa",
    "buildings of the highest quality",
    "start your dreams with us",
];

const pagePic = document.querySelector(".page-pic");
const page2Btn = document.querySelector(".page2-button");
const pagePic2 = document.querySelector(".page-pic");

// Tutorial: https://youtu.be/Wxnpze5LK3Y

let sliderCounter = 0;
let sliderContent = [
    "make your dreams come true with us",
    "we always offer you the best",
    "we always strive for higher heights",
    "buildings of the highest quality",
];
let videoHeader = document.querySelector("#videoHeader");
let title = document.querySelector("#title");

function slide() {
    if (sliderCounter >= sliderContent.length) {
        sliderCounter = 0;
    }
    title.innerHTML = "";

    title.classList.remove("holder-animation");
    void title.offsetWidth;
    title.classList.add("holder-animation");

    for (i = 0; i < sliderContent[sliderCounter].length; i++) {
        let letterDiv = document.createElement("div");
        if (sliderContent[i] != "") {
            letterDiv.style.textWrap = "balance";
        }
        letterDiv.innerHTML = sliderContent[sliderCounter][i];

        if (letterDiv.innerHTML == " ") {
            letterDiv.innerHTML = "&nbsp;";
        }
        letterDiv.classList.add("start");
        letterDiv.classList.add("animation");
        letterDiv.style.animationDelay = i / 10 + "s";
        title.appendChild(letterDiv);
    }
    sliderCounter++;
}

slide();
setInterval(slide, 6000);

const pageMoreItem = document.querySelector(".page-more-item");
function pageMore() {
    for (let i = 0; i < sliderCounter.length; i++) {
        pageMoreItem.classList.add("start");
        pageMoreItem.classList.add("animation");
    }
}

pageMore();
setInterval(pageMore, 6000);

const pageMoreBtn1 = document.querySelector("#page-more-btn1");
const pageMoreH1 = document.querySelector("#page-more-h1");
pageMoreBtn1.addEventListener("mouseover", (e) => {
    let h1 = pageMoreH1.textContent;
    pageMoreH1.textContent = "the agility of our builders";
    pageMoreH1.style.color = " rgb(199, 159, 237)";
    pageMoreH1.style.textShadow = "0 0 30px black";
});
pageMoreBtn1.addEventListener("mouseout", (e) => {
    pageMoreH1.textContent = " Click here for more information";
    pageMoreH1.style.color = "white";
});
