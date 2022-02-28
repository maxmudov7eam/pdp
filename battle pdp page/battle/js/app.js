const nav = document.querySelector('.navbar')
let scrolling = window.pageYOffset > 0

window.addEventListener('scroll', () => {
    nav.classList.toggle('active', scrolling)
})