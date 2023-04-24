// I'm taking only printing true if both parameters
// are greater or equal to 5.

// print true for 5 and 6, 10 and 11, 5 and -5 
if (num1 && num2 >= 5) {
  console.log("true");
}

// print false for 0 and 0,  1000 and -1000, 6 and 4, 
if (num1 && num2 < 5) {
  console.log("false");
}
