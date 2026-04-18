const buttons = document.querySelectorAll(".drum");

buttons.forEach(button => {
    button.addEventListener("click", handleClick);
})

//document.querySelector("button").addEventListener("click", handleClick);

function handleClick() {
  alert("I got clicked!");
}
