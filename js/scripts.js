// Initialization

// Business Logic

function doIBeep(number){
  var numberString ="";
  // * The program replaces 0 with "Beep!"
  //   - Example Input: 0
  //   - Example Output: Beep!
  // alert("number's type: " + (typeof number));
  if (number === "0") { // just be something
    numberString = "Beep!";
  } else {
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

function doIBeepLong(number){ // receiving one char
  for (i = 0; i < number.length; i++) {
    console.log("Char At " + i + " = " + number.charAt(i) + " -- " + (typeof number.charAt(i)));
    // if (doIBeep(number.charAt[i]) === "Beep!"){
    if (doIBeep(number.substr(i,1)) === "Beep!"){
      return "Beep!";
      break; // exit the loop because we found the digit is 0!
    }
  }
  return number;
}

function step5(){ // do I Boop long

}

function step6(){ // div by 3 already handled?

}

// User Interface Logic
$(document).ready(function() {
  $("form#number-form").submit(function(event) {
    event.preventDefault();
    var myNumber = "";
    // myNumber = parseInt($('#number').val());
    myNumber = $('#number').val();
    myNumber = doIBeepLong(myNumber);
    // myNumber = doIRefuseDave(myNumber);
    // myNumber = doIBoop(myNumber);
    // myNumber = doIBeep(myNumber); // take this out because it's redundant now.
    // run through step functions
    $('#results').text("RESULTS: "+ myNumber);
    $('#results').show();
  });
});
