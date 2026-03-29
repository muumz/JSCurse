function fibonacciGenerator(n){
  // n is the number of items
    var array1 = [0,1];
    var array2 = [];
    var x;
    /*
    x = array1[0]+array1[1];
    array1.push(x);
    console.log(array1);

    x=array1[2]+array1[1];
    array1.push(x);
    console.log(array1);

    x = array1[3] + array1[2];
    array1.push(x);
    console.log(array1);

    x = array1[4] + array1[3];
    array1.push(x);
    console.log(array1);

     x = array1[5] + array1[4];
     array1.push(x);
     console.log(array1);*/
    

    var array2 = [0, 1];
    var y = array2.length;
    console.log(y);


    for (var i = 0; i < n; i++){
        var y = array2.length;
        var lastNr = array2[y - 1] + array2[y - 2];
        array2.push(lastNr);
     }
   console.log(array2);
}

fibonacciGenerator(10);