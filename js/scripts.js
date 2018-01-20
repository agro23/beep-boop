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

function doIRefuseDave(number, name){ // ********** going to receive a name
  // * Replaces number divisible by 3 with "I'm sorry, Dave. I'm afraid I can't do that."
  numberString = number;
  if ( (numberString % 3 === 0) && (numberString > 0) ) {
    numberString = "I'm sorry, " + name + ". I'm afraid I can't do that."; // ******* here's where we change out the name. also uppercase/sentencecase it.
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

function doIRefuseDaveBoopOrBeep(number, name){ // ********* will need that name for Dave loop to send
  var x = doIRefuseDave(number, name); // ********** here goes the name
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

function loopTheirNumber (number, direction, name) { // ******* will have to receive name to avoid global
  // Runs through the range from 0 to their number
  var myGroup = "";
  var temp ="";
  // There may be more than one direction to loop or step so I chose two if's instead of if-else
  if (direction==="Forwards") {
    for (var i = 0; i <= number; i++){
      temp = doIRefuseDaveBoopOrBeep(i.toString(), name); // *****  Added Name
      myGroup = myGroup + temp + "<br>";
    }
  }
  if (direction==="Backwards") {
    for (var i = number; i >= 0; i--){
      temp = doIRefuseDaveBoopOrBeep(i.toString(), name); // *****  Added Name
      myGroup = myGroup + temp + "<br>";
    }
  }
  return myGroup;
}

function isValidInput(number){
  if (number.match(/^[0-9]+$/) === null) {
    alert("That is not a number we accept.");
    $("#number").val(''); // clear the form value
    // $('#results h2').empty(); // empty the DOM section
    $("#results").hide();
    return false;
  } else if ((number < 0) || (number > 99)){
    alert("Please input a number between 0 and 99.");
    $("#number").val(''); // clear the form value
    // $('#results h2').empty(); // empty the DOM section
    $("#results").hide();
    return false;
  } else {
    return true;
  }
}

function getName() {
  var userName = prompt("What is your name?");
  if ( (userName === "") || (userName === null) ) {   // trap for empty string and null!
    userName = "Dave";
  }
  return userName;
}

// User Interface Logic
$(document).ready(function() {
  var name = getName();
  $("#user-name").replaceWith(", " + name + ". P");
  $("form#number-form").submit(function(event) {
    event.preventDefault();
    $("#results-p").empty(); // empty the DOM section
    var myNumber = $("#number").val();
    var direction = $("input:radio[name=direction]:checked").val();
    if (isValidInput(myNumber)) {
      myNumber = loopTheirNumber(myNumber, direction, name); // ******* will have to pass username too to not use a global
      myNumber = "<span class='myNumberFormat'>" + myNumber + "</span>";
      $("#results h2").text("RESULTS:");
      $("#results-p").append("<span class='myNumberFormat'><strong>Your Number: </strong><span class='output'>" + $("#number").val() + "</span></span><br>" +myNumber);
      $("#results").show();
    }
    $("#number").val(""); // clear the text form value
  });
});
