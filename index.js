function add(a, b) {
  return a+b
}

function subtract(a, b) {
  return a-b
}

function multiply(a, b) {
  return a*b
}

function divide(a, b) {
  return a/b
}

var number = 5

function inc(n) {
    n++;
  return n;
}

function dec(n) {
    n--;
  return n;
}


function makeInt(n) {
<<<<<<< HEAD
  var parsed = parseInt(n,10);
=======
  var parsed = parseInt(n)
>>>>>>> 67d1e611b55fa566446c33a6f7ef6a112f8fce35
  return parsed;
}

function preserveDecimal(n) {
<<<<<<< HEAD
  var parsed = parseFloat(n)
=======
  var parsed = parseFloat(n*10)
>>>>>>> 67d1e611b55fa566446c33a6f7ef6a112f8fce35
  return parsed;
}


