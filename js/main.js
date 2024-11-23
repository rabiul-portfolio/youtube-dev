const navMenu = document.getElementById('nav_menu')
const navToggle = document.getElementById('nav_toggle')
const navClose = document.getElementById('nav_close')

if(navToggle){
    navToggle.addEventListener('click', ()=>{
        navMenu.classList.add('show-menu')
    })

if(navClose) {
    navClose.addEventListener('click', ()=>{
        navMenu.classList.remove('show-menu')
    })
}
}