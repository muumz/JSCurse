function whosPaying(names) {
  /******Don't change the code above*******/

  //Write your code here.

  var n = Math.random();

  var randomListNr = Math.floor(n * names.length);

  var buyer = names[randomListNr];
  return buyer + " is going to buy lunch today!";
}

whosPaying(["Angela", "Ben", "Jenny", "Michael", "Chloe"]);
