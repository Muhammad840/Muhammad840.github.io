const switchers = document.querySelectorAll('.switch__control')
const root = document.querySelector(':root')
let light_on = true
let navBright = false

switchers.forEach(switcher => switcher.addEventListener('click', switchmode))
if (localStorage.getItem('mode') === 'dark') {
    switchmode();
}
else {
    if (document.querySelector('.flatNav')) {
        document.querySelector('.flatNav').classList.add('bright-nav')
        navBright = true
    }
}

    root.style.setProperty('--loader-bg', 'white')
function switchmode() {
    document.querySelectorAll('.switch__icon').forEach(icon => {
        icon.classList.toggle('off')
        icon.classList.toggle('toleft')
    })
    switchers.forEach(switcher => switcher.classList.toggle('bg-slight'))
    if (light_on) {
        root.style.setProperty('--bg-color-1', 'rgb(18 17 16)')
        root.style.setProperty('--bg-color-2', 'rgb(28 28 28)')
        root.style.setProperty('--bg-color-3', 'rgb(36 37 38)')
        root.style.setProperty('--footer-bg-1', 'rgb(10, 10, 10)')
        root.style.setProperty('--footer-bg-2', 'rgb(0, 0, 0)')
        root.style.setProperty('--tx-color-1', 'rgb(239 231 229)')
        root.style.setProperty('--brand-color-2', 'rgb(201,90,38)')
        root.style.setProperty('--hover-color', 'rgba(0,0,0,0.3)')
        root.style.setProperty('--input-color', 'rgb(223, 226, 231)')
        root.style.setProperty('--input-color-2', 'rgb(40, 40, 40)')
        root.style.setProperty('--shadow-1', '0px 0px 20px 5px rgb(255 255 255 / 4%)')
        if (document.querySelector('nav.bright-nav')) 
            document.querySelector('nav.flatNav').classList.remove('bright-nav')
        navBright = false
        light_on = false;
        localStorage.setItem('mode', 'dark')
    }
    else {
        root.style.setProperty('--bg-color-1', 'rgb(240, 240, 240)')
        root.style.setProperty('--bg-color-2', 'white')
        root.style.setProperty('--bg-color-3', 'rgb(223, 226, 231)')
        root.style.setProperty('--footer-bg-1', 'rgb(37, 40, 51)')
        root.style.setProperty('--footer-bg-2', 'rgb(21, 23, 30)')
        root.style.setProperty('--tx-color-1', 'rgb(70,70,77)')
        root.style.setProperty('--brand-color-2', 'rgba(253, 102, 2, 0.75)')
        root.style.setProperty('--hover-color', 'rgba(0,0,0,0.02)')
        root.style.setProperty('--input-color', '#777')
        root.style.setProperty('--input-color-2', 'rgb(55, 60, 80)')
        root.style.setProperty('--shadow-1', '0px 0px 20px 5px rgb(0 0 0 / 7%)')
        if (document.querySelector('nav.flatNav')) {
            document.querySelector('nav.flatNav').classList.add('bright-nav')
            document.querySelector('nav.flatNav').style.backgroundColor = ''
        }
        navBright = true
        light_on = true;
        localStorage.setItem('mode', 'light')
    }
}

export {switchers, root, light_on, switchmode, navBright}