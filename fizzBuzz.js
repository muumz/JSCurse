var output = [];
var count = 1;

function fizzBuzz() {
  var fizz = count % 3;
  var buzz = count % 5;
  if (fizz === 0 && buzz === 0) {
    output.push("FizzBuzz");
  } else if (fizz === 0) {
    output.push("Fizz");
  } else if (buzz === 0) {
    output.push("Buzz");
  } else {
    output.push(count);
  }
  count++;
  console.log(output);
}
