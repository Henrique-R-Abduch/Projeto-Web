const emailRegex =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

document
  .querySelector("#button")
  .addEventListener("click", (event) => login(event));

const checkIfIsRemebered = () => {
  const email = window.localStorage.getItem("email");
  const password = window.localStorage.getItem("password");

  if (email && password) {
    document.querySelector("#email").value = email;
    document.querySelector("#password").value = password;
  }
};

const storageUserInformation = () => {
  // Eu sei que isso não faz sentido em aplicações reais, mas apenas um exemplo!

  const radioButton = document.querySelector("#radioButton").checked;

  if (radioButton) {
    const email = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;

    window.localStorage.setItem("email", email);
    window.localStorage.setItem("password", password);
    return;
  }

  window.localStorage.removeItem("email");
  window.localStorage.removeItem("password");
};

const login = (event) => {
  event.preventDefault();

  storageUserInformation();

  const email = document.querySelector("#email");
  const password = document.querySelector("#password");

  if (email.value === "" || password.value === "") {
    alert("Por favor preencha todos os campos");
    return;
  }

  if (!emailRegex.test(email.value)) {
    alert("Por favor preencha o email corretamente");
    return;
  }

  window.location.href = "index.html";
  window.localStorage.setItem("isLogged", true);
};

const checkIfIsLogged = () => {
  const isLogged = window.localStorage.getItem("isLogged");

  if (isLogged) {
    window.location.href = "index.html";
  }
};

const init = () => {
  checkIfIsLogged();
  checkIfIsRemebered();
};

init();
