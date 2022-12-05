console.log("Hello World");

const carousel = document.querySelector(".carousel"),
firstImg = carousel.querySelectorAll("img")[0]
arrowIcons = document.querySelectorAll(".arrow");

let firstImgWidth = firstImg.clientWidth + 14;

arrowIcons.forEach(icon => {
    icon.addEventListener("click", () => {
        carousel.scrollLeft += icon.id == "left" ? -firstImgWidth : firstImgWidth
    })
})
