function getPin() {
    const random = Math.random() * 10000
    const pin = (random + "").split(".")[0]
    if (pin.length == 4) {
        return pin
    }
    else {
        return getPin()
    }
}
//display generate pin
function generatePin() {
    const pinInput = document.getElementById("pin")
    pinInput.value = getPin()
}
//handle calculate button
const buttonContainer = document.getElementById("digits-container").addEventListener("click", function (event) {
    const digit = event.target.innerText
    if (isNaN(digit)) {
        if (digit === "C") {
            const typedInput = document.getElementById("typedPin")
            typedInput.value = ""
        }
    }
    else {
        const typedInput = document.getElementById("typedPin")
        typedInput.value = typedInput.value + digit
    }
})
var limitCounter=0
//verify pin
function verifyPin() {
    const pin = document.getElementById("pin").value
    const typedPin = document.getElementById("typedPin").value
    if ((pin != typedPin)) {
        displayMatchResult("none", "block")
        limitCounter++
        if(limitCounter<=3){
            displayLimit(limitCounter)
        }
        else{
            limitCounter=0
            alert("Reload your website and try again!")
            location.reload()
        }
    }
    else {
        displayMatchResult("block", "none")
        const limitText = document.getElementById("limitResult")
        limitText.innerText="3 try left"
        limitCounter=0
    }
}

const displayLimit = limit =>{
    const limitText = document.getElementById("limitResult")
    limitText.innerText=`Attempt ${limit}. ${3-limit} try left`
}

//displaying result
function displayMatchResult(correctStatus, inCorrectStatus) {
    const correct = document.getElementById("correctPin")
    correct.style.display = correctStatus
    const incorrect = document.getElementById("incorrectPin")
    incorrect.style.display = inCorrectStatus
}