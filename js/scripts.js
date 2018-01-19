// Initialization

// Business Logic

function doIBeep(number){
  // * The program replaces 0 with "Beep!"
  var numberString ="";
  if (number === "0") { // just be something
    numberString = "Beep!";
  } else {
    numberString = number;
  }
  return numberString; // returning the number as a string right now
}

function doIBoop(number){
  // * The program replaces 1 with "Boop!"
  if (number.charAt(0) === "1") {
    numberString = "Boop!";
  } else {
    numberString = number;
  }
  return numberString; // returning the number as a string right now
}

function doIRefuseDave(number){
  // * Replaces number divisible by 3 with "I'm sorry, Dave. I'm afraid I can't do that."
  numberString = number;
  if ( (numberString % 3 === 0) && (numberString > 0) ) {
    numberString = "I'm sorry, Dave. I'm afraid I can't do that.";
  } else {
    numberString = number;
  }
  return numberString; // returning the number as a string right now
}

function doIBeepLong(number){ // receiving one char
  for (i = 0; i < number.length; i++) {
    if (doIBeep(number.substr(i,1)) === "Beep!"){
      return "Beep!";
      break; // exit the loop because we found the digit is 0!
    }
  }
  return number;
}

function doIBoopLong(number){ // receiving one char
  for (i = 0; i < number.length; i++) {
    if (doIBoop(number.substr(i,1)) === "Boop!"){
      return "Boop!";
      break; // exit the loop because we found the digit is 1!
    }
  }
  return number;
}

function doIRefuseDaveBoopOrBeep(number){
  var x = doIRefuseDave(number);
  if (x !== number) { // It's divisible by 3
    return x;
  } else if (doIBoopLong(number) === "Boop!") { // It's got a 1
    return "Boop!";
  } else if (doIBeepLong(number) === "Beep!") { // It's got a 0 in it
    return "Beep!";
  } else {
    return number;
  }
}

function loopTheirNumber (number) {
  // Runs through the range from 0 to their number
  var myGroup = "";
  var temp ="";
  var t = 0;
  for (var i = 0; i <= number; i++){
    temp = doIRefuseDaveBoopOrBeep(i.toString());
    myGroup = myGroup + temp + "<br>";
    t = t + 1;
    if (t > 99) { break; }
  }
  return myGroup;
}

function isValidInput(number){
  if (number.match(/^[0-9]+$/) === null) {
    alert("That is not a number we accept.");
    $('#number').val(''); // clear the form value
    // $('#results h2').empty(); // empty the DOM section
    $('#results').hide();
    return false;
  } else if ((number < 0) || (number > 99)){
    alert("Please input a number between 0 and 99.");
    $('#number').val(''); // clear the form value
    // $('#results h2').empty(); // empty the DOM section
    $('#results').hide();
    return false;
  } else {
    return true;
  }
}

// User Interface Logic
$(document).ready(function() {
  $("form#number-form").submit(function(event) {
    event.preventDefault();
    $('#results-p').empty(); // empty the DOM section
    var myNumber = "";
    myNumber = $('#number').val();
    if (isValidInput(myNumber)) {
      myNumber = loopTheirNumber(myNumber);
      $('#results h2').text("RESULTS:");
      $('#results-p').append("<strong>Your Number: </strong><span class='output'>" + $('#number').val() + "</span><br>" +myNumber);
      $('#results').show();
    }
    $('#number').val(''); // clear the form value
  });
});
