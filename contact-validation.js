
const contactTransit = document.querySelector('#contact-message').style.transition
const subsPadding = getComputedStyle(document.querySelector('#contact-message')).getPropertyValue('padding')
const subMessagePaddingStr = getComputedStyle(document.querySelector('#contact-message')).getPropertyValue('padding-bottom')
const subMessagePadding = parseInt(subMessagePaddingStr.substring(0, subMessagePaddingStr.length -1))
const subMessageHPaddingStr = getComputedStyle(document.querySelector('#contact-message')).getPropertyValue('padding-right')
const subMessageHPadding = parseInt(subMessageHPaddingStr.substring(0, subMessagePaddingStr.length -1))
console.log(subMessageHPadding)
console.log(subsPadding)
document.querySelector('#contact-message').style.padding = '0 ' + subMessageHPadding + 'px'
const subMessageHeight = document.querySelector('#contact-message').scrollHeight
let messageHidden = true;
function contactMessage(state) {
    const message = document.querySelector('#contact-message')
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
    };
}

//let removeMessage
/*
document.querySelector('#message-submit').addEventListener('click', (e) => {
    e.preventDefault()
    //clearTimeout(removeMessage)
    const message = document.querySelector('#contact-message').lastElementChild
    const firstName = document.querySelector('#first-name').value
    const lastName = document.querySelector('#last-name').value
    const email = document.querySelector('#email').value
    const phone = document.querySelector('#phone').value
    const company = document.querySelector('#company').value
    const messageContent = document.querySelector('#message-content').value
    const allInputValues = [firstName, lastName, email, phone, messageContent]
    if (firstName.length < 1) {
        document.querySelector('#first-name').classList.add('error')
    }
    if (lastName.length < 1) {
        document.querySelector('#last-name').classList.add('error')
    }
/*    if (messageContent.length < 10) {
        document.querySelector('#message-content').classList.add('error')
    }*
    if (email.length < 1 && phone.length < 1) {
        document.querySelector('#email').classList.add('error')
        document.querySelector('#phone').classList.add('error')
    }
    if (email.length < 1 && phone.length < 4) {
        document.querySelector('#phone').classList.add('error')
    }
    if (phone.length > 0 && phone.length < 4) {
        document.querySelector('#phone').classList.add('error')
    }
    if (!allInputValues.find(input => input.length > 0)) {
        message.textContent = "You didn't input any info"
        contactMessage('error')
    }
    else if (firstName === '' && lastName === '') {
        message.textContent = "Please enter your name"
        contactMessage('error')
    }
    else if (firstName === '') {
        message.textContent = "Please enter your first name"
        contactMessage('error')
    }
/*    else if (firstName.length < 2) {
        message.textContent = "First name too short"
        contactMessage('error')
    }*
    else if (lastName === '') {
        message.textContent = "Please enter your last name"
        contactMessage('error')
    }
/*    else if (lastName.length < 2) {
        message.textContent = "Last name too short"
        contactMessage('error')
    }*
    else if (email === '' && phone === '') {
        message.textContent = 'Please enter a phone number or an email address'
        contactMessage('error')
    }
    else if (email.length < 1 && phone.length < 4) {
        message.textContent = 'Phone number too short'
        contactMessage('error')
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
        document.querySelector('#email').classList.add('error')
        message.textContent = 'Invalid email address'
        contactMessage('error')
    }
    else if (!email.includes('gmail.com')) {
        message.textContent = 'Untrusted domain'
        contactMessage('warning')
    }
    else if (phone.length > 0 && phone.length < 4) {
        message.textContent = 'Phone number too short'
        contactMessage('error')
    }
/*    else if (messageContent.length < 10){
        message.textContent = 'Message too short'
        contactMessage('error')
    }*
    
    else {
        message.textContent = "Message sent"
        contactMessage('success')
        setTimeout(contactMessage, 4000)
    }
    //removeMessage = setTimeout(contactMessage, 7000)
})
*/
const allInputs = [
    document.querySelector('#first-name'),
    document.querySelector('#last-name'),
    document.querySelector('#email'),
    document.querySelector('#phone'),
    document.querySelector('#company'),
    document.querySelector('#message-content'),
]

allInputs.forEach(input => {
    input.addEventListener('focus', () => {
        allInputs.forEach(input2 => {
            input2.classList.remove('error')
            contactMessage()
        })
    })
});
