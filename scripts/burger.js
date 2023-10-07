let menuList = document.querySelector('.menu');

document.addEventListener('click', (event) => {


    if (event.target.closest('.menu_btn')) {
        menuList.classList.toggle('menu_active');
    }
    if (!event.target.closest('.menu, .menu_btn')) {
        menuList.classList.remove('menu_active');
    }

})