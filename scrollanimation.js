


let options = ['element', 'scrollPercentage', 'animationClass', 'type']
// let fadeObserver = new IntersectionObserver(animation, fadeOptions)
// let opacityObserver = new IntersectionObserver(animation, opacityOptions)
// let slideObserver = new IntersectionObserver(animation, slideOptions)
window.addEventListener('load', () => {
    animatableElementObjs.forEach(elementOb => {
        let newObserver = new IntersectionObserver((entries, observer) => {
            console.log(elementOb.isMulti)
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    if (!entry.target.className.includes(elementOb.animationClass)) {
                        function removeTransition() {
                            console.log('animation finished')
                            entry.target.classList.remove('transitions')
                            entry.target.removeEventListener('transitionend', removeTransition)
                        }
                        entry.target.addEventListener('transitionend', removeTransition)
                    }
                    entry.target.classList.add('transitions')
                    entry.target.classList.add(elementOb.animationClass)
                    if (elementOb.repeat === 1) {
                        newObserver.unobserve(entry.target)
                    }
                }
                else {
                    if (elementOb.repeat !== 1) {
                        entry.target.classList.remove(elementOb.animationClass)
                    }
                }
            })
        }, {
            threshold: elementOb.scrollPercentage
        });
        if (elementOb.isMulti) {
            Array.from(elementOb.elements).forEach(element => newObserver.observe(element))
        }
        else {
            newObserver.observe(elementOb.element)
        }
    })
})
