// var uname = document.getElementById("username");
// var email = document.getElementById("email");
// var password=document.getElementById("pass")
// var form = document.querySelector("form");

// var unameError = document.querySelector("#username + span.error");
// var emailError = document.querySelector("#email + span.error");
// var passwordError=document.querySelector("#pass + span.error")


// form.addEventListener('input', (e) => {
    
//     if(uname.validity.valid){
//         unameError.textContent = "";
//         unameError.className = "errors";
//     }
//     if(email.validity.valid){
//         emailError.textContent = "";
//         emailError.className = "errors";
//     }
//     if(password.validity.valid){
//         passwordError.textContent="";
//         passwordError.className="errors";
//     }
//     showError();
// });


// function showError(){
//     if(uname.value.trim() == "" || uname.value == null){
//         unameError.textContent = "Username is required";
//     }else if(uname.value.length < 4){
//         unameError.textContent = "minimum 4 character needed";
//     }
    
//     if(email.value.trim() == "" || email.value == null){
//         emailError.textContent = "Email is required";
//     }else if(email.value.length < 4){
//         emailError.textContent = "minimum 4 character needed";
//     }

//     if(password.value.trim() == "" || password.value == null){
//         passwordError.textContent = "Password is required";
//     }
//     else if(password.value.length < 4){
//         passwordError.textContent = "minimum 4 character needed"
//     }
    
//     unameError.className = "error invalid";    
//     emailError.className = "error invalid"; 
//     passwordError.className = "error invalid";   

// }

// form.addEventListener('submit', (e) => {
    
//     if(!uname.valid && !email.valid && !password.valid){
//         showError();
//         e.preventDefault();
        
//     }
//     if(uname.validity.valid && email.validity.valid && password.validity.valid){
//         window.location.href="https://www.google.com/";
//         // e.preventDefault();
        
//     }
//     e.preventDefault();
// });


var username = document.getElementById("username");
var email = document.getElementById("email");
var password=document.getElementById("pass")
var form = document.querySelector("form");

form.addEventListener('input', (e) => {    
    validateInputs();
});


function validateInputs(){
    const usernameVal = username.value.trim(); 
    const emailVal = email.value.trim(); 
    const passwordVal = password.value.trim();
    let success = true;

    if(usernameVal === ''){
        success = false;
        setError(username, "Username is required");        
    }else if(usernameVal.length < 4){
        success = false;
        setError(username, "Username should be 4 letters");        
    }else{
        setSuccess(username);
    }

    if(emailVal === ''){
        success = false;
        setError(email, "Email is required");        
    }else if(!validateEmail(emailVal)){
        success = false;
        setError(email, "Please enter valid email");        
    }else{
        setSuccess(email);
    }

    if(passwordVal === ''){
        success = false;
        setError(password, "password is required")
    }else if(passwordVal.length < 6){
        success = false;
        setError(password, "please enter the valid password");
    }else{
        setSuccess(password);
    }

    return success;
}

const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

function setError(element, message){
    const inputGroup = element.parentElement;
    const errorElement = inputGroup.querySelector('.error');
    errorElement.innerText = message;
    errorElement.classList.add('invalid');
}

function setSuccess(element){
    const inputGroup = element.parentElement;
    const errorElement = inputGroup.querySelector('.error');
    errorElement.innerText = "";
    errorElement.classList.add('valid');
    errorElement.classList.remove('invalid');
}

form.addEventListener('submit', (e) => {   
    e.preventDefault();
    if(validateInputs()){    
        window.location.href = 'https://www.google.com';
    }
});
