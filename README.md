# Beep-Boop

#### _Number response program with fun retorts, 01/19/18_

#### _**Andy Grossberg**_

## Description

_This is the Friday Project for Week Three of Intro to Programming at Epicodus_

## Rules for the Beep-Boop assignment
  _The user will input a number and the program will respond as follows:_

  * Numbers that contain a 0 are replaced (all digits) with "Beep!"

  * Numbers that contain a 1 are replaced (all digits) with "Boop!"

  * Numbers divisible by 3 are replaced with "I'm sorry, Dave. I'm afraid I can't do that."

## Methodology

### _The following specs are included in the program:_

**Take input from the user, replace some or all of the digits, then**
**display the range from 0 to the inputted number back to them.**

* The program replaces 0 with "Beep!"
  - Example Input: 0
  - Example Output: Beep!

* The program replaces 1 with "Boop!"
  - Example Input: 1
  - Example Output: Boop!

* The program replaces a number divisible by 3 with "I'm sorry, Dave. I'm afraid I can't do that."
  - Example Input: 9
  - Example Output: I'm sorry, Dave. I'm afraid I can't do that.

* The program replaces a number with 0 as one of its digits with "Beep!"
  - Example Input: 40
  - Example Output: Beep!

* The program replaces a number with 1 as one of its digits with "Boop!"
  - Example Input: 1000
  - Example Output: Boop!

* The program runs through a loop from to the input number applying the rules to the output
  - Example Input: 4
  - Example Output:
    * Beep!
    * Boop!
    * 2
    * I'm sorry, Dave. I'm afraid I can't do that.
    * 4

* TRAP INPUT FOR non-number CHARS to make only numbers allowed.

* TRAP INPUT FOR non-integer numbers. (solution combined with above)

* Output results formatted to look nicer <---

* Refactor code and clean up code

## Setup/Installation Requirements

* Download the files from the repository into appropriately named directories.
* Open the files with the browser of your choice.

## Known Bugs

_There are no known issues at this time. However, the program does not catch non-number input._

## Support and contact details

_You can contact me at andy.grossberg@gmail.com_

## Technologies Used

_Uses HTML, CSS, javascript, and jQuery._

### License

*Distributed under the GPL*

Copyright (c) 2018 **_Andy Grossberg_**
