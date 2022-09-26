let homeScore = document.getElementById("home")
console.log(homeScore)
let guestScore = document.getElementById("guest")


let homeResult = 0
let guestResult = 0
console.log(score)

function add1Point() {
    homeResult += 1
    homeScore.textContent = homeResult
}

function add2Points() {
    homeResult += 2
    homeScore.textContent = homeResult
}

function add3Points() {
    homeResult += 3
    homeScore.textContent = homeResult
}

function guest1Point() {
    guestResult += 1
    guestScore.textContent = guestResult
}

function guest2Points() {
    guestResult += 2
    guestScore.textContent = guestResult
}

function guest3Points() {
    guestResult += 3
    guestScore.textContent = guestResult
}

 function reset() {
    homeScore.textContent = 0
    guestScore.textContent = 0
    homeResult = 0
    guestResult = 0
}