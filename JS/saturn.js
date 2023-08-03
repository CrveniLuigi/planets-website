const planetPic = document.querySelector(".image")
const paragraph = document.querySelector(".paragraph")

const btn1 = document.querySelector(".btn-overview");
btn1.addEventListener('click', () => {
    planetPic.src = "images/planet-saturn.svg"
    paragraph.innerText = "Saturn is the sixth planet from the Sun and the second-largest in the Solar System, after Jupiter. It is a gas giant with an average radius of about nine and a half times that of Earth. It only has one-eighth the average density of Earth."

})

const btn2 = document.querySelector(".btn-internal");
btn2.addEventListener('click', () => {
    planetPic.src = "images/planet-saturn-internal.svg"
    paragraph.innerText = "Despite consisting mostly of hydrogen and helium, most of Saturn's mass is not in the gas phase, because hydrogen becomes a non-ideal liquid when the density is above 0.01 g/cm3, which is reached at a radius containing 99.9% of Saturn's mass."

})

const btn3 = document.querySelector(".btn-surface");
btn3.addEventListener('click', () => {
    planetPic.src = "images/geology-saturn.png";
    planetPic.setAttribute("width", 450);
    planetPic.setAttribute("height", 450);
    paragraph.innerText = "The outer atmosphere of Saturn contains 96.3% molecular hydrogen and 3.25% helium by volume. The planet's most famous feature is its prominent ring system, which is composed mostly of ice particles with a smaller amount of rocky debris and dust."


})



