let heights = [];
let headers = document.querySelectorAll('.collapsible-header')
let bodies = document.querySelectorAll('.collapsible-body')
let Ostatus = []
// window.addEventListener('DOMContentLoaded', () => {
//     document.querySelectorAll('.collapsible-body').forEach((collapsed, i) => {
//         heights.push(collapsed.getBoundingClientRect().height)
//         let collapsedC = 'collapsed-' + i
//         let (...collapsedC) = false
//         Ostatus.push()
//     })
// })
headers.forEach((header, i) => {
    header.addEventListener('click', () => {
        console.log('bonga', header.nextElementSibling.getBoundingClientRect().height)
        if (header.nextElementSibling.getBoundingClientRect().height === 0) {
            const vpadding = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--collapsible-vpadding'))
            console.log(vpadding)
            header.nextElementSibling.style.height = (header.nextElementSibling.scrollHeight + vpadding*2) + 'px'
            header.nextElementSibling.classList.add('collapsible-padding')
            header.classList.add('expanded')
        }
        else {
            header.nextElementSibling.style.height = '0px'
            header.nextElementSibling.classList.remove('collapsible-padding')
            header.classList.remove('expanded')
        }
    })
})