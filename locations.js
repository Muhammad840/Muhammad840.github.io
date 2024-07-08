

let keys = ['title', 'address', 'number', 'altNumber', 'src', 'position', 'email', 'head'];
let args = keys;
let keyDetails = [keys[1], keys[2], keys[3], keys[6], keys[7]]
let dropdown = document.querySelector('.options')
let selected = document.querySelector('.map__selectbox')
let details = document.querySelector('.map__details')
let officeLis = Array.from(dropdown.children)
let markers = Array.from(document.querySelectorAll('.marker'))
let mapiFrame = document.querySelector('.mapiFrame')
const 
Giza = {
    [keys[0]]: 'Giza',
    [keys[1]]: '7 St.Al-Bustan Al-Saaidi, Taalat Harb, Cairo',
    [keys[2]]: '01000792076',
    [keys[3]]: '23900531',
    [keys[4]]: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d218360.36364995778!2d29.814800765744582!3d31.224034935279008!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f5c49126710fd3%3A0xb4e0cda629ee6bb9!2sAlexandria%2C%20Alexandria%20Governorate!5e0!3m2!1sen!2seg!4v1669403865343!5m2!1sen!2seg',
    [keys[5]]: ['39.3%', '13.9%'],
    [keys[6]]: 'Alex@gmail.com',
    [keys[7]]: 'Eissa Umran'
},
Alexandria = {
    [keys[0]]: 'Alexandria',
    [keys[1]]: 'Nagib St.31',
    [keys[2]]: '0345',
    [keys[3]]: '003336',
    [keys[4]]: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d218360.36364995778!2d29.814800765744582!3d31.224034935279008!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f5c49126710fd3%3A0xb4e0cda629ee6bb9!2sAlexandria%2C%20Alexandria%20Governorate!5e0!3m2!1sen!2seg!4v1669403865343!5m2!1sen!2seg',
    [keys[5]]: ['39.3%', '13.9%'],
    [keys[6]]: 'Alex@gmail.com',
    [keys[7]]: 'Eissa Umran'
},
Cairo = {
    [keys[0]]: 'Cairo',
    [keys[1]]: 'Giza ,St15',
    [keys[2]]: '1554',
    [keys[3]]: '2244',
    [keys[4]]: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55251.37709964616!2d31.223444832512136!3d30.05948381032293!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583fa60b21beeb%3A0x79dfb296e8423bba!2sCairo%2C%20Cairo%20Governorate!5e0!3m2!1sen!2seg!4v1669431372955!5m2!1sen!2seg',
    [keys[5]]: ['55.2%', '20.4%'],
    [keys[6]]: 'Cairo@gmail.com',
    [keys[7]]: 'Ahmed Al Khalil'
},
Luxor = {
    [keys[0]]: 'Luxor',
    [keys[1]]: 'Giza ,St15',
    [keys[2]]: '1554',
    [keys[3]]: '2244',
    [keys[4]]: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57524.58379778189!2d32.624447407576476!3d25.69493696864118!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x144915cf52cd95cd%3A0xe0f5dd2b8b1c0e96!2sLuxor%2C%20Luxor%20City%2C%20Luxor%2C%20Luxor%20Governorate!5e0!3m2!1sen!2seg!4v1669439787355!5m2!1sen!2seg',
    [keys[5]]: ['64.6%', '55.7%'],
    [keys[6]]: 'bingbong@gmail.com',
    [keys[7]]: 'Ibrahim Yaqub'
}

let offices = [Giza, Alexandria, Cairo, Luxor, Luxor, Luxor]

/*       Dropdown display*/
document.body.addEventListener('click', (e) => {
    if (document.querySelector('.expanded') && e.target !== selected) {
        dropdown.classList.remove('expanded')
    }
})

selected.addEventListener('click', () => {
    dropdown.classList.toggle('expanded')
})
/* Iterating office objects*/
function Iterate(obje) {
    obje[Symbol.iterator] = function* () {
        yield obje[keys[0]];
        yield obje[keys[1]];
        yield obje[keys[2]];
        yield obje[keys[3]];
        yield obje[keys[4]];
        yield obje[keys[5]];
    }
}
offices.forEach(Iterate)
/*                    Add existent offices       */
offices.forEach(office => {
    console.log(...office)
    addOffice(...office)
})
/*                    Add new Office to dropdown */
function addOffice(...args) {
    const newOffice = {}
    console.log(args)
    keys.forEach((key, i) => {
        newOffice[key] = args[i]
    })
    offices.push(newOffice)
    implement(dropdown, newOffice[keys[0]], newOffice[keys[0]])
    addMarker(newOffice)
    officeLis = Array.from(dropdown.children)
    markers = Array.from(document.querySelectorAll('.marker'))
    return newOffice
}

function implement(dropdown, content, classname) {
    const newItem = document.createElement("div")
    newItem.classList.add('option')
    newItem.classList.add(classname)
    newItem.appendChild(document.createTextNode(content))
    dropdown.appendChild(newItem)
}

function addMarker(office) {
    const newMarker = document.createElement("div")
    newMarker.className = 'marker marker__' + office[keys[0]]
    console.log(office)
    const x = office['position'][0]
    y = office['position'][1]
    newMarker.style.cssText += 'left: ' + x + '; top: ' + y + ';'
    const newIco = document.createElement("i")
    newIco.className = 'fa-solid fa-location-dot'
    newMarker.appendChild(newIco)
    document.querySelector('.map__image').appendChild(newMarker)
}
/*          Add office detail elements       */
keyDetails.forEach(key => {
    const li = document.createElement('LI')
    const span = document.createElement('span')
    /*const textNode = document.createTextNode(key)
    span.appendChild(textNode)
    */
    li.appendChild(span)
    li.classList.add('map__info__' + key)
    details.appendChild(li)
    const keyEl = document.querySelector('.map__info__' + key)
    if (keyEl) {
        let textN;
        switch (keyDetails.indexOf(key)) {
            case 0:
            textN = document.createTextNode('Address:')
            break
            case 1:
            textN = document.createTextNode('Phone:')
            break
            case 2:
            textN = document.createTextNode('Alternate Phone:')
            break
            case 3:
            textN = document.createTextNode('Email Adress:')
            break
            case 4:
            textN = document.createTextNode('Head Manager:')
            break
            default:
            textN = document.createTextNode('Unknown info:')
        }
        console.log(textN)
        keyEl.childNodes[0].nodeValue = ''
        keyEl.firstElementChild.appendChild(textN)
    }
})

/*           Switch chosen office */
function officeSwitch(element) {
    return function officeSwitchIn() {
        let officeName
        if (Array.from(element.classList).includes('marker')) {
            officeName = element.classList[1].substring(element.classList[1].indexOf('__') + 2)
            console.log(officeName)
        }
        else {
            officeName = element.classList[1]
        }
        selected.childNodes[0].nodeValue = officeName
        mapSwitch(element, mapiFrame, officeName)
        markersSwitch(element, officeName)
        detailsSwitch(element, officeName)
    }
}

officeLis.forEach(Li => {
    Li.addEventListener('click', officeSwitch(Li))
})
markers.forEach(marker => {
    marker.addEventListener('click', officeSwitch(marker))
})

function mapSwitch(element, mapiFrame, officeName) {
    offices.forEach(office => console.log(office[keys[0]]))
    const curOffice = offices.find(obj => obj[keys[0]] === officeName)
    mapiFrame.setAttribute('src', curOffice.src)
}

function detailsSwitch(element, officeName) {
    const curOffice = offices.find(obj => obj[keys[0]] === officeName)
    keyDetails.forEach(key => {
        const LI = document.querySelector('.map__info__' + key)
        const LINodes = LI.childNodes
        if (LINodes.length > 1) {
            LI.removeChild(LINodes[LINodes.length -1])
        }
        LI.appendChild(document.createTextNode(curOffice[key]))
    })
}

function markersSwitch(element, officeName) {
    const curOffice = offices.find(obj => obj[keys[0]] === officeName)
    const activeMk = document.querySelector('.active-marker')
    if (activeMk) {
        activeMk.classList.remove('active-marker')
    }
    document.querySelector('.marker__' + officeName).classList.add('active-marker')
}