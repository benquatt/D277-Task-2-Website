  function validateEmail() {
    let emailField1 = document.getElementById("email1").value;
    let emailField2 = document.getElementById("email2").value;

    if(emailField1 !== emailField2) {
      alert("Please make sure the e-mail fields match!");
    }
  }