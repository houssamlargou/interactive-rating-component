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

tailwind.config = {
  theme: {
    extend: {
      colors: {
        Orange: "hsl(25, 97%, 53%)",
        White: "hsl(0, 0%, 100%)",
        light: "hsla(0, 0%, 33%, 0.244)",
        LightGrey: "hsl(217, 12%, 63%)",
        DarkBlue: "hsl(213, 19%, 18%)",
        VeryDarkBlue: "hsl(216, 12%, 8%)",
      },
    },
  },
  plugins: [],
};
