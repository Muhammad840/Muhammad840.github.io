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
        if (header.nextElementSibling) {
            if (header.nextElementSibling.getBoundingClientRect().height === 0) {
                const vpadding = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--collapsible-vpadding'))
                //header.nextElementSibling.style.height = (header.nextElementSibling.scrollHeight + vpadding*2) + 'px'
                //header.nextElementSibling.classList.add('collapsible-padding')
                let items = Array.from(header.nextElementSibling.children)
                items.forEach(item => {
                    if (item.className.includes('collapse-item')) {
                        item.classList.add('collapsible-padding')
                    }
                })
                header.nextElementSibling.style.height = (header.nextElementSibling.scrollHeight + vpadding*items.length*2) + 'px'
                header.classList.add('expanded')
            }
            else {
                //header.nextElementSibling.classList.remove('collapsible-padding')
                Array.from(header.nextElementSibling.children).forEach(item => {
                    if (item.className.includes('collapse-item')) {
                        item.classList.remove('collapsible-padding')
                    }
                })
                header.nextElementSibling.style.height = '0px'
                header.classList.remove('expanded')
            }
        }
    })
})