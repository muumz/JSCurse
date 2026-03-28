var output = [];
var count = 1;

function fizzBuzz() {
  while (count <= 100) {
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
  }
  console.log(output);
}

fizzBuzz();

//added a while loop so theres no need to spam function fizzbuzz
// not that efficient, cus if i would forget count++ then it would crash, never get increates and 1 would always stay less than hundred and it will run until eternity and crash aka tab would hang

