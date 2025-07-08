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
        document.querySelector('.serv_close-btn').addEventListener('click', closeServicePopup);
    });
    
    // Функция для открытия поп-апа
    function openServicePopup(serviceId) {
        // Здесь можно загружать разный контент в зависимости от serviceId
        const popupTitle = document.getElementById('serv_popupTitle');
        const popupContent = document.getElementById('serv_popupContent');
        
        // Пример данных (можно заменить на AJAX-запрос или другой источник)
        const servicesData = {
            1: {
                title: 'Техническое обслуживание',
                content: `
<p>Легковой и легкогрузовой транспорт от 1,5 до 3 т</p>
<ul>
    <li>АКПП (автоматическая коробка передач)</li>
    <li>СVT (вариатор)</li>
    <li>Аккумулятор</li>
    <li>Кондиционер</li>
    <li>Двигатель - замена масла и масляного фильтра</li>
    <li>Фильтр воздушный</li>
    <li>Фильтр салона</li>
    <li>Фильтр топливный</li>
    <li>ГУР (гидроусилитель руля)</li>
    <li>Тормозная система</li>
    <li>Гидравлическая система (сцепление)</li>
    <li>Задний мост</li>
    <li>Передний мост</li>
    <li>Оборудование adblue (мочевина)</li>
    <li>Система охлаждения</li>
    <li>Рулевое управление</li>
    <li>Ходовая часть</li>
    <li>КПП</li>
</ul>

<p>Грузовой транспорт от 3 т</p>
<ul>
    <li>Балансир - доливка уровня масла</li>
    <li>Бортовая передача</li>
    <li>Гидроборт</li>
    <li>Делитель КПП</li>
    <li>Коробка отбора мощности</li>
    <li>Насос подъема кабины</li>
    <li>Раздаточка коробка</li>
    <li>Редуктор переднего/среднего/заднего моста</li>
    <li>Аккумулятор</li>
    <li>Кондиционер</li>
    <li>Двигатель - замена масла и масляного фильтра</li>
    <li>Фильтр воздушный</li>
    <li>Фильтр салона</li>
    <li>Фильтр топливный</li>
    <li>ГУР (гидроусилитель руля)</li>
    <li>Тормозная система</li>
    <li>Гидравлическая система (сцепление)</li>
    <li>Задний мост</li>
    <li>Передний мост</li>
    <li>Оборудование adblue (мочевина)</li>
    <li>Система охлаждения</li>
    <li>Рулевое управление</li>
    <li>Ходовая часть</li>
    <li>КПП</li>
</ul>
`
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


   const swiper = new Swiper('.swiper-cert', {
  slidesPerView: 1.5, // Показывать 1 целый + 0.5 следующего
  spaceBetween: 20,   // Отступ между слайдами
  centeredSlides: false, // Не центрировать слайды
  initialSlide: 0,     // Начинать с первого слайда
  freeMode: true,      // Плавная прокрутка без привязки
   navigation: {
    nextEl: '.swiper-button-next-sert',
    prevEl: '.swiper-button-prev-sert',
  },
  breakpoints: {
    // Адаптация для разных экранов
    768: {
      slidesPerView: 2.5,
      spaceBetween: 0,
    },
    1024: {
      slidesPerView: 2.5,
      spaceBetween: 0,
    },
    1025: {
      slidesPerView: 4,
      spaceBetween: 0,
    }
  }
  
});

  const swiper2 = new Swiper('.swiper-news', {
  slidesPerView: 1.5, // Показывать 1 целый + 0.5 следующего
  spaceBetween: 20,   // Отступ между слайдами
  centeredSlides: false, // Не центрировать слайды
  initialSlide: 0,     // Начинать с первого слайда
  freeMode: true,      // Плавная прокрутка без привязки
   navigation: {
    nextEl: '.swiper-button-next-news',
    prevEl: '.swiper-button-prev-news',
  },
  breakpoints: {
    // Адаптация для разных экранов
    768: {
      slidesPerView: 2.5
    },
    1440: {
      slidesPerView: 3.5
    }
  }
});

const swiper3 = new Swiper('.swiper-partners', {
  slidesPerView: 1, // Показывать 1 целый + 0.5 следующего
  spaceBetween: 20,   // Отступ между слайдами
  centeredSlides: false, // Не центрировать слайды
  initialSlide: 0,     // Начинать с первого слайда
  freeMode: true,      // Плавная прокрутка без привязки
  breakpoints: {
    // Адаптация для разных экранов
    768: {
      slidesPerView: 2
    },
    1024: {
      slidesPerView: 3
    }
  }
});

 document.querySelectorAll('.accordion-header').forEach(header => {
            header.addEventListener('click', () => {
                const item = header.parentElement;
                item.classList.toggle('active');
            });
        });

document.addEventListener('DOMContentLoaded', function() {
        const form = document.getElementById('feedbackForm_main');
        const popup = document.getElementById('successPopup');
        const closePopup = document.querySelector('.close-popup_success');
        
        // Закрытие pop-up
        closePopup.addEventListener('click', function() {
            popup.style.display = 'none';
        });
        
        // Закрытие при клике вне pop-up
        popup.addEventListener('click', function(e) {
            if (e.target === popup) {
                popup.style.display = 'none';
            }
        });
        
        // Обработка отправки формы
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Здесь должна быть ваша логика валидации и отправки формы
            // Для примера просто показываем pop-up
            
            // Сброс формы
            form.reset();
            
            // Показываем pop-up
            popup.style.display = 'flex';
            
            // Автоматическое закрытие через 5 секунд
            setTimeout(function() {
                popup.style.display = 'none';
            }, 5000);
        });
    });

   document.addEventListener('DOMContentLoaded', function() {
    const newsLinks = document.querySelectorAll('.news_link');
    const newsPopup = document.getElementById('newsPopup');
    const closePopup = document.querySelector('.close-news-popup');
    const popupContent = newsPopup.querySelector('.news-popup-content');
    
    newsLinks.forEach(function(link) {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Находим контейнер с полным контентом
            const contentContainer = this.closest('.slide_news_wr')
                .querySelector('.news-full-content');
            
            // Клонируем контент
            const content = contentContainer.cloneNode(true);
            content.style.display = 'block';
            
            // Очищаем попап и вставляем новый контент
            while (popupContent.children.length > 1) {
                popupContent.removeChild(popupContent.lastChild);
            }
            popupContent.appendChild(content);
            
            newsPopup.style.display = 'flex';
            document.body.style.overflow = 'hidden';
        });
    });
    
    // Остальной код закрытия попапа без изменений
    closePopup.addEventListener('click', function() {
        newsPopup.style.display = 'none';
        document.body.style.overflow = 'auto';
    });
    
    newsPopup.addEventListener('click', function(e) {
        if (e.target === newsPopup) {
            newsPopup.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
});


    document.addEventListener('DOMContentLoaded', function() {
        // Находим кнопку "Записаться"
        const appointmentBtn = document.querySelector('.banner_btn_write');
        const appointmentPopup = document.getElementById('appointmentPopup');
        const closePopup = document.querySelector('.close-appointment-popup');
        const appointmentForm = document.getElementById('appointmentForm');
        
        // Обработчик клика по кнопке "Записаться"
        if (appointmentBtn) {
            appointmentBtn.addEventListener('click', function(e) {
                e.preventDefault();
                appointmentPopup.style.display = 'flex';
                document.body.style.overflow = 'hidden';
            });
        }
        
        // Закрытие попапа
        closePopup.addEventListener('click', function() {
            appointmentPopup.style.display = 'none';
            document.body.style.overflow = 'auto';
        });
        
        // Закрытие при клике вне попапа
        appointmentPopup.addEventListener('click', function(e) {
            if (e.target === appointmentPopup) {
                appointmentPopup.style.display = 'none';
                document.body.style.overflow = 'auto';
            }
        });
        
        // Обработка отправки формы
        if (appointmentForm) {
            appointmentForm.addEventListener('submit', function(e) {
                e.preventDefault();
                
                // Здесь должна быть логика отправки формы
                // Например, AJAX-запрос на сервер
                
                // Для примера просто показываем сообщение
                alert('Ваша заявка отправлена! Мы свяжемся с вами в ближайшее время.');
                
                // Закрываем попап и сбрасываем форму
                appointmentPopup.style.display = 'none';
                document.body.style.overflow = 'auto';
                appointmentForm.reset();
            });
        }
    });

 // Функция для обновления состояния шапки
function updateHeaderState() {
    const headerWrapper = document.querySelector('.header_desk_wrapper');
    const headerDesk = document.querySelector('.header_desk');
    const isScrolled = window.scrollY > 10;
    
    // Обновляем классы
    headerWrapper.classList.toggle('scrolled', isScrolled);
    headerDesk.classList.toggle('scrolled', isScrolled);
    
    // Обновляем отступ
    document.body.style.paddingTop = isScrolled 
        ? headerWrapper.offsetHeight + 'px' 
        : headerWrapper.offsetHeight + 'px'; // Одинаковый расчёт для обоих состояний
}

// Инициализация при загрузке
document.addEventListener('DOMContentLoaded', function() {
    // Устанавливаем начальный отступ сразу после построения DOM
    const headerWrapper = document.querySelector('.header_desk_wrapper');
    document.body.style.paddingTop = headerWrapper.offsetHeight + 'px';
    
    // Обновляем состояние шапки (на случай, если страница загрузилась со скроллом)
    updateHeaderState();
});

// Обработка скролла с оптимизацией
window.addEventListener('scroll', function() {
    // Используем requestAnimationFrame для плавности
    requestAnimationFrame(updateHeaderState);
});


document.addEventListener('DOMContentLoaded', function() {
  // Открытие попапа
  document.querySelector('.phone_desk_call').addEventListener('click', function(e) {
    e.preventDefault();
    document.getElementById('callback-popup_header').style.display = 'flex';
  });
  
  // Закрытие попапа
  document.querySelector('.close-btn').addEventListener('click', function() {
    document.getElementById('callback-popup_header').style.display = 'none';
  });
  
  // Закрытие при клике вне попапа
  document.getElementById('callback-popup').addEventListener('click', function(e) {
    if (e.target === this) {
      this.style.display = 'none';
    }
  });
  
  // Обработка формы
  document.getElementById('callback-form').addEventListener('submit', function(e) {
    e.preventDefault();
    // Здесь можно добавить AJAX-запрос для отправки данных
    alert('Спасибо! Мы скоро вам перезвоним.');
    document.getElementById('callback-popup').style.display = 'none';
    this.reset();
  });
});

// JavaScript для работы попапа services
document.querySelectorAll('.service_btn').forEach(button => {
  button.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector('.popup_overlay_services').style.display = 'flex';
  });
});

document.querySelector('.popup_close_services').addEventListener('click', function() {
  document.querySelector('.popup_overlay_services').style.display = 'none';
});

// Закрытие по клику вне попапа
document.querySelector('.popup_overlay_services').addEventListener('click', function(e) {
  if (e.target === this) {
    this.style.display = 'none';
  }
});

// Обработка отправки формы
document.querySelector('.contact_form_services').addEventListener('submit', function(e) {
  e.preventDefault();
  
  // Здесь будет логика отправки данных
  const formData = {
    name: this.fullname.value,
    phone: this.phone.value,
    car: this.car.value
  };
  
  console.log('Отправка данных:', formData);
  alert('Ваша заявка отправлена! Мы свяжемся с вами в ближайшее время.');
  
  // Очистка формы и закрытие попапа
  this.reset();
  document.querySelector('.popup_overlay_services').style.display = 'none';
});
