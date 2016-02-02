$(document).ready(function() {

   // Form validation goes here!

   $("form").submit(checkEverything);
 
   function checkEverything(event) {
   		event.preventDefault();

   		checkName();
   		checkEmail();
      checkPassword();
   }

   function checkName () {

       var firstName = $('#first').val();
       console.log(firstName);

       var lastName = $('#last').val();

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
   			
   		}
   }

   function checkPassword() {
      var password = $('#password').val();

      if (password.length < 5) {
        alert("Password must contain 6 characters");
      } else {

      }

   }



   }

});