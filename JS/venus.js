const planetPic = document.querySelector(".image")
const paragraph = document.querySelector(".paragraph")

const btn1 = document.querySelector(".btn-overview");
btn1.addEventListener('click', () => {
    planetPic.src = "images/planet-venus.svg"
    paragraph.innerText = "Venus is the second planet from the Sun. It is named after the Roman goddess of love and beauty. As the brightest natural object in Earth's night sky after the Moon, Venus can cast shadows and can be, on rare occasions, visible to the naked eye in broad daylight."

})

const btn2 = document.querySelector(".btn-internal");
btn2.addEventListener('click', () => {
    planetPic.src = "images/planet-venus-internal.svg"
    paragraph.innerText = "The similarity in size and density between Venus and Earth suggests they share a similar internal structure: a core, mantle, and crust. Like that of Earth, Venusian core is most likely at least partially liquid because the two planets have been cooling at about the same rate."

})

const btn3 = document.querySelector(".btn-surface");
btn3.addEventListener('click', () => {
    planetPic.src = "images/geology-venus.png";
    planetPic.setAttribute("width", 450);
    planetPic.setAttribute("height", 450);
    paragraph.innerText = "Much of the Venusian surface appears to have been shaped by volcanic activity. Venus has several times as many volcanoes as Earth, and it has 167 large volcanoes that are over 100 km (60 mi) across. The only volcanic complex of this size on Earth is the Big Island of Hawaii."


})



