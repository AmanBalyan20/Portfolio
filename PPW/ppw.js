//Navbar for Small Screens
function myFunction() 
{
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") 
    {     
      x.className += " responsive";
    } 
    else 
    {
      x.className = "topnav";
    }
}

// Contact Form Validation
function printError(elemId, hintMsg) {
  document.getElementById(elemId).innerHTML = hintMsg;
}
function validateForm() {
  var name = document.ContactForm.name.value;
  var email = document.ContactForm.email.value;
  var subject = document.ContactForm.subject.value;

  var nameErr = emailErr = subjectErr = true;
    
    // Validate name
    if(name === "") {
        printError("nameErr", "Please enter your name");
    } else {
        var regex = /^[a-zA-Z\s]+$/;                
        if(regex.test(name) === false) {
            printError("nameErr", "Please enter a valid name");
        } else {
            printError("nameErr", "");
            nameErr = false;
        }
    }
    // Validate email address
    if(email === "") {
        printError("emailErr", "Please enter your email address");
    } else {
        // Regular expression for basic email validation
        var regex = /^\S+@\S+\.\S+$/;
        if(regex.test(email) === false) {
            printError("emailErr", "Please enter a valid email address");
        } else{
            printError("emailErr", "");
            emailErr = false;
        }
    }

    if(subject === "") {
      printError("subjectErr", "Please enter your Subject");
  } else {
      var regex = /^[a-zA-Z\s]+$/;                
      if(regex.test(subject) === false) {
          printError("subjectErr", "Please don't add numbers and special character");
      } else {
          printError("subjectErr", "");
          nameErr = false;
      }
  }

  if((nameErr || emailErr || subjectErr) == true) {
    return false;
 } else {
     // Creating a string from input data for preview
     var dataPreview = "You've entered the following details: \n" +
                       "Full Name: " + name + "\n" +			  
                       "Email Address: " + email + "\n" +
                       "subject: " + subject + "\n";
     // Display input data in a dialog box before submitting the form
     alert(dataPreview);
 }
};



// Go To Top Button
var mybutton = document.getElementById("myBtn");
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    myBtn.style.display = "block";
  } else {
    myBtn.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
