let btnUp = document.querySelector(".fa-arrow-up"),
  btnDown = document.querySelector(".fa-arrow-down"),
  inputField = document.querySelector("input");

let value: number = 0;

// func to read the value from the input field
const readValue = () => {
  if (inputField.value === "") {
    value = 0;
  } else {
    value = +inputField.value;
  }
};

// func to display the result value to the input field
const showResult = () => {
  inputField.value = `${value}`;
};

inputField.addEventListener("click", e => {
  inputField.addEventListener("keydown", e => {
    if (
      e.keyCode !== 96 &&
      e.keyCode !== 97 &&
      e.keyCode !== 98 &&
      e.keyCode !== 99 &&
      e.keyCode !== 100 &&
      e.keyCode !== 101 &&
      e.keyCode !== 102 &&
      e.keyCode !== 103 &&
      e.keyCode !== 104 &&
      e.keyCode !== 105 &&
      e.keyCode !== 8
    ) {
      e.preventDefault();
    }
  });
});

btnUp.addEventListener("click", () => {
  readValue();
  value++;
  showResult();
});

btnDown.addEventListener("click", () => {
  readValue();
  value--;
  showResult();
});
