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
