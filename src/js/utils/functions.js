import Inputmask from "inputmask";

const initPhoneMask = () => {
    let inputs = document.querySelectorAll("input[type=tel]");
    let im = new Inputmask("+7 999 999-99-99");
    inputs.forEach(input => {
        im.mask(input);
    });
}


export {
    initPhoneMask,
};

document.addEventListener('DOMContentLoaded', function() {
    const burgerBtn = document.querySelector('.burger-btn');
    const menu = document.querySelector('.menu');
    const overlay = document.querySelector('.overlay');
    const closeMenuBtn = document.querySelector('.close-menu');
    const dropdownToggle = document.querySelector('.dropdown-toggle');
    const dropdownContent = document.querySelector('.dropdown-content');
    
    // Открытие меню
    burgerBtn.addEventListener('click', function() {
        menu.classList.add('active');
        overlay.classList.add('active');
    });
    
    // Закрытие меню
    function closeMenu() {
        menu.classList.remove('active');
        overlay.classList.remove('active');
        dropdownContent.classList.remove('active');
        dropdownToggle.classList.remove('active');
    }
    
    // Закрытие по крестику
    closeMenuBtn.addEventListener('click', closeMenu);
    
    // Закрытие по оверлею
    overlay.addEventListener('click', closeMenu);
    
    // Работа выпадающего списка
    dropdownToggle.addEventListener('click', function(e) {
        e.stopPropagation();
        dropdownContent.classList.toggle('active');
        this.classList.toggle('active');
    });
});