document.getElementById("trueform").addEventListener("submit", function(event) {
  event.preventDefault();
  let fname=document.getElementById("fname").value.trim();
  let lname=document.getElementById("lname").value.trim();
  let email=document.getElementById("email").value.trim();
  let password=document.getElementById("password").value;
  let confirm=document.getElementById("confirm").value;
  let err=document.getElementById("err");
  err.textContent = "";

  let fnameError = document.getElementById("fnameError");
  let lnameError = document.getElementById("lnameError");
  let emailError = document.getElementById("emailError");
  let passwordError = document.getElementById("passwordError");
  let confirmError = document.getElementById("confirmError");
  let success = document.getElementById("success");

  fnameError.textContent = "";
  lnameError.textContent = "";
  emailError.textContent = "";
  passwordError.textContent = "";
  confirmError.textContent = "";
  success.textContent = "";

  let isValid = true;

if (!/^[A-Za-z ]+$/.test(fname)) {
    fnameError.textContent="Name should contain only alphabets";
    isValid = false;
  }

  if (!/^[A-Za-z ]+$/.test(lname)) {
    lnameError.textContent="Name should contain only alphabets";
    isValid = false;
  }

  if(!email.includes("@")||!email.includes(".")){
    emailError.textContent="Enter valid email";
    isValid=false;
  }
  
  if(password.length<6){
    passwordError.textContent="Password should contain atleast 6 characters";
     isValid=false;
  }
  if(confirm!=password){
    confirmError.textContent="Password is not same as entered before";
     isValid=false;
  }
  if(isValid){
  success.style.color = "green";
  success.textContent = "✅ Signup successful!";
  }

});

document.getElementById("signin").addEventListener("click",(e)=>{
  localStorage.setItem("signedUp", "true");
  window.location.href = "index.html";
});