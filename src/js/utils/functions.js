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
        // Добавляем небольшую задержку перед закрытием dropdown для анимации
        setTimeout(() => {
            dropdownContent.classList.remove('active');
            dropdownToggle.classList.remove('active');
        }, 10);
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


 // Ждем полной загрузки DOM
    document.addEventListener('DOMContentLoaded', function() {
        // Находим все ссылки с классом service_link
        const serviceLinks = document.querySelectorAll('.service_link');
        
        // Добавляем обработчик для каждой ссылки
        serviceLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                const serviceId = this.getAttribute('data-service');
                openServicePopup(serviceId);
            });
        });
        
        // Добавляем обработчик для кнопки закрытия
        document.querySelector('.close-btn').addEventListener('click', closeServicePopup);
    });
    
    // Функция для открытия поп-апа
    function openServicePopup(serviceId) {
        // Здесь можно загружать разный контент в зависимости от serviceId
        const popupTitle = document.getElementById('popupTitle');
        const popupContent = document.getElementById('popupContent');
        
        // Пример данных (можно заменить на AJAX-запрос или другой источник)
        const servicesData = {
            1: {
                title: 'Техническое обслуживание',
                content: '<p>Подробная информация о техническом обслуживании...</p>'
            },
            2: {
                title: 'Другая услуга',
                content: '<p>Подробная информация о другой услуге...</p>'
            }
            // Добавьте данные для остальных услуг (3-22)
        };
        
        // Устанавливаем контент для выбранной услуги
        if (servicesData[serviceId]) {
            popupTitle.textContent = servicesData[serviceId].title;
            popupContent.innerHTML = servicesData[serviceId].content;
        } else {
            popupTitle.textContent = 'Услуга ' + serviceId;
            popupContent.innerHTML = '<p>Информация об услуге будет добавлена позже.</p>';
        }
        
        document.getElementById('servicePopup').style.display = 'flex';
    }
    
    // Функция для закрытия поп-апа
    function closeServicePopup() {
        document.getElementById('servicePopup').style.display = 'none';
    }
    
    // Закрытие поп-апа при клике вне его области
    window.onclick = function(event) {
        const popup = document.getElementById('servicePopup');
        if (event.target == popup) {
            closeServicePopup();
        }
    }