const changeTheme = () => {
  const body = document.body;
  const button = document.getElementById("theme-button");

  if (body.classList.contains("light")) {
    body.classList.remove("light");
    button.style.right = "0";
    button.style.removeProperty("left");
  } else {
    body.classList.add("light");
    button.style.left = "0";
    button.style.removeProperty("right");
  }
};
