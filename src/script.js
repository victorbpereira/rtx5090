const elements = document.querySelectorAll('.transitionLeftToRight')
const elements2 = document.querySelectorAll('.transitionRightToLeft')
const elements3 = document.querySelectorAll('.transitionTopToBottom')
const elements4 = document.querySelectorAll('.transitionOpacity')

const observer = new IntersectionObserver(items => {
    items.forEach(item => {
        item.target.classList.toggle('applyTransitionLeftToRight', item.isIntersecting)
    })
}, {
    threshold: .5
})

elements.forEach(item => {
    observer.observe(item)
})

const observer2 = new IntersectionObserver(items => {
    items.forEach(item => {
        item.target.classList.toggle('applyTransitionRightToLeft', item.isIntersecting)
    })
}, {
    threshold: .5
})

elements2.forEach(item => {
    observer2.observe(item)
})

const observer3 = new IntersectionObserver(items => {
    items.forEach(item => {
        item.target.classList.toggle('applyTransitionTopToBottom', item.isIntersecting)
    })
}, {
    threshold: .5
})

elements3.forEach(item => {
    observer3.observe(item)
})

const observer4 = new IntersectionObserver(items => {
    items.forEach(item => {
        item.target.classList.toggle('applyTransitionOpacity', item.isIntersecting)
    })
}, {
    threshold: .5
})

elements4.forEach(item => {
    observer4.observe(item)
})