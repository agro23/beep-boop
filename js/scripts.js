// Initialization

// Business Logic

function doIBeep(number){
  var numberString ="";
  // * The program replaces 0 with "Beep!"
  //   - Example Input: 0
  //   - Example Output: Beep!
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
  if (number.charAt(0) === "1") {
    numberString = "Boop!";
  } else {
    numberString = number;
  }
  return numberString; // returning the number as a string right now
}

function doIRefuseDave(number){
  // * The program replaces number divisible by 3
  //   with "I'm sorry, Dave. I'm afraid I can't do that."
  //   - Example Input: 3
  //   - Example Output: "I'm sorry, Dave. I'm afraid I can't do that."
  // numberString = Number(number); // force convert input to a number
  numberString = number; // goddam javascript loose types!

  // alert("Dave got: " + number + " and converted it to: " + numberString);
  if ( (numberString % 3 === 0) && (numberString > 0) ) {
    numberString = "I'm sorry, Dave. I'm afraid I can't do that.";
    // console.log("Got Dave results!");
  } else {
    // numberString = parseInt(number);
    numberString = number;
  }
  return numberString; // returning the number as a string right now
}

function doIBeepLong(number){ // receiving one char
  for (i = 0; i < number.length; i++) {
    console.log("Beep Char At " + i + " = " + number.charAt(i) + " -- " + (typeof number.charAt(i)));
    // if (doIBeep(number.charAt[i]) === "Beep!"){
    if (doIBeep(number.substr(i,1)) === "Beep!"){
      return "Beep!";
      break; // exit the loop because we found the digit is 0!
    }
  }
  return number;
}

function doIBoopLong(number){ // receiving one char
  for (i = 0; i < number.length; i++) {
    console.log("Boop Char At " + i + " = " + number.charAt(i) + " -- " + (typeof number.charAt(i)));
    // if (doIBeep(number.charAt[i]) === "Beep!"){
    if (doIBoop(number.substr(i,1)) === "Boop!"){
      return "Boop!";
      break; // exit the loop because we found the digit is 1!
    }
  }
  return number;
}

function doIRefuseBoopOrBeep(number){
  var x = doIRefuseDave(number);
  // console.log("number = " + number + " AND x = " + x);
  // console.log("and x != number is: " + (x != number));
  if (x !== number) { // It's divisible by 3
    console.log("x= " + x);
    console.log("check Dave");
    return x;
  } else if (doIBoopLong(number) === "Boop!") { // It's Got a 1
    console.log("check Boop");
    return "Boop!";
  } else if (doIBeepLong(number) === "Beep!") { // It's got a 0 in it
    console.log("check Beep");
    return "Beep!";
  } else {
    return number;
  }
}

function loopTheirNumber (number) {
  var myGroup = "";
  var temp ="";
  var t = 0;
  // alert("number = " + (typeof number));
  // number = parseInt(number);
  // alert("Now it's " + (typeof number));
  // // ************************************************
  // // ******* make it a numerical value!!!! **********
  // // ************************************************
  for (var i = 0; i <= number; i++){
    console.log ("I = " + i);
    temp = doIRefuseBoopOrBeep(i.toString());
    myGroup = myGroup + temp + "<br>";
    console.log("myGroup: " + myGroup)
    t = t + 1;
    if (t > 99) { break; }
  }
  return myGroup;
}


// User Interface Logic
$(document).ready(function() {
  $("form#number-form").submit(function(event) {
    event.preventDefault();
    var myNumber = "";
    // myNumber = parseInt($('#number').val());
    myNumber = $('#number').val();
    // validateNumber (myNumber); // *******************************
    // alert("I have input: "+ myNumber);
    myNumber = loopTheirNumber(myNumber);
    // myNumber = doIRefuseBoopOrBeep(myNumber);
    // myNumber = doIBoopLong(myNumber);
    // myNumber = doIBeepLong(myNumber);
    // myNumber = doIRefuseDave(myNumber);
    // myNumber = doIBoop(myNumber);
    // myNumber = doIBeep(myNumber); // take this out because it's redundant now.
    // run through step functions
    // $('#results').text("RESULTS: "+ myNumber);

    // $('#results').text("RESULTS: " + "<br>");
    // $('#results-p').trigger("reset") // resets the form
    $('#results-p').empty(); // empty's the DOM at target ID
    $('#results-p').append("<strong>Your Number: </strong><span class='output'>" + $('#number').val() + "</span><br>" +myNumber);
    $('#number').val(''); // clear the form value
    $('#results').show();

  });
});
