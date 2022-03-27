function Fhandler() {
  const FullName = document.forms["reg-form"]["FullName"].value;
  const Email = document.forms["reg-form"]["Email"].value;
  const Date = document.forms["reg-form"]["Date"].value;
  const Phone = document.forms["reg-form"]["Phone"].value;
  const Gender = document.forms["reg-form"]["Gender"].value;
  const state = document.forms["reg-form"]["state"].value;
  const textarea = document.forms["reg-form"]["textarea"].value;
  const Password = document.forms["reg-form"]["Password"].value;
  const ConfirmPassword = document.forms["reg-form"]["ConfirmPassword"].value;
  const submit = document.forms["reg-form"]["submit"].value;
  const at = Email.indexOf("@");
  const dot = Email.indexOf(".");
  const subject = document.getElementById("subject");

  if (FullName == "") {
    alert("Please Enter Your Full Name");
    return false;
  }
  if (!isNaN(FullName)) {
    alert("Please not type number");
    return false;
  }
  //Email===========================
  if (Email == "") {
    alert("Please Enter Your Email");
    return false;
  }

  if (at < 1 || dot < at + 3 || dot + 3 >= Email.length) {
    alert("not a valid email");
    return false;
  }
  //Phone ======================
  if (Phone == "") {
    alert("Please Enter Your Phone");
    return false;
  }
  if (isNaN(Phone)) {
    alert("Please type number");
    return false;
  }
  if (Phone.length <= 11) {
    alert("Please 11");
    return false;
  }
  //Gender=======================
  if (Gender == "") {
    alert("Please Enter Your Gender");
    return false;
  }
  // state=================
  if (state == "Select Your state") {
    alert("Please Enter Your state");
    return false;
  }
  // textarea=================
  if (textarea == "") {
    alert("Please Enter Your textarea");
    return false;
  }

  if(subject.checked){
      alert("Please enter subject")
      return false;
  }

  if((Password.length>8  && Password.length<12)){
      alert("Please checked your password")
      return false
  }
  if(!(Password==ConfirmPassword)){
      alert("Please not match password")
      return false
  }
}