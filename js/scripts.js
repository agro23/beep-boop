// Initialization

// Business Logic

function step1(){

}

function step2(){

}

function step3(){

}

function step4(){

}

function step5(){

}


// User Interface Logic
$(document).ready(function() {
  $("form#number-form").submit(function(event) {
    event.preventDefault();
    myNumber = $('#number').val();
    // run through step functions
    $('#results').text("RESULTS: "+ myNumber);
    $('#results').show();
  });
});
