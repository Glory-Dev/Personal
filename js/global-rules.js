// Theme
const changeTheme = document.querySelector(
  "body > .setting-shortcuts > .theme"
);

if (localStorage.getItem("theme-mode")) {
  if (localStorage.getItem("theme-mode") == "dark") {
    changeTheme.classList.add("dark-on");
    html.setAttribute("dark", "true");
  } else {
    changeTheme.classList.remove("dark-on");
    html.setAttribute("dark", "false");
  }
}

changeTheme.addEventListener("click", () => {
  changeTheme.classList.contains("dark-on")
    ? changeTheme.classList.remove("dark-on")
    : changeTheme.classList.add("dark-on");

  if (html.getAttribute("dark").valueOf() == "true") {
    html.setAttribute("dark", "false");
    localStorage.setItem("theme-mode", "light");
  } else {
    html.setAttribute("dark", "true");
    localStorage.setItem("theme-mode", "dark");
  }
});

// Language
const changeLanguage = document.querySelector(
  "body > .setting-shortcuts > .lang"
);

if (localStorage.getItem("language")) {
  if (localStorage.getItem("language") == "ar") {
    changeLanguage.classList.add("rtl-on");
    html.setAttribute("lang", "ar");
  } else {
    changeLanguage.classList.remove("rtl-on");
    html.setAttribute("lang", "en");
  }
}

changeLanguage.addEventListener("click", () => {
  changeLanguage.classList.contains("rtl-on")
    ? changeLanguage.classList.remove("rtl-on")
    : changeLanguage.classList.add("rtl-on");

  if (html.getAttribute("lang").valueOf() == "ar") {
    html.setAttribute("lang", "en");
    localStorage.setItem("language", "en");
  } else {
    html.setAttribute("lang", "ar");
    localStorage.setItem("language", "ar");
  }
});

// Setting
const settingButton = document.querySelector(
  "body > .setting-shortcuts > .options"
);
const settingWindow = document.querySelector("body > .setting");

settingButton.addEventListener("click", settingPopUp);

// Scroll To Top

const scrollToTop = document.querySelector("body > .scroll-top");

window.addEventListener("scroll", () => {
  scrollY >= 1300
    ? scrollToTop.classList.add("show")
    : scrollToTop.classList.remove("show");
});

// Scroll To Top Action
scrollToTop.addEventListener("click", goUp);

/* End Landing */
