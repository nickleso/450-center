console.log("hi from js");

// feedback form submit
const feedbackForm = document.getElementById("feedback-form");
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
  console.log({
    name,
    surname,
    phone,
    email,
  });

  form.reset();
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
