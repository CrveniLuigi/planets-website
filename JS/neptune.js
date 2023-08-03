const planetPic = document.querySelector(".image")
const paragraph = document.querySelector(".paragraph")

const btn1 = document.querySelector(".btn-overview");
btn1.addEventListener('click', () => {
    planetPic.src = "images/planet-neptune.svg"
    paragraph.innerText = " Neptune is the eighth and farthest-known Solar planet from the Sun. In the Solar System, it is the fourth-largest planet by diameter, the third-most-massive planet, and the densest giant planet. It is 17 times the mass of Earth, more massive than its near-twin Uranus."

})

const btn2 = document.querySelector(".btn-internal");
btn2.addEventListener('click', () => {
    planetPic.src = "images/planet-neptune-internal.svg"
    paragraph.innerText = "Neptune's internal structure resembles that of Uranus. Its atmosphere forms about 5% to 10% of its mass and extends perhaps 10% to 20% of the way towards the core. Increasing concentrations of methane, ammonia and water are found in the lower regions."

})

const btn3 = document.querySelector(".btn-surface");
btn3.addEventListener('click', () => {
    planetPic.src = "images/geology-neptune.png";
    planetPic.setAttribute("width", 450);
    planetPic.setAttribute("height", 450);
    paragraph.innerText = "Neptune's atmosphere is 80% hydrogen and 19% helium. A trace amount of methane is also present. Prominent absorption bands of methane exist at wavelengths above 600 nm, in the red and infrared portion of the spectrum."


})



