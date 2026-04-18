const buttons = document.querySelectorAll("button");

buttons.forEach(button => {
    button.addEventListener("click", handleClick);
})

//document.getElements("button").addEventListener("click", handleClick);

function handleClick() {
  alert("I got clicked!");
}
