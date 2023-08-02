const planetPic = document.querySelector(".image")
const paragraph = document.querySelector(".paragraph")

const btn1 = document.querySelector(".btn-overview");
btn1.addEventListener('click', () => {
    planetPic.src = "images/planet-mercury.svg"
    paragraph.innerText = "Mercury is the smallest planet in the Solar System and the closest to the Sun. Its orbit around the Sun takes 87.97 Earth days, the shortest of all the Sun's planets. Mercury is one of four terrestrial planets in the Solar System, and is a rocky body like Earth."

})

const btn2 = document.querySelector(".btn-internal");
btn2.addEventListener('click', () => {
    planetPic.src = "images/planet-mercury-internal.svg"
    paragraph.innerText = "Mercury appears to have a solid silicate crust and mantle overlying a solid, iron sulfide outer core layer, a deeper liquid core layer, and a solid inner core. The planet's density is the second highest in the Solar System at 5.427 g/cm3 , only slightly less than Earth's density."

})

const btn3 = document.querySelector(".btn-surface");
btn3.addEventListener('click', () => {
    planetPic.src = "images/geology-mercury.png";
    planetPic.setAttribute("width", 450);
    planetPic.setAttribute("height", 450);
    paragraph.innerText = "Mercury's surface is similar in appearance to that of the Moon, showing extensive mare-like plains and heavy cratering, indicating that it has been geologically inactive for billions of years. It is more heterogeneous than either Mars's or the Moon’s."


})



