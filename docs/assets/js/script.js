'use strict';



// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }



// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });



// testimonials variables
const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");

// modal variable
const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");

// modal toggle function
const testimonialsModalFunc = function () {
  modalContainer.classList.toggle("active");
  overlay.classList.toggle("active");
}

// add click event to all modal items
for (let i = 0; i < testimonialsItem.length; i++) {

  testimonialsItem[i].addEventListener("click", function () {

    modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
    modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
    modalTitle.innerHTML = this.querySelector("[data-testimonials-title]").innerHTML;
    modalText.innerHTML = this.querySelector("[data-testimonials-text]").innerHTML;

    testimonialsModalFunc();

  });

}

// add click event to modal close button
modalCloseBtn.addEventListener("click", testimonialsModalFunc);
overlay.addEventListener("click", testimonialsModalFunc);



// custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

select.addEventListener("click", function () { elementToggleFunc(this); });

// add event in all select items
for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);

  });
}

// filter variables
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {

  for (let i = 0; i < filterItems.length; i++) {

    if (selectedValue === "all") {
      filterItems[i].classList.add("active");
    } else if (selectedValue === filterItems[i].dataset.category) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
    }

  }

}

// add event in all filter button items for large screen
let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {

  filterBtn[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    filterFunc(selectedValue);

    lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;

  });

}



// contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// add event to all form input field
for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {

    // check form validation
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }

  });
}



// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {

    for (let i = 0; i < pages.length; i++) {
      if (this.dataset.navPage === pages[i].dataset.page) {
        pages[i].classList.add("active");
        navigationLinks[i].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[i].classList.remove("active");
        navigationLinks[i].classList.remove("active");
      }
    }

  });
}

// language switcher
const langButtons = document.querySelectorAll("[data-lang-btn]");
const i18nElements = document.querySelectorAll("[data-i18n]");

const translations = {
  en: {
    role: "Middle Android Developer",
    show_contacts: "Show Contacts",
    email: "Email",
    phone: "Phone",
    birthday: "Birthday",
    location: "Location",
    nav_about: "About",
    nav_resume: "Resume",
    nav_portfolio: "Portfolio",
    about_title: "About Me",
    about_p1: "Middle Android Developer with 6+ years of production experience building and scaling reliable mobile products.",
    about_p2: "I specialize in Kotlin, MVVM and Clean Architecture to deliver maintainable code, stable releases, and faster feature delivery.",
    about_p3: "I focus on performance optimization, API efficiency, and strong cross-functional teamwork to turn product goals into measurable business impact.",
    languages_title: "Languages",
    lang_tk: "Turkmen — Native",
    lang_ru: "Russian — Advanced",
    lang_en: "English — Basic",
    lang_tr: "Turkish — Basic",
    what_doing: "What I'm Doing",
    service_mobile_apps: "Mobile apps",
    service_mobile_apps_text: "Professional development of applications for Android.",
    resume_title: "Resume",
    education_title: "Education",
    experience_title: "Experience",
    skills_title: "My skills",
    tech_stack_title: "Tech Stack",
    portfolio_title: "Portfolio",
    applications: "Applications",
    select_category: "Select category",
    all: "All",
    view_play_store: "View on Play Store",
    project_salam_desc: "A fast and reliable mobile news platform with categorized feeds and real-time content updates.",
    project_railways_desc: "Official railway app for schedules, route planning, and easier passenger trip management.",
    project_belet_desc: "A streaming app for movies, series, cartoons, and live sports with smooth playback and personalized content.",
    project_yunus_desc: "An online grocery app with fast ordering, smart catalog search, and convenient home delivery flows."
  },
  ru: {
    role: "Middle Android Developer",
    show_contacts: "Показать контакты",
    email: "Эл. почта",
    phone: "Телефон",
    birthday: "Дата рождения",
    location: "Локация",
    nav_about: "Обо мне",
    nav_resume: "Резюме",
    nav_portfolio: "Портфолио",
    about_title: "Обо мне",
    about_p1: "Middle Android Developer с 6+ годами коммерческого опыта в разработке и масштабировании надежных мобильных продуктов.",
    about_p2: "Специализируюсь на Kotlin, MVVM и Clean Architecture, чтобы выпускать поддерживаемый код, стабильные релизы и быстрее доставлять фичи.",
    about_p3: "Фокусируюсь на оптимизации производительности, эффективности API и сильной командной работе для достижения измеримого бизнес-результата.",
    languages_title: "Языки",
    lang_tk: "Туркменский — родной",
    lang_ru: "Русский — продвинутый",
    lang_en: "Английский — базовый",
    lang_tr: "Турецкий — базовый",
    what_doing: "Чем занимаюсь",
    service_mobile_apps: "Мобильные приложения",
    service_mobile_apps_text: "Профессиональная разработка приложений для Android.",
    resume_title: "Резюме",
    education_title: "Образование",
    experience_title: "Опыт",
    skills_title: "Мои навыки",
    tech_stack_title: "Технологический стек",
    portfolio_title: "Портфолио",
    applications: "Приложения",
    select_category: "Выберите категорию",
    all: "Все",
    view_play_store: "Открыть в Play Store",
    project_salam_desc: "Быстрое и надежное новостное приложение с категориями и обновлением контента в реальном времени.",
    project_railways_desc: "Официальное приложение железных дорог с расписаниями, построением маршрутов и удобным управлением поездками.",
    project_belet_desc: "Стриминговое приложение с фильмами, сериалами, мультфильмами и спортом с плавным воспроизведением и персонализированным контентом.",
    project_yunus_desc: "Онлайн-приложение для покупок продуктов с быстрым заказом, удобным поиском и доставкой на дом."
  },
  tr: {
    role: "Middle Android Developer",
    show_contacts: "İletişimi Göster",
    email: "E-posta",
    phone: "Telefon",
    birthday: "Doğum tarihi",
    location: "Konum",
    nav_about: "Hakkımda",
    nav_resume: "Özgeçmiş",
    nav_portfolio: "Portföy",
    about_title: "Hakkımda",
    about_p1: "Güvenilir mobil ürünler geliştirme ve ölçekleme konusunda 6+ yıllık üretim deneyimine sahip bir Middle Android Developer.",
    about_p2: "Bakımı kolay kod, stabil sürümler ve daha hızlı özellik teslimi için Kotlin, MVVM ve Clean Architecture üzerine uzmanlaştım.",
    about_p3: "Ölçülebilir iş etkisi için performans optimizasyonu, API verimliliği ve güçlü ekip iş birliğine odaklanıyorum.",
    languages_title: "Diller",
    lang_tk: "Türkmence — Ana dil",
    lang_ru: "Rusça — İleri seviye",
    lang_en: "İngilizce — Temel",
    lang_tr: "Türkçe — Temel",
    what_doing: "Ne Yapıyorum",
    service_mobile_apps: "Mobil uygulamalar",
    service_mobile_apps_text: "Android için profesyonel uygulama geliştirme.",
    resume_title: "Özgeçmiş",
    education_title: "Eğitim",
    experience_title: "Deneyim",
    skills_title: "Yeteneklerim",
    tech_stack_title: "Teknoloji Yığını",
    portfolio_title: "Portföy",
    applications: "Uygulamalar",
    select_category: "Kategori seçin",
    all: "Tümü",
    view_play_store: "Play Store'da Gör",
    project_salam_desc: "Kategorili akışlar ve gerçek zamanlı içerik güncellemeleri sunan hızlı ve güvenilir haber uygulaması.",
    project_railways_desc: "Sefer saatleri, rota planlama ve kolay yolculuk yönetimi için resmi demiryolu uygulaması.",
    project_belet_desc: "Akıcı oynatma ve kişiselleştirilmiş içerik sunan film, dizi, çizgi film ve canlı spor uygulaması.",
    project_yunus_desc: "Hızlı sipariş, akıllı katalog araması ve pratik eve teslimat akışları sunan online market uygulaması."
  }
};

const applyLanguage = function (lang) {
  const selectedLanguage = translations[lang] ? lang : "en";

  for (let i = 0; i < i18nElements.length; i++) {
    const key = i18nElements[i].dataset.i18n;
    const translated = translations[selectedLanguage][key];
    if (translated) i18nElements[i].textContent = translated;
  }

  document.documentElement.lang = selectedLanguage;
  localStorage.setItem("site-language", selectedLanguage);

  for (let i = 0; i < langButtons.length; i++) {
    langButtons[i].classList.toggle("active", langButtons[i].dataset.lang === selectedLanguage);
  }
};

for (let i = 0; i < langButtons.length; i++) {
  langButtons[i].addEventListener("click", function () {
    applyLanguage(this.dataset.lang);
  });
}

applyLanguage(localStorage.getItem("site-language") || "en");