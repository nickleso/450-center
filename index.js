// feedback form submit
const feedbackForm = document.getElementById("feedback-form");

if (feedbackForm) {
  feedbackForm.addEventListener("submit", onFeedbackFormSubmit);

  function onFeedbackFormSubmit(event) {
    event.preventDefault();
    const form = event.target;

    const name = form.elements.feedbackName.value.trim();
    const surname = form.elements.feedbackSurname.value.trim();
    const phone = form.elements.feedbackPhone.value.trim();
    const email = form.elements.feedbackEmail.value.trim();

    if (name === "" || surname === "" || phone === "" || email === "") {
      console.log("empty fields");
      return;
    }

    // form values
    const feedback = {
      name,
      surname,
      phone,
      email,
    };

    console.log("feedback:", feedback);

    form.reset();
  }
}

// burger menu
const burgerButton = document.getElementById("burger-button");
const burgerIcon = document.getElementById("burger-icon");
const burgerMenu = document.getElementById("burger-menu");
const burgerLink = document.querySelectorAll(".burger-link");

burgerButton.addEventListener("click", onBurgerButtonClick);

function onBurgerButtonClick() {
  document.body.classList.toggle("mobile-open");
  burgerIcon.classList.toggle("active");
  burgerMenu.classList.toggle("active");
}

burgerLink.forEach((link) => {
  link.addEventListener("click", onBurgerLinkClick);
});

function onBurgerLinkClick() {
  closeMobileMenu();
}

function closeMobileMenu() {
  document.body.classList.remove("mobile-open");
  burgerIcon.classList.remove("active");
  burgerMenu.classList.remove("active");
}

// patient registration form
const patientRegistrationForm = document.getElementById("patient-form");

if (patientRegistrationForm) {
  patientRegistrationForm.addEventListener(
    "submit",
    onPatientRegistrationFormSubmit
  );
}

function onPatientRegistrationFormSubmit(event) {
  event.preventDefault();

  const traumaCheck = document.getElementById("patientTraumaCheck").checked;
  const pib = document.getElementById("patientPib").value.trim();
  const email = document.getElementById("patientEmail").value.trim();
  const phone = document.getElementById("patientPhone").value.trim();
  const birthDate = document.getElementById("patientBirthDate").value.trim();
  const traumaDate = document.getElementById("patientTraumaDate").value.trim();
  const traumaDescr = document
    .getElementById("patientTraumaDescr")
    .value.trim();
  const currentState = document
    .getElementById("patientCurrentState")
    .value.trim();

  const fileMedDocs = document.getElementById("patientFileMedDocs").files[0];
  const fileNameMedDocs = fileMedDocs ? fileMedDocs.name : "";

  const fileTraumaPhoto = document.getElementById("patientFileTraumaPhoto")
    .files[0];
  const fileNameTraumaPhoto = fileTraumaPhoto ? fileTraumaPhoto.name : "";

  const personalDataCheck = document.getElementById(
    "patientPersonalDataCheck"
  ).checked;

  const patient = {
    traumaCheck,
    pib,
    email,
    phone,
    birthDate,
    traumaDate,
    traumaDescr,
    currentState,
    fileNameMedDocs,
    fileNameTraumaPhoto,
    personalDataCheck,
  };

  console.log("patient:", patient);
}

// lang switcher
const ukrainian = document.getElementById("lang-ua");
const english = document.getElementById("lang-en");

english.addEventListener("click", function () {
  changeLanguage(english, ukrainian);
});

ukrainian.addEventListener("click", function () {
  changeLanguage(ukrainian, english);
});

function changeLanguage(lang_on, lang_off) {
  if (!lang_on.classList.contains("current_lang")) {
    lang_on.classList.add("current_lang");
    lang_off.classList.remove("current_lang");
  }
}

// lang switcher desc
const langSingle = document.getElementById("lang-single");

langSingle.addEventListener("click", function () {
  if (langSingle.textContent.includes("UA")) {
    langSingle.textContent = "EN";
  } else if (langSingle.textContent.includes("EN")) {
    langSingle.textContent = "UA";
  }
});

// sliders
const aboutSection = document.getElementById("about");

if (aboutSection) {
  slidersConfig();
}

function slidersConfig() {
  $(".slider-news-js").on("init", function (event, slick) {
    var dotCount = slick.$dots.find("li").length;
    var maxDotsToShow = 4; // Задаємо максимальну кількість точок для відображення

    if (dotCount > maxDotsToShow) {
      const activeIndex = slick.$dots.find(".slick-active").index();

      const start = Math.max(0, activeIndex - Math.floor(maxDotsToShow / 2));
      const end = Math.min(dotCount, start + maxDotsToShow);

      // Перевіряємо чи початок і кінець не виходять за межі
      if (end - start < maxDotsToShow) {
        start = Math.max(0, end - maxDotsToShow);
      }

      // Сховати всі точки
      slick.$dots.find("li").hide();

      // Показати відфільтровану кількість точок
      for (let i = start; i < end; i++) {
        slick.$dots.find("li").eq(i).show();
      }
    }
  });

  $(".slider-stories-js").on("init", function (event, slick) {
    var dotCount = slick.$dots.find("li").length;
    var maxDotsToShow = 4; // Задаємо максимальну кількість точок для відображення

    if (dotCount > maxDotsToShow) {
      const activeIndex = slick.$dots.find(".slick-active").index();

      const start = Math.max(0, activeIndex - Math.floor(maxDotsToShow / 2));
      const end = Math.min(dotCount, start + maxDotsToShow);

      // Перевіряємо чи початок і кінець не виходять за межі
      if (end - start < maxDotsToShow) {
        start = Math.max(0, end - maxDotsToShow);
      }

      // Сховати всі точки
      slick.$dots.find("li").hide();

      // Показати відфільтровану кількість точок
      for (let i = start; i < end; i++) {
        slick.$dots.find("li").eq(i).show();
      }
    }
  });

  $(".slider-team-js").on("init", function (event, slick) {
    var dotCount = slick.$dots.find("li").length;
    var maxDotsToShow = 4; // Задаємо максимальну кількість точок для відображення

    if (dotCount > maxDotsToShow) {
      const activeIndex = slick.$dots.find(".slick-active").index();

      const start = Math.max(0, activeIndex - Math.floor(maxDotsToShow / 2));
      const end = Math.min(dotCount, start + maxDotsToShow);

      // Перевіряємо чи початок і кінець не виходять за межі
      if (end - start < maxDotsToShow) {
        start = Math.max(0, end - maxDotsToShow);
      }

      // Сховати всі точки
      slick.$dots.find("li").hide();

      // Показати відфільтровану кількість точок
      for (let i = start; i < end; i++) {
        slick.$dots.find("li").eq(i).show();
      }
    }
  });

  $(".slider-ambassadors-js").on("init", function (event, slick) {
    var dotCount = slick.$dots.find("li").length;
    var maxDotsToShow = 4; // Задаємо максимальну кількість точок для відображення

    if (dotCount > maxDotsToShow) {
      const activeIndex = slick.$dots.find(".slick-active").index();

      const start = Math.max(0, activeIndex - Math.floor(maxDotsToShow / 2));
      const end = Math.min(dotCount, start + maxDotsToShow);

      // Перевіряємо чи початок і кінець не виходять за межі
      if (end - start < maxDotsToShow) {
        start = Math.max(0, end - maxDotsToShow);
      }

      // Сховати всі точки
      slick.$dots.find("li").hide();

      // Показати відфільтровану кількість точок
      for (let i = start; i < end; i++) {
        slick.$dots.find("li").eq(i).show();
      }
    }
  });

  $(".slider-news-js").slick({
    dots: true,
    arrows: true,
    infinite: true,
    speed: 300,
    appendArrows: $(".newsSlider-buttonsContainer"),
    appendDots: $(".newsSlider-dotsContainer"),
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 15000,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          arrows: true,
          dots: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          arrows: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          arrows: true,
          dots: true,
        },
      },
    ],
  });

  $(".slider-stories-for-js").slick({
    autoplay: true,
    autoplaySpeed: 15000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: ".slider-stories-js",
  });

  $(".slider-stories-js").slick({
    autoplay: true,
    autoplaySpeed: 15000,
    focusOnSelect: true,
    dots: true,
    arrows: true,
    infinite: true,
    speed: 300,
    appendArrows: $(".storiesSlider-buttonsContainer"),
    appendDots: $(".storiesSlider-dotsContainer"),
    slidesToShow: 4,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    asNavFor: ".slider-stories-for-js",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          arrows: true,
          dots: true,
          vertical: false,
          verticalSwiping: false,
        },
      },
    ],
  });

  $(".slider-team-js").slick({
    autoplay: true,
    autoplaySpeed: 15000,
    dots: true,
    arrows: true,
    infinite: true,
    speed: 300,
    appendArrows: $(".teamSlider-buttonsContainer"),
    appendDots: $(".teamSlider-dotsContainer"),
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          arrows: true,
          dots: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          arrows: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          arrows: true,
          dots: true,
        },
      },
    ],
  });

  $(".slider-ambassadors-js").slick({
    autoplay: true,
    autoplaySpeed: 15000,
    dots: true,
    arrows: true,
    infinite: true,
    speed: 300,
    appendArrows: $(".ambassadorsSlider-buttonsContainer"),
    appendDots: $(".ambassadorsSlider-dotsContainer"),
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          arrows: true,
          dots: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          arrows: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          arrows: true,
          dots: true,
        },
      },
    ],
  });
}

// donation page
// donation value toggle
const donationValueButtons = document.querySelectorAll(
  ".donationValues-button"
);
const donationValuesSubmit = document.querySelector(".donationValues-submit");

let donationValue = 0;

donationValueButtons.forEach((button) => {
  button.addEventListener("click", onDonationValueChange);

  function onDonationValueChange() {
    donationValueButtons.forEach((button) => {
      button.classList.remove("active");
    });

    // if (button.textContent.includes("Інша сума")) {
    //   button.textContent = 1000;
    // }

    donationValue = button.textContent.trim();
    button.classList.toggle("active");
    console.log("donationValue:", donationValue);
  }
});

donationValuesSubmit.addEventListener("click", onDonutionSubmit);

function onDonutionSubmit() {
  donationValueButtons.forEach((button) => {
    if (!button.className.includes("active")) return;

    console.log(button.textContent.trim());
    console.log("submit");
  });
}
