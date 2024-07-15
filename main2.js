import a from "./main3.js"
import { b, c } from "./main3.js"

let btn = document.getElementById("btn")

btn.addEventListener("click", () => {
    let choice1 = document.getElementById("choice1").value
    let choice2 = document.getElementById("choice2").value

    let value = document.getElementById("input").value
    let op = document.getElementById("output")

    if (choice1 == 1 && choice2 == 2) {
        op.innerText = value / 100
    } else if (choice1 == choice2) {
        op.innerText = value
    }
})
