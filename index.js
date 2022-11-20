const timeEle = document.querySelectorAll(".times")
const Day = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
]

setInterval(() => {
    const date = new Date;
    timeEle[0].innerHTML = Day[date.getDay()];
    timeEle[1].innerHTML = date.getHours();
    timeEle[2].innerHTML = date.getMinutes();
    timeEle[3].innerHTML = date.getSeconds();
}), 1000

const handleChangeBg = document.querySelector(".btnChangeBg")
const BgImage = document.querySelector(".containerClock")

handleChangeBg.addEventListener("click", () => {
    const randomBg = Math.floor((Math.random() * 8) + 1);
    BgImage.style.backgroundImage = 'url(Ngan'+randomBg+'.jpeg'
})

const handleLove = document.querySelector(".btnLove")
handleLove.addEventListener("click", () => {
    BgImage.style.backgroundImage = "url(tenor.gif)"
})