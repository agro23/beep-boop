// Initialization

// Business Logic

function doIBeep(number){
  // * The program replaces 0 with "Beep!"
  //   - Example Input: 0
  //   - Example Output: Beep!
  // var numberString = number.toString();
  numberString = number;
  // alert ("Number = " + number + " Number String = " + numberString);
  // alert (numberString.charAt(0));
  // if (numberString.charAt(0) === "2") { alert("it's a 2!");}
  // if (numberString.charCodeAt(0) === 48) { alert("it's a 0!");} // 0	DIGIT ZERO (U+0030)	feff0030
  if (numberString.charCodeAt(0) === 48) { // had to use the UTF code for some reason
    numberString = "Beep!";
  } else {
    // numberString = parseInt(number);
    numberString = number;
  }
  return numberString; // returning the number as a string right now
}

function doIBoop(number){
  // * The program replaces 1 with "Boop!"
  //   - Example Input: 1
  //   - Example Output: Boop!
  // var numberString = number.toString();
  numberString = number;
  if (numberString.charAt(0) === "1") {
    numberString = "Boop!";
  } else {
    // numberString = parseInt(number);
    numberString = number;
  }
  return numberString; // returning the number as a string right now
}

function doIRefuseDave(number){
  // * The program replaces number divisible by 3
  //   with "I'm sorry, Dave. I'm afraid I can't do that."
  //   - Example Input: 3
  //   - Example Output: "I'm sorry, Dave. I'm afraid I can't do that."
  numberString = Number(number); // force convert input to a number
  if (numberString % 3 === 0) {
    numberString = "I'm sorry, Dave. I'm afraid I can't do that.";
  } else {
    // numberString = parseInt(number);
    numberString = number;
  }
  return numberString; // returning the number as a string right now
}

function step4(){

}

function step5(){

}


// User Interface Logic
$(document).ready(function() {
  $("form#number-form").submit(function(event) {
    event.preventDefault();
    var myNumber = "";
    // myNumber = parseInt($('#number').val());
    myNumber = $('#number').val();
    myNumber = doIRefuseDave(myNumber);
    myNumber = doIBoop(myNumber);
    myNumber = doIBeep(myNumber);
    // run through step functions
    $('#results').text("RESULTS: "+ myNumber);
    $('#results').show();
  });
});
