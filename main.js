const box = document.querySelector('#box')

let positionX = 0
let positionY = 0

const moveBox = () => {
    if (positionX < 450 && positionY === 0) {
        positionX++
        box.style.left = `${positionX}px`
    } else if (positionX === 450 && positionY < 450) {
        positionY++
        box.style.top = `${positionY}px`
    } else if (positionX > 0 && positionY === 450) {
        positionX--
        box.style.left = `${positionX}px`
    } else if (positionX === 0 && positionY > 0) {
        positionY--
        box.style.top = `${positionY}px`
    }
    setTimeout(moveBox, 1)
}

moveBox()


const showTime = document.querySelector('#time')
const start = document.querySelector('#start')
const stop = document.querySelector('#stop')
const resume = document.querySelector('#resume')
const clear = document.querySelector('#clear')

let second = 0
let timeStart = null
let timeResume = null

start.onclick = () => {
    timeStart = setInterval(() => {
        second++
        showTime.innerText = second
    }, 1000)
    start.style.display = 'none'
    resume.style.display = 'none'
}

stop.onclick = () => {
    clearInterval(timeStart)
    clearInterval(timeResume)
    resume.style.display = 'inline-block'
}

resume.onclick = () => {
    if(second === 0){
        return null
    }else {
        timeResume = setInterval(() => {
        second++
        showTime.innerText = second
    }, 1000)
    }
    resume.style.display = 'none'
    start.style.display = 'none'
}


clear.onclick = () => {
    second = 0
    showTime.innerText = second
    start.style.display = 'inline-block'
    resume.style.display = 'none'
}



