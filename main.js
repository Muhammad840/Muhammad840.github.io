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
/*
const boxes = document.querySelector('.boxes')
const boxesGapPx = window.getComputedStyle(boxes, null).getPropertyValue('row-gap')
const imgHeightPx = window.getComputedStyle(document.querySelector('#height-subject'), null).getPropertyValue('height')
let boxesGap = parseInt(boxesGapPx.substring( 0,  boxesGapPx.length - 2))
let imgHeight = parseInt(imgHeightPx.substring( 0,  imgHeightPx.length - 2))
console.log(getComputedStyle(boxes, null))
console.log((imgHeight*2) + boxesGap)
boxes.style.height =  (imgHeight*2) + boxesGap + 8 + 'px'
*/

let menuOpened = false;

let scrolling;
window.addEventListener('scroll',() => {
    scrolling = true;
})
scrollInterval = setInterval(scrollWatch, 300)
function scrollWatch() {
    if (scrolling === true) {
        scrolling = false;
        const scrolled = window.scrollY
        if (menuOpened === false) {
            console.log(menuOpened)
            if (scrolled > 100) {
                document.querySelector('.nav').style.backgroundColor = "rgba(0 ,0 ,0, 0.4)"
            }
            else {
                document.querySelector('.nav').style.backgroundColor = "transparent"
            }
        }
    }
}


const menu = document.getElementById("menu");
const hamburger = document.querySelector('.hamburger-holder')
const nav = document.querySelector('.nav')
const navObj = {
    get height() {
        return nav.getBoundingClientRect().height
    }
}
const iCount = document.querySelectorAll('.item').length
const iPaddingStr = window.getComputedStyle(document.querySelector('.item')).getPropertyValue('padding-top')
const iPadding = parseInt(iPaddingStr.substring( 0, iPaddingStr.length - 2))
const itemHeightStr = window.getComputedStyle(document.querySelector('.item')).getPropertyValue('height')
const itemHeight = parseInt(itemHeightStr.substring( 0, itemHeightStr.length - 2))
const oHeight = iPadding*2*iCount
menu.addEventListener("click", () => {
    menu.classList.toggle("active");
    hamburger.classList.toggle("trans")
    if (menuOpened === false) {
        nav.style.backgroundColor = "rgba(0 ,0 ,0, 0.8)"
        nav.style.minHeight = itemHeight*iCount + iPadding*2 + 64 + "px"
        hamburger.style.maxHeight = itemHeight*iCount + "px"
        console.log(iPadding)
        menuOpened = true
    }
    else {
        console.log("asdddd")
        nav.style.minHeight = 64 + "px"
        hamburger.style.maxHeight = "0px"
        document.querySelectorAll('.mini-items').forEach(it => {
            it.style.cssText += 'height: 0; transform: rotateX: 0deg;'
            if (!it.className.includes('trans')) {
                it.classList.add('trans')
            }
        })
        document.querySelectorAll('.item').forEach(item => {
            if (item.className.includes('opened')) {
                item.classList.remove('opened')
            }
        })
        menuOpened = false;
    }
});
let miniOpened = 0;

document.querySelectorAll('.item').forEach(item => {
    item.addEventListener('click', () => {
        if (item.nextElementSibling.className.includes('mini-items')) {
            item.nextElementSibling.classList.toggle('trans')
            item.classList.toggle('opened')
            const miniHeight = Array.from(item.nextElementSibling.children).length * itemHeight
            if (item.className.includes('opened')) {
                miniOpened += 1
                console.log(miniHeight)
                item.nextElementSibling.style.height = miniHeight + 'px'
                nav.style.minHeight = navObj.height + miniHeight + 'px'
                Array.from(item.children).forEach(child => {
                    if (child.className.includes('fa-chevron-left')) {
                        child.classList.add('rt-90')
                    }
                })
            }
            else {
                miniOpened -= 1
                item.nextElementSibling.style.height = '0px'
                nav.style.minHeight = navObj.height - miniHeight + 'px'
                Array.from(item.children).forEach(child => {
                    if (child.className.includes('fa-chevron-left')) {
                        child.classList.remove('rt-90')
                    }
                })
            }
        }
    })
})
