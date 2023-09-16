const changeTheme = () => {
  const body = document.body;
  const button = document.getElementById("theme-button");

  if (body.classList.contains("light")) {
    body.classList.remove("light");
    button.style.animation = "toggle-slide-left 0.2s";
  } else {
    body.classList.add("light");
    button.style.animation = "toggle-slide-right 0.2s forwards";
  }
};
