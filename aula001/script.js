const fieldEmail = document.getElementById("email");
const fieldPassword = document.getElementById("password");
const emailErrorMessage = document.getElementById("email-error-message");
const passwordErrorMessage = document.getElementById("password-error-message");

const form = document.querySelector("form");

function handleSubmit(event) {
  event.preventDefault();

  emailErrorMessage.textContent = '';
  passwordErrorMessage.textContent = '';

  if (fieldEmail.value.trim() === "") {
    emailErrorMessage.textContent = 'O Email é Obrigatório';
    emailErrorMessage.style.cssText = "font-size: 12px; color: red;";
    return;
  } 

  if (fieldPassword.value.trim() === "") {
    passwordErrorMessage.textContent = 'A senha é Obrigatória';
    passwordErrorMessage.style.cssText = "font-size: 12px; color: red;";
    return;
  } 

  alert("Enviado com sucesso");
}

form.addEventListener("submit", handleSubmit);
