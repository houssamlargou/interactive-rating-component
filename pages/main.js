document.querySelector(".card-button").addEventListener("click", () => {
  const selectedItem = document.querySelector(
    ".number--highlighted"
  ).textContent;
  location.href = `/thank-you.html?selected=${selectedItem}`;
});

function highlight(number) {
  const buttons = Array.from(document.querySelectorAll(".number"));
  for (let i = 0; i < buttons.length; i++) {
    const element = buttons[i];
    element.classList.remove("number--highlighted");
  }
  // alert(number);
  const button = buttons.at(number - 1);
  // console.log(( button: button ));
  button.classList.add("number--highlighted");
}
