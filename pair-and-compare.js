// Pair and Compare
// Using if/else statements and strict equality operators 
// compares two sets of two values. 
// Print true if at least one of the pairs is truthy.
// print true if at least one of the operations is true, the result will be true

// print true for 
// "cat" "cat"	    6	"6"
// 0	false	    "horse"	"horse"
// "eight"	"eight"	"ate"	"ate"
// "cake"	"cake"	"pie"	"pie"		
    if (param1A === param1B || param2A === param2B) {
      console.log("true");
// "five"		5		"dog"		"dawg"
// 11		"eleven"	"four"		"for"
    } else if (param1A !== param1B) {
        console.log(param1A != param1B)
    } else if (param2A !== param2B) {
        console.log(param2A != param2B)
    }
    else {
        console.log("false")
    }


