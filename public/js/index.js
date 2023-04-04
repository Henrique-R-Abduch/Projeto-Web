const modules = [
  {
    name: "Finanças Básicas",
  },
  {
    name: "Finanças Avançadas",
  },
  {
    name: "IPO",
  },
];

document
  .querySelector("#button_logout")
  .addEventListener("click", () => logoutUser());

const createModuleSection = () => {
  const lessonMap = document.querySelector(".lessonMap");

  modules.forEach((module, index) => {
    const isRight = index % 2 === 0;

    const moduleTitleSection = document.createElement("div");

    moduleTitleSection.style.backgroundColor = "purple";

    moduleTitleSection.className = "module_Title_Section";

    const moduleTitle = document.createElement("p");
    moduleTitle.innerText = module.name;
    moduleTitle.className = "module_title";

    moduleTitleSection.appendChild(moduleTitle);
    lessonMap.appendChild(moduleTitleSection);

    for (let lessonIndex = 0; lessonIndex < 5; lessonIndex++) {
      const lesson = document.createElement("div");
      lesson.classList.add("lesson");

      if (isRight) {
        if (lessonIndex === 1) {
          lesson.style.marginRight = "190px";
        }

        if (lessonIndex === 2) {
          lesson.style.marginRight = "380px";
        }

        if (lessonIndex === 3) {
          lesson.style.marginRight = "190px";
        }
      }

      if (!isRight) {
        if (lessonIndex === 1) {
          lesson.style.marginLeft = "190px";
        }

        if (lessonIndex === 2) {
          lesson.style.marginLeft = "380px";
        }

        if (lessonIndex === 3) {
          lesson.style.marginLeft = "190px";
        }
      }

      lessonMap.appendChild(lesson);
    }
  });
};

const redirectToLogin = () => {
  window.location.href = "login.html";
};

const checkIfIsLogged = () => {
  const isLogged = window.localStorage.getItem("isLogged");

  if (!isLogged) {
    redirectToLogin();
  }
};

const logoutUser = () => {
  localStorage.removeItem("isLogged");
  redirectToLogin();
};

const init = () => {
  checkIfIsLogged();

  createModuleSection();
};

init();
