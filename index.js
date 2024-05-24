const buttons = new Array(...document.getElementsByTagName("button"));

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    document.body.style.width = "100vw";
    document.body.style.height = "100vh";
    document.body.innerHTML =
      "<img src='https://cs12.pikabu.ru/post_img/big/2021/12/31/5/1640933893191030818.png' />";
  });
});
