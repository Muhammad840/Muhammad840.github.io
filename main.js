Array.from(document.querySelector('.right-nav').children).forEach((item, i) => {
})
/*                              NAV DROPDOWN */
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
miniDropdowns.forEach(miniDropdown => {
    miniDropdown.parentElement.addEventListener('mouseenter', () => {
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

import {switchmode, navBright} from './mode.js'

if (navBright === false) {
    dropdowns.forEach(dropdown => {
        Array.from(dropdown.children).filter(child => child.nodeName === "LI").forEach(child => {
            child.addEventListener('mouseenter', () => {
                Array.from(child.children).filter(link => link.nodeName === "A").forEach(link => {
                    link.style.cssText += "background-color: rgba(0, 0, 0, 0.8);"
                })
            })
            child.addEventListener('mouseleave', () => {
                Array.from(child.children).filter(link => link.nodeName === "A").forEach(link => {
                    link.style.cssText += "background-color: rgba(0, 0, 0, 0.4);"
                })
            })
        })
    })
}

/*                          SCHEME SWITCH */
// const switchers = document.querySelectorAll('.switch__control')
// const root = document.querySelector(':root')
// let light_on = true

// switchers.forEach(switcher => switcher.addEventListener('click', switchmode))
// if (localStorage.getItem('mode') === 'dark') 
//     switchmode();

// function switchmode() {
//     document.querySelectorAll('.switch__icon').forEach(icon => {
//         icon.classList.toggle('off')
//         icon.classList.toggle('toleft')
//     })
//     switchers.forEach(switcher => switcher.classList.toggle('bg-slight'))
//     if (light_on) {
//         root.style.setProperty('--bg-color-1', 'rgb(18 17 16)')
//         root.style.setProperty('--bg-color-2', 'rgb(28 28 28)')
//         root.style.setProperty('--bg-color-3', 'rgb(36 37 38)')
//         root.style.setProperty('--footer-bg-1', 'rgb(10, 10, 10)')
//         root.style.setProperty('--footer-bg-2', 'rgb(0, 0, 0)')
//         root.style.setProperty('--tx-color-1', 'rgb(239 231 229)')
//         root.style.setProperty('--brand-color-2', 'rgb(201,90,38)')
//         root.style.setProperty('--hover-color', 'rgba(0,0,0,0.3)')
//         root.style.setProperty('--input-color', 'rgb(223, 226, 231)')
//         root.style.setProperty('--input-color-2', 'rgb(40, 40, 40)')
//         root.style.setProperty('--shadow-1', '0px 0px 20px 5px rgb(255 255 255 / 4%)')
//         light_on = false;
//         localStorage.setItem('mode', 'dark')
//     }
//     else {
//         root.style.setProperty('--bg-color-1', 'rgb(240, 240, 240)')
//         root.style.setProperty('--bg-color-2', 'white')
//         root.style.setProperty('--bg-color-3', 'rgb(223, 226, 231)')
//         root.style.setProperty('--footer-bg-1', 'rgb(37, 40, 51)')
//         root.style.setProperty('--footer-bg-2', 'rgb(21, 23, 30)')
//         root.style.setProperty('--tx-color-1', 'rgb(70,70,77)')
//         root.style.setProperty('--brand-color-2', 'rgba(253, 102, 2, 0.75)')
//         root.style.setProperty('--hover-color', 'rgba(0,0,0,0.02)')
//         root.style.setProperty('--input-color', '#777')
//         root.style.setProperty('--input-color-2', 'rgb(55, 60, 80)')
//         root.style.setProperty('--shadow-1', '0px 0px 20px 5px rgb(0 0 0 / 7%)')
//         light_on = true;
//         localStorage.setItem('mode', 'light')
//     }
// }

// export {switchers, root, light_on, switchmode}

/*                  IDK SOMETHING RANDOM
const boxes = document.querySelector('.boxes')
const boxesGapPx = window.getComputedStyle(boxes, null).getPropertyValue('row-gap')
const imgHeightPx = window.getComputedStyle(document.querySelector('#height-subject'), null).getPropertyValue('height')
let boxesGap = parseInt(boxesGapPx.substring( 0,  boxesGapPx.length - 2))
let imgHeight = parseInt(imgHeightPx.substring( 0,  imgHeightPx.length - 2))
console.log(getComputedStyle(boxes, null))
console.log((imgHeight*2) + boxesGap)
boxes.style.height =  (imgHeight*2) + boxesGap + 8 + 'px'
*/
/*                          NAVBAR BG */
let menuOpened = false;

let scrolling;
window.addEventListener('scroll',() => {
    scrolling = true;
})
let scrollInterval = setInterval(scrollWatch, 300)
function scrollWatch() {
    if (scrolling === true) {
        scrolling = false;
        const scrolled = window.scrollY
        if (menuOpened === false) {
            console.log(menuOpened)
            if (document.querySelector('.flatNav')) {
                if (!navBright) {
                    if (scrolled > 100) {
                        document.querySelector('.nav').style.backgroundColor = "rgba(0 ,0 ,0, 0.4)"
                    }
                    else {
                        document.querySelector('.nav').style.backgroundColor = "transparent"
                    }
                }
            }
            else {
                document.querySelector('.nav').style.backgroundColor = "rgba(0 ,0 ,0, 0.4)"
            }
        }
    }
}


/*                      HAMBURGER NAVBAR */
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
        if (navBright === false)
            nav.style.backgroundColor = "rgba(0 ,0 ,0, 0.8)";
        nav.style.minHeight = itemHeight*iCount + iPadding*2 + 64 + "px"
        hamburger.style.maxHeight = itemHeight*iCount + "px"
        menuOpened = true
    }
    else {
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
        document.querySelectorAll('.mini-item').forEach(miniItem => {
            if (miniItem.className.includes('opened')) {
                miniItem.classList.remove('opened')
                const parentHeight = miniItem.parentElement.style.height
                //miniItem.parentElement.style.height = (parseInt(parentHeight.substring(0 ,parentHeight.length -2)) - miniHeight) + 'px'
                miniItem.parentElement.style.height = 0
                miniItem.nextElementSibling.style.height = 0
                miniItem.nextElementSibling.classList.add('trans')
            }
        })
        if (document.querySelector('.rt-90')) {
            document.querySelectorAll('.rt-90').forEach(rt => rt.classList.remove('rt-90'))
        }
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
            const miniItemHeight = Array.from(item.nextElementSibling.children).filter(mini => mini.className.includes('submini-items')).length * itemHeight
            if (item.className.includes('opened')) {
                miniOpened += 1
                item.nextElementSibling.style.height = miniHeight - miniItemHeight + 'px'
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

document.querySelectorAll('.mini-item').forEach(mini => {
    mini.addEventListener('click', () => {
        if (mini.nextElementSibling && mini.nextElementSibling.className.includes('submini-items')) {
            mini.nextElementSibling.classList.toggle('trans')
            mini.classList.toggle('opened')
            const miniHeight = Array.from(mini.nextElementSibling.children).length * itemHeight
            if (mini.className.includes('opened')) {
                miniOpened += 1
                mini.nextElementSibling.style.height = miniHeight + 'px'
                const parentHeight = mini.parentElement.style.height
                mini.parentElement.style.height = (parseInt(parentHeight.substring(0 ,parentHeight.length -2)) + miniHeight) + 'px'
                nav.style.minHeight = navObj.height + miniHeight + 'px'
                Array.from(mini.children).forEach(child => {
                    if (child.className.includes('fa-chevron-left')) {
                        child.classList.add('rt-90')
                    }
                })
            }
            else {
                miniOpened -= 1
                mini.nextElementSibling.style.height = '0px'
                const parentHeight = mini.parentElement.style.height
                mini.parentElement.style.height = (parseInt(parentHeight.substring(0 ,parentHeight.length -2)) - miniHeight) + 'px'
                nav.style.minHeight = navObj.height - miniHeight + 'px'
                Array.from(mini.children).forEach(child => {
                    if (child.className.includes('fa-chevron-left')) {
                        child.classList.remove('rt-90')
                    }
                })
            }
        }
    })
})

/*                    Leaders



/*                  RANDOM TEST
let moi = [];
let oll = document.querySelectorAll('.message-2CShn3')
Array.from(oll.children).forEach(ch1 => {
    Array.from(ch1.children).forEach(ch2 => {
        if (ch2.nodeName === 'h3') {
            
        }
    })
})
let allMessages = [];
let myMessages = [];
let prevMessages =[];
function refresho() {
    Array.from(document.querySelectorAll('.button-3bklZh')).forEach(btn => {
        if (!btn.nextElementSibling) {
            if (btn.previousElementSibling.getAttribute('aria-label') === 'Edit') {
                myMessages.push(btn)
            }
        }
    })
}
function deleteo() {
    myMessages.forEach(msg => {
        msg.click()
    })
    Array.from(document.querySelectorAll('#message-actions-delete')).forEach(dlto => {
        dlto.click()
    })
    Array.from(document.querySelectorAll('.colorRed-rQXKgM')).forEach(dlto => {
        dlto.click()
    })
    prevMessages = myMessages;
    myMessages =[];
}                   TEST END
*/
/*                         MODAL */
/*
document.querySelector('.btn-3').addEventListener('click', () => {
    document.querySelector('.modal').classList.add('modal-on')
})

function modalClose() {
    document.querySelector('.modal').classList.remove('modal-on')
}

document.querySelector('.close').addEventListener('click', modalClose)
document.querySelector('.modal').addEventListener('click', (e) => {
    if (e.target === e.currentTarget) {
        modalClose()
    }
})*/

/*                              FOOTER 
*/

if (document.querySelector('.checkbox-layer')) {
    document.querySelectorAll('.checkbox').forEach(checkbox => {
        checkbox.addEventListener('click', () => {
            Array.from(checkbox.children).forEach(checkboxLayer => {
                Array.from(checkboxLayer.children).forEach(check => {
                    if (check.className.includes('checkbox-mark')) {
                        check.classList.toggle('checked')
                    }
                    else if (check.type == 'checkbox') {
                        check.checked = !check.checked
                    }
                })
            })
        })
    })
}

/*                          LOADER + ON LOAD */
window.addEventListener('load', () => {
    // Logo animation
    document.querySelector('#logo').classList.add('logo-animation')
    //  Loader
    if (document.querySelector('.loader')) {
        document.querySelector('.loader').style.cssText += 'visibility: hidden;'
    }
    //  NAVBAR animation
    Array.from(document.querySelector('.right-nav').children).forEach((child, i) => {
        if (child.nodeName === 'LI') {
            child.style.cssText += 'animation: 1s ease-out ' + (i*0.15) + 's nav-li;'
            child.addEventListener('animationend', () => {
                child.style.opacity = '1'
            })
        }
    })
    //  Flip cards transition
    if (document.querySelector('.boxes')) {
        Array.from(document.querySelector('.boxes').children).forEach((box, i) => {
            box.style.transition = 'all 0.5s ' + ((i*0.1) + 0.1) + 's ease-out'
        })
    }
    //    services / Scrumb transition 
    if (document.querySelector('.scrumb')) {
        Array.from(document.querySelector('.scrumb').children).forEach((item, i) => {
            let delay = (i*0.1*1.3) + 0.2
            item.style.transition = 'all .5s ' + delay + 's ease-out'
            item.addEventListener('transitionend', transitionResetter(item))
        })
        Array.from(document.querySelectorAll('.scrumb__icon')).forEach((icon, i) => {
            let delay = (i*0.1*1.3) + 0.2
            icon.style.transition = 'all 0.7s ' + delay + 's cubic-bezier(0.600, 0.160, 0.355, 1.865)'
        })
    }
    //    services / airline transition 
    if (document.querySelector('.airline')) {
        Array.from(document.querySelectorAll('.airline__icon')).forEach((item, i) => {
            let delay = (i*0.1*1.7) + 0.2
            item.style.transition = 'all .5s ' + delay + 's ease-out'
        })
        Array.from(document.querySelectorAll('.airline__list p::after')).forEach((item, i) => {
            let delay = (i*0.1*1.7) + 0.2
            item.style.transition = 'all .5s ' + delay + 's ease-out'
        })
    }
    //    services / fleet transition 
    if (document.querySelector('.transportation')) {
        Array.from(document.querySelectorAll('.transport__list')).forEach((item, index) => {
            let delay = (index*0.1*1.7) + 0.2
            item.style.transition = 'all .5s ' + delay + 's ease-out'
            Array.from(item.children).forEach((child, i) => {
                let subDelay = delay + ((i*0.1*1.7) + 0.2)
                child.style.transition = 'all .5s ' + subDelay + 's ease-out'
            })
        })
    }
    //      About / experts transition
    if (document.querySelector('.experts-holder')) {
        Array.from(document.querySelector('.experts-holder').children).forEach((expert, i) => {
            expert.style.transition = 'all 0.5s ' + ((i*0.1) + 0.1) + 's ease-out'
        })
    }
    //      About / clients transition
    if (document.querySelector('.client-img-cover')) {
        Array.from(document.querySelectorAll('.client-img-cover')).forEach((cover, i) => {
            cover.style.transition = 'all 0.5s ' + ((i*0.1) + 0.1) + 's ease-out'
        })
    }
    // Footer transition
    if (document.querySelector('footer')) {
        document.querySelectorAll('footer ul').forEach(ul => {
            Array.from(ul.children).forEach((li, i) => {
                if (i !== 0) {
                    li.style.transition = 'all 0.5s ' + ((i*0.1) + 0.2) + 's ease-out'
                }
                else {
                    li.style.transition = 'all .5s var(--timing-1)'
                }
            })
            if (!ul.nextElementSibling) {
                Array.from(ul.firstElementChild.children).forEach((li, i) => {
                    if (i !== 0) {
                        li.style.transition = 'all 0.5s ' + ((i*0.1) + 0.2) + 's ease-out'
                    }
                    else {
                        li.style.transition = 'all .5s var(--timing-1)'
                    }
                })
            }
        })
    }
})

function transitionResetter(element) {
    function InnerRes() {
        element.style.transition = ''
        element.removeEventListener('transitionend', transitionResetter)
    }
    return InnerRes
}

/***********************************************
            Discover Links & Sections          *
************************************************
*/

function goToSection(chosenName) {
    if (document.URL.includes('discover')) {
        if (document.querySelector('.content__' + chosenName)) {
            if (document.querySelector('.active-content')) {
                document.querySelector('.active-content').classList.remove('active-content')
            }
            console.log(chosenName, '.content__' + chosenName)
            document.querySelector('.content__' + chosenName).classList.add('active-content')
        }
    }
    else {
        window.location.href = 'discover.html?name="' + chosenName + '"'
    }
}

document.querySelectorAll('.discovertrig li').forEach(li => {
    li.addEventListener('click', () => {
        if (!li.className.includes('click-disabled')) {
            if (li.closest('.ham')) {
                goToSection(li.classList[1])
            }
            else goToSection(li.id)
        }
    })
})


export {goToSection} 

/***********************************************
               Subscribe Validation            *
************************************************
*/
const subscribeTransit = document.querySelector('.subscribe-message').style.transition
const subsPadding = getComputedStyle(document.querySelector('.subscribe-message')).getPropertyValue('padding')
const subMessagePaddingStr = getComputedStyle(document.querySelector('.subscribe-message')).getPropertyValue('padding-bottom')
const subMessagePadding = parseInt(subMessagePaddingStr.substring(0, subMessagePaddingStr.length -1))
const subMessageHPaddingStr = getComputedStyle(document.querySelector('.subscribe-message')).getPropertyValue('padding-right')
const subMessageHPadding = parseInt(subMessageHPaddingStr.substring(0, subMessagePaddingStr.length -1))
console.log(subMessageHPadding)
console.log(subsPadding)
document.querySelector('.subscribe-message').style.padding = '0 ' + subMessageHPadding + 'px'
const subMessageHeight = document.querySelector('.subscribe-message').scrollHeight
let messageHidden = true;
function subscribeMessage(state) {
    const message = document.querySelector('.subscribe-message')
    message.style.transition = 'all 0.3s'
    message.style.height = '0'
    message.style.padding = '0 ' + subMessageHPadding + 'px'
    message.classList.add('hidden')
    message.classList.remove('success')
    message.classList.remove('warning')
    message.classList.remove('error')
    const ico = message.firstElementChild
    ico.className = ''
    switch (state) {
        case 'success':
            message.style.height = message.lastElementChild.scrollHeight + (subMessagePadding*2) + 'px'
            message.style.padding = subsPadding
            message.classList.remove('hidden')
            message.classList.add('success')
            ico.className = 'fa-regular fa-circle-check'
            messageHidden = false;
        break
        case 'warning':
            message.style.height = message.lastElementChild.scrollHeight + (subMessagePadding*2) + 'px'
            message.style.padding = subsPadding
            message.classList.remove('hidden')
            message.classList.add('warning')
            ico.className = 'fa-regular fa-circle-exclamation'
            messageHidden = false;
        break
        case 'error':
            message.style.height = message.lastElementChild.scrollHeight + (subMessagePadding*2) + 'px'
            message.style.padding = subsPadding
            message.classList.remove('hidden')
            message.classList.add('error')
            ico.className = 'fa-solid fa-triangle-exclamation'
            messageHidden = false;
        break
        default:
        messageHidden = true
        console.log('default ran')
    };
    console.log(messageHidden)
}

document.querySelector('#subscribe-btn').addEventListener('click', () => {
    const message = document.querySelector('.subscribe-message').lastElementChild
    const email = document.querySelector('#subscribe-email').value
    if (email === '') {
        message.textContent = 'Please enter an email address, this is a test for three lines'
        subscribeMessage('error')
    }
    else if (
        !email.includes('@')
        || !email.includes('.')
        || email.indexOf('@') > email.lastIndexOf('.')
        || email.indexOf('@') !== email.lastIndexOf('@')
        || email.indexOf('@') == 0
        || email.lastIndexOf('@') == email.length-1
        || email.lastIndexOf('.') == email.length-1
    ) 
    {
        message.textContent = 'Invalid email address'
        subscribeMessage('error')
    }
    else if (!email.includes('gmail.com')) {
        message.textContent = 'Untrusted domain'
        subscribeMessage('warning')
    }
    else {
        message.textContent = 'Subscribed'
        subscribeMessage('success')
    }
    setTimeout(subscribeMessage, 4000)
})