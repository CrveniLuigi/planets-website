const planetPic = document.querySelector(".image")

const btn1 = document.querySelector(".btn-internal");
btn1.addEventListener('click', () => {
    planetPic.src = "images/planet-earth-internal.svg"
})

const btn2 = document.querySelector(".btn-overview");
btn2.addEventListener('click', () => {
    planetPic.src = "images/planet-earth.svg"
})

const btn3 = document.querySelector(".btn-surface");
btn3.addEventListener('click', () => {
    planetPic.src = "images/geology-earth.png"
})