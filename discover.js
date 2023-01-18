import { goToSection } from "./main.js"


if (document.URL.substring(document.URL.length -4) !== "html") {
    if (document.URL.includes('?')) {
        const chosenName = document.URL.substring(document.URL.indexOf('%22') + 3, document.URL.lastIndexOf('%22'))
        console.log(chosenName)
        goToSection(chosenName)
    }
}

document.querySelectorAll('.collapse-item').forEach(item => {
    item.addEventListener('click', () => {
        console.log(item.classList[1])
        if (document.querySelector('.content__' + item.classList[1])) {
            goToSection(item.classList[1])
        }
    })
})

document.querySelectorAll('.collapsible-header').forEach(header => {
    if (Array.from(header.children).find(ico => ico.className.includes('fa-regular'))) {
        header.addEventListener('click', () => {
            if (header.firstElementChild.className.includes('fa-square-plus')) {
                header.firstElementChild.classList.remove('fa-square-plus')
                header.firstElementChild.classList.add('fa-square-minus')
            }
            else {
                header.firstElementChild.classList.remove('fa-square-minus')
                header.firstElementChild.classList.add('fa-square-plus')
            }
        })
    }
})

document.querySelector('.tags-swiper').addEventListener('click', () => {
    document.querySelector('.collapsible').classList.toggle('swiped')
})