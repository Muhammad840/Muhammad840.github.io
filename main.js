Array.from(document.querySelector('.right-nav').children).forEach((item, i) => {
    item.addEventListener('animationend', () => {
        item.style.opacity = '1'
    })
    item.style.animationDelay = i*0.15 + 0.5 + 's'
})

let dropdowns = []
AddDropdownArray()
function AddDropdownArray() {
    document.querySelectorAll('.trig').forEach(dropdown => {
        Array.from(dropdown.children).filter(child => child.nodeName === "UL").forEach((child, ii) => {
            dropdowns.push(child)
        })
    })
}

dropdowns.forEach(dropdown => {
    Array.from(dropdown.children).filter(child => child.nodeName === "LI").forEach((child, i) => {
        child.style.animationDelay = i*0.05 + "s"
        child.addEventListener('animationend', () => {
            child.style.display = "flex"
            child.style.opacity = "1"
        })
    })
})

dropdowns.forEach(dropdown => {
    dropdown.addEventListener('animationend', () => {
        dropdown.style.cssText = "display: flex;"
    })
})

document.querySelectorAll('.trig').forEach(trig => {
    trig.addEventListener('mouseenter', () => {
        console.log("In")
        Array.from(trig.children).filter(dropdown => dropdown.nodeName === "UL").forEach((dropdown, ii) => {
            dropdown.style.cssText = "display: flex;"
            Array.from(dropdown.children).forEach((child, i) => {
                child.style.display = "flex"
                /* setTimeout( () => {
                    child.style.display = "flex"
                }, i*100)*/
            }) 
        })
    })
    trig.addEventListener('mouseleave', () => {
        console.log("Out")
        Array.from(trig.children).filter(dropdown => dropdown.nodeName === "UL").forEach((dropdown, ii) => {
            dropdown.style.cssText = "display: none;"
            Array.from(dropdown.children).forEach((child, i) => {
                child.style.display = "none"
                child.style.opacity = "0"
            })
        })
    })
})

let miniDropdowns = document.querySelectorAll('.mini-dropdown')
console.log(miniDropdowns)
miniDropdowns.forEach(miniDropdown => {
    miniDropdown.parentElement.addEventListener('mouseenter', () => {
        console.log(miniDropdown.parentElement)
        miniDropdown.style.display = "flex"
        Array.from(miniDropdown.children).filter(chiild => chiild.nodeName === "LI").forEach(chiild => {
            chiild.style.display = "flex"
        })
    })
    miniDropdown.parentElement.addEventListener("mouseleave", () => {
        miniDropdown.style.display = "none"
    })
    Array.from(miniDropdown.children).forEach(chiild => {
        chiild.addEventListener('animationend', () => {
            chiild.style.opacity = "1"
        })
    })
})

dropdowns.forEach(dropdown => {
    Array.from(dropdown.children).filter(child => child.nodeName === "LI").forEach(child => {
        child.addEventListener('mouseenter', () => {
            Array.from(child.children).filter(link => link.nodeName === "A").forEach(link => {
                link.style.cssText += "background-color: rgba(0, 0, 0, 0.8); color: rgb(253, 102, 2)"
            })
        })
        child.addEventListener('mouseleave', () => {
            Array.from(child.children).filter(link => link.nodeName === "A").forEach(link => {
                link.style.cssText += "background-color: rgba(0, 0, 0, 0.4); color: rgb(255, 255, 255)"
            })
        })
    })
})

const boxes = document.querySelector('.boxes')
const boxesGapPx = window.getComputedStyle(boxes, null).getPropertyValue('row-gap')
const imgHeightPx = window.getComputedStyle(document.querySelector('#height-subject'), null).getPropertyValue('height')
let boxesGap = parseInt(boxesGapPx.substring( 0,  boxesGapPx.length - 2))
let imgHeight = parseInt(imgHeightPx.substring( 0,  imgHeightPx.length - 2))

console.log((imgHeight*2) + boxesGap)
boxes.style.height =  (imgHeight*2) + boxesGap + 8 + 'px'