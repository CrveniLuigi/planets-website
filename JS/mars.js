const planetPic = document.querySelector(".image")
const paragraph = document.querySelector(".paragraph")

const btn1 = document.querySelector(".btn-overview");
btn1.addEventListener('click', () => {
    planetPic.src = "images/planet-mars.svg"
    paragraph.innerText = 'Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System, being larger than only Mercury. In English, Mars carries the name of the Roman god of war and is often referred to as the "Red Planet".'

})

const btn2 = document.querySelector(".btn-internal");
btn2.addEventListener('click', () => {
    planetPic.src = "images/planet-mars-internal.svg"
    paragraph.innerText = "Like Earth, Mars has differentiated into a dense metallic core overlaid by less dense materials. Scientists initially determined that the core is at least partially liquid. Current models of its interior imply a core consisting primarily of iron and nickel with about 16–17% sulfur."

})

const btn3 = document.querySelector(".btn-surface");
btn3.addEventListener('click', () => {
    planetPic.src = "images/geology-mars.png";
    planetPic.setAttribute("width", 450);
    planetPic.setAttribute("height", 450);
    paragraph.innerText = "Mars is a terrestrial planet whose surface consists of minerals containing silicon and oxygen, metals, and other elements that typically make up rock. The surface is primarily composed of tholeiitic basalt, although parts are more silica-rich than typical basalt."


})



