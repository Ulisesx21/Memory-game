const blue = document.querySelector(".blue")
const red = document.querySelector(".red")
const yellow = document.querySelector(".yellow")
const green = document.querySelector(".green")
const container = document.querySelector(".container")
const round = document.querySelector(".round")
const playBtn = document.querySelector(".button")

const gameColors = [
    ["green", "red", "blue", "blue", "yellow", "red", "blue", "green", "red", "blue"],
    ["blue", "yellow", "green", "red", "yellow", "blue", "green", "red", "yellow", "green"],
    ["yellow", "blue", "red", "blue", "green", "red", "blue", "yellow", "red", "red"],
    ["red", "yellow", "green", "yellow", "blue", "green", "red", "yellow", "green", "blue"]
]

let colors = gameColors[Math.floor(Math.random()*gameColors.length)]

let numberOfColors = 4;

let index = 0;

round.innerHTML = `Round: ${numberOfColors-3}`


container.addEventListener("click", (e) => {
    let color = e.target.className.split(" ")[1]

    if(color === colors[index]){
        
        index++

        if(index === numberOfColors){
            userColors = [];
            index = 0;
            setTimeout(() => {
                if(numberOfColors < colors.length){
                    numberOfColors++
                    round.innerHTML = `Round: ${numberOfColors-3}`
                }
                playGame()
            }, 200)
        }  

    }else {
        alert("perdiste")
        colors = gameColors[Math.floor(Math.random()*gameColors.length)]
        numberOfColors = 4;
        round.innerHTML = `Round: ${numberOfColors-3}`;
        userColors = [];
        index = 0;
    }
    
})


playBtn.addEventListener("click", () => {
    if(numberOfColors === 4){
        playGame()
    }
})

const playGame = () => {
    let n = 0;

    let interval = setInterval(() => {
        if(colors[n] === "blue"){
            blue.classList.add("blus")
            setTimeout(() => {
                blue.classList.remove("blus")
            }, 250)
        }
        if(colors[n] === "red"){
            red.classList.add("res")
            setTimeout(() => {
                red.classList.remove("res")
            }, 250)
        }
        if(colors[n] === "yellow"){
            yellow.classList.add("yellos")
            setTimeout(() => {
                yellow.classList.remove("yellos")
            }, 250)
        }
        if(colors[n] === "green"){
            green.classList.add("grin")
            setTimeout(() => {
                green.classList.remove("grin")
            }, 250)
        }
        
        n++
        if(n === numberOfColors){
            window.clearInterval(interval)
        }

    }, 800)
}







