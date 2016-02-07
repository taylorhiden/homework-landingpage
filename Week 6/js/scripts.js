/*
 * Hi Taylor!  I am including feedback about your code here in inline Javascript comments.
 * 
 * Overall, the logic of your JS code here looks great!  
 * There was one syntax error with your code - specifically with the punctuation at the 
 * bottom of the file.  You have an extra end curly brace, which I commented out below.  
 * Once I commented this out, your code works perfectly!
 *
 * Make sure the indentation of your code is consistent - that can really help you find issues
 * like extra punctuation easier to find.
 */

$(document).ready(function() {

   // Form validation goes here!

   $("form").submit(checkEverything);
 
   function checkEverything(event) {
   		event.preventDefault();

      /* Great use of multiple functions here - it is really good form to have one function for one task. */
   		checkName();
   		checkEmail();
      checkPassword();
   }

   function checkName () {

       var firstName = $('#first').val();
       console.log(firstName);

       var lastName = $('#last').val();

       /* 
        * This if statement is just great. 
        * One comment about the conditionals, you can also say:
        *    if (!firstName)
        * The "!" means "not", which means here "if there is nothing in the firstName variable"
        * Exactly the same as what you are saying here (firstName == false).
        */
       
       if (firstName == false) {
           alert("Type in your first name!!");
       } else if (lastName == false) {
           alert("Type in your last name!!");
       } else if (firstName == false && lastName == false){
          alert("Type in your first and last name!!")
       } else if (firstName == true && lastName == true) {
       }
   }

   function checkEmail() {

   		var email = $('#email').val();

   		if (email == false) {
   		 alert('Invalid email');
   		} else {
   			/* If you do not want anything to happen if the conditional in the "if" statement is false, you
           do not need to have the "else" statement here.
         */
   		}
   }

   function checkPassword() {
      var password = $('#password').val();

      if (password.length < 5) {
        alert("Password must contain 6 characters");
      } else {

      }

   }



   // }  <-- extra end curly brace causing a syntax error.

});