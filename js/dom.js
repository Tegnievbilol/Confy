let btn4 = document.querySelector(".btn11")
let btn2 = document.querySelector(".btn2")
let btn1 = document.querySelector("#btn1")
let bit = document.querySelector("#bit")
let div = document.querySelector(".div")
let box1 = document.querySelector(".box1")
let renge = document.querySelector("#range")
let value2 = document.querySelector(".value1")
let div3 = document.querySelector(".div3")
let div5 = document.querySelector("#div55")
let hp1 = document.querySelector(".hp1")
let jp1 = document.querySelector(".jp1")
let IMG1 = document.querySelector(".IMG1")
renge.addEventListener("input", function () {
    value2.innerHTML = "Value : " + "$" + renge.value
})
btn1.onclick = () => {
    div.style.display = "block"
    bit.style.display = "none"
}
div5.style.display = "none"
bit.style.display = "none"
btn2.onclick = () => {
    bit.style.display = "block"
    bit.classList.add("bit1")
    div.style.display = "none"
}
btn4.onclick = () =>{
    div5.style.display = "none"
    div3.style.display = "block"
}
function getDate(data) {
    data.forEach((el) => {
        let div = document.createElement("div")
        let div1 = document.createElement("div")
        let div2 = document.createElement("div")
        let buton1 = document.createElement("button")
        buton1.innerHTML = "info"
        let button2 = document.createElement("button")
        button2.innerHTML = "korzin"
        div2.append(buton1, button2)
        let img = document.createElement("img")
        img.src = el.img
        img.classList.add("img")
        img.onclick = () => {
            div3.style.display = "none"
            div5.style.display = "block"
            IMG1.src = el.img
            hp1.innerHTML = el.name
            jp1.innerHTML = el.sena
        }
        let h1 = document.createElement("h1")
        let h2 = document.createElement("h2")
        h2.innerHTML = el.sena
        h1.innerHTML = el.name
        div2.classList.add("divb1")
        div1.append(img, h1, h2, div2)
        div1.classList.add("div12")
        box1.append(div1)
    });
}
export { getDate }