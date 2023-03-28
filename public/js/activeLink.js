const item = document.querySelectorAll('.nav .nav-items .links .items a')
const activeLink = window.location.pathname;

item.forEach((item) =>{
    if(item.href.slice(window.origin.length) == activeLink){
        item.classList.add('active')
    }
})