const Leaders = Array.from(document.querySelectorAll('.person-holder'))
const infos = Array.from(document.querySelectorAll('.info'))
let current, txCurrent, next, txNext;
function leadersFn() {
    current = document.querySelector('.current')
    txCurrent = document.querySelector('.text-current')
    if (current.nextElementSibling) {
        next = current.nextElementSibling
    }
    else {
        next = Leaders[0]
    }
    if (txCurrent.nextElementSibling) {
        txNext = txCurrent.nextElementSibling
    }
    else {
        txNext = infos[0]
    }
    current.classList.remove('current')
    next.style.display = 'block'
    next.classList.add('current')
    txCurrent.classList.remove('text-current')
    txNext.style.display = 'flex'
    txNext.classList.add('text-current')
}
let leadersInt = setInterval(leadersFn, 3000)

Leaders.forEach((leader, i) => {
    leader.addEventListener('click',() => {
        document.querySelector('.current').classList.remove('current')
        leader.style.display = 'block'
        leader.classList.add('current')
        document.querySelector('.text-current').classList.remove('text-current')
        infos[i].style.display = 'flex'
        infos[i].classList.add('text-current')
        clearInterval(leadersInt)
        leadersInt = setInterval(leadersFn, 3000)
    })
})
/*
function carousel(element, speed) {
    element.style.cssText += 'overflow: hidden; display: flex; align-items: center;'
    let visibleWidth = element.width
    console.log(visibleWidth)
}

const carouselEl = document.querySelector('.carousel-container')
 
carousel(carouselEl, 5)
*/
