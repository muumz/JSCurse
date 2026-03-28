// print the 99 bottles of beer with a while loop
// `
// ${99 +i} could have been just hardcoded cus the statement runs is i = 0
// https://www.99-bottles-of-beer.net/lyrics.html

var i = 99;

while (i > -1) {
  if (i === 0) {
    console.log(
      `No more bottles of beer on the wall, no more bottles of beer. Go to the store and buy some more, ${99 + i} bottles of beer on the wall.`,
    );
  } else if (i === 1) {
    console.log(
      i +
        " bottles of beer on the wall," +
        i +
        " bottles of beer. Take one down and pass it around, no more bottles of beer on the wall",
    );
  } else {
    console.log(
      i +
        " bottles of beer on the wall," +
        i +
        " bottles of beer. Take one down and pass it around, " +
        (i - 1) +
        " bottles of beer on the wall.",
    );
  }
  i--;
}
