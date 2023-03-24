const hamburger = document.querySelector('.nav .nav-items .links .hamburger .bar .menu')
const mobile_menu = document.querySelector('.nav .nav-items .links .items');
const menu_item = document.querySelectorAll('.nav .nav-items .links .items a')
const header = document.querySelector('.nav');

hamburger.addEventListener('click', ()=>{
    hamburger.classList.toggle('opened')
    mobile_menu.classList.toggle('active')
})


menu_item.forEach(item =>{
    item.addEventListener('click', ()=>{
        hamburger.classList.toggle('opened')
        mobile_menu.classList.toggle('active')
    })
})