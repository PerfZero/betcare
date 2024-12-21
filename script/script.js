// Скрипт для обработки скролла карточки
const card = document.querySelector('.card');

function handleScroll() {
  const scrollPosition = window.scrollY;
  const scrollStart = 5;
  const scrollEnd = 50;
  const maxRotation = 60;
  const maxMarginBottom = -40;

  if (scrollPosition > scrollStart && scrollPosition < scrollEnd) {
    const rotation = ((scrollPosition - scrollStart) / (scrollEnd - scrollStart)) * maxRotation;
    const marginBottom = ((scrollPosition - scrollStart) / (scrollEnd - scrollStart)) * maxMarginBottom;
    card.style.transform = `perspective(2230px) rotateX(${rotation}deg)`;
    card.style.marginBottom = `${marginBottom}px`;
  } else if (scrollPosition >= scrollEnd) {
    card.style.transform = `perspective(2230px) rotateX(${maxRotation}deg)`;
    card.style.marginBottom = `${maxMarginBottom}px`;
  } else {
    card.style.transform = 'none';
    card.style.marginBottom = '20px';
  }
}

window.addEventListener('scroll', handleScroll);
handleScroll();

// Скрипт для переключения табов
const tabs = document.querySelectorAll(".tab");
const tabContents = document.querySelectorAll(".tab-content");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    // Убираем активный класс у всех табов и контента
    tabs.forEach((t) => t.classList.remove("active"));
    tabContents.forEach((content) => content.classList.remove("active"));

    // Добавляем активный класс выбранному табу и соответствующему контенту
    tab.classList.add("active");
    const targetTabContent = document.getElementById(tab.dataset.tab);
    if (targetTabContent) {
      targetTabContent.classList.add("active");
    } else {
      console.log(`Контент для таба с id ${tab.dataset.tab} не найден`);
    }
  });
});

// Инициализация начального состояния для табов (отображение первого контента)
if (tabs.length > 0 && tabContents.length > 0) {
  tabs[0].classList.add("active");
  tabContents[0].classList.add("active");
}