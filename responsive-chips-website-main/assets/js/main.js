/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/*show menu */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show_menu')
    })
}

/* menu hidden*/
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show_menu')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav_link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    //When we click on each nav_link, we remove the show_menu
    navMenu.classList.remove('show_menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== SHADOW HEADER ===============*/
const shadowHeader = () =>{
    const header =  document.getElementById('header')
    this.scrollY >= 50 ? header.classList.add('shadow_header')
                       : header.classList.remove('shadow_header')
}
window.addEventListener('scroll', shadowHeader)

/*=============== SWIPER FAVORITES ===============*/ 
const swiperFavorites = new Swiper('.swiper', {
    loop: true,
    grabCursor: true,
    slidesPerView: 'auto',
    centeredSlides: 'auto',
})

/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () => {
    const scrollUp = document.getElementById('scroll-up')
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                        : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const scrollActive = () => {
    const scrollDown = window.scrollY

    sectionsClass.forEach(current => {
        const sectionHeight = current.offsetHeight,
        sectionTop = current.offsetTop - 58,
        sectionId = current.getElementById('id'),
        sectionsClass = document.querySelector('.nav_link a[href*=' + sectionId + ']')
      
        if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
            sectionsClass.classList.add('active_link')
        }else{
            sectionsClass.classList.remove('active_link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: '2500',
    delay: 300,
    reset: true, // to repeat animation
})

sr.reveal('.home_data, .favorites_container, .footer_container')
sr.reveal('.home_circle, .home_img', {delay: 600, scale: .5})
sr.reveal('.home_chips_1, .home_chips_2, .home_chips_3', {delay: 1000, interval: 100})
sr.reveal('.home_leaf', {delay: 1200})
sr.reveal('.home_tomato_1, .home_tomato_2', {delay: 1400, interval: 100})
sr.reveal('.care_img, .contact_img', {origin: 'left'})
sr.reveal('.care_list, .contact_data', {origin: 'right'})
sr.reveal('.banner_item, .products_card', {interval: 100})
