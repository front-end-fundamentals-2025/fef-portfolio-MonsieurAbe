const headerElement = document.getElementById("contactme");
const inputElement = document.getElementById("input");
const buttonElement = document.getElementById("button");
const inputArea = document.getElementById("input2");

buttonElement.addEventListener("click", function () {
  let email = inputElement.value;
  let message = inputArea.value;

  if (email !== "") {
    headerElement.innerText = "Thank you for your mail!";
  }
});
