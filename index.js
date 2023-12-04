console.log("hi from js");

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

// read more
const newsReadMoreButtons = document.querySelectorAll(".newsItem-readMore");

if (newsReadMoreButtons) {
  newsReadMoreButtons.forEach((button) => {
    button.addEventListener("click", onReadMoreClick);

    function onReadMoreClick() {
      const closestWrap = button.closest("li");

      let readMoreDiv = null;

      for (const child of closestWrap.children) {
        if (child.className === "newsItem-descriptionWrap") {
          readMoreDiv = child;
        }
      }

      if (readMoreDiv.style.height !== "auto") {
        readMoreDiv.style.height = "auto";
        button.textContent = "Згорнути";
        return;
      }

      if (readMoreDiv.style.height === "auto") {
        readMoreDiv.style.height = "126px";
        button.textContent = "Читати більше...";
        return;
      }
    }
  });
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
