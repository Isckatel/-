console.log("Скрикт подключен!");
let widthWin = document.documentElement.clientWidth;
console.log(widthWin);
test = document.querySelector(".test");
console.log(test);
test.addEventListener("click", function() {
  test.innerHTML="Ширина: " + widthWin;
})
