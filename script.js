window.addEventListener("DOMContentLoaded", () => {
  const menu = document.querySelector(".nav-list"),
    menuItem = document.querySelectorAll(".nav-item"),
    hamburger = document.querySelector(".hamburger");

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("hamburger_active");
    menu.classList.toggle("nav-list_active");
  });

  menuItem.forEach((item) => {
    item.addEventListener("click", () => {
      hamburger.classList.toggle("hamburger_active");
      menu.classList.toggle("nav-list_active");
    });
  });
});

const anchors = document.querySelectorAll('a[href*="#"]');
for (let anchor of anchors) {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const blockID = anchor.getAttribute("href").substr(1);

    document.getElementById(blockID).scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
}

console.log(
  "вёрстка валидная +10, вёрстка семантическая +20, css-стили +10, контент размещается в блоке, который горизонтально центрируется на странице. Фоновый цвет, если он есть, тянется во всю ширину страницы +10, вёрстка адаптивная: ни на одном из разрешений экрана до 320px включительно не появляется горизонтальная полоса прокрутки, при этом всё содержание страницы сохраняется +10, есть адаптивное бургер-меню +10, на странице СV присутствует изображение - фото автора CV, пропорции изображения не искажены, у изображения есть атрибут alt (может быть пустым) +10, контакты для связи и перечень навыков оформлены в виде списка ul > li +10, CV содержит контакты для связи, краткую информацию о себе, перечень навыков, информацию об образовании и уровне английского +10, CV содержит пример вашего кода +10, CV содержит изображения-ссылки на выполненные вами проекты. При клике по изображению страница проекта открывается в новой вкладке. У каждого проекта есть название, небольшое описание, указан перечень используемых технологий. +10, CV выполнено на английском языке +10, есть видеорезюме автора CV на английском языке +10, дизайн, оформление, качество выполнения CV не ниже чем в примерах CV, приведённых в материалах к заданию (это дополнительные 10 баллов, поэтому некоторый субъективизм в оценке может присутствовать) +10 - 150 баллов"
);
