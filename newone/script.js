var username = document.getElementById("username");
var regno = document.getElementById("register");
var degree = document.getElementById("degree");
var branch = document.getElementById("branch");
var gender = document.getElementById("gender");
var email = document.getElementById("email");
var contact = document.getElementById("contact");
var cgpa = document.getElementById("cgpa");
var form=document.querySelector("#registerform");

// var checkError = true;

uname_required = "username is required";
uname_length = "username must be above 10 character";
reg_required = "regno is required";
reg_length = "regno must be in 10 digits";
reg_length_max = "regno not more than 10 digits";
degree_required = "please choose the degree";
branch_required = "Please choose the branch";
gender_required = "please choose the gender";
email_required = "email is required";
email_check = "please enter the valid email ";
contact_required = "contact is required";
contact_lenght = "contact must be in 10 digits"
contact_lenght_more = "contact not more than 10 digits"
cgpa_required = "cgpa is required";
cgpa_check = "cgpa must be i float value";

form.addEventListener('input', (e) =>{  
    validate();
});

function validate(){
    const usernameVal = username.value.trim();
    const registerVal = regno.value.trim();
    // const degreeVal = degree.value;
    // const branchVal = branch.value;
    // const genderVal = gender.value;
    const emailVal = email.value.trim();
    const contactVal = contact.value.trim();
    const cgpaVal = parseFloat(cgpa.value.trim());
    let success = true;


    if(usernameVal === ""){
        success = false;
        setError(username, uname_required);
    }else if(usernameVal.length < 4){
        success = false;
        setError(username, uname_length);
    }else{
        setSuccess(username);
    }

    if(registerVal === ""){
        success = false;
        setError(regno, reg_required);
    }else if(registerVal.length <= 9){
        success = false;
        setError(regno, reg_length);
    }else if(registerVal.length !== 11){
        success = false;
        setError(regno, reg_length_max);
    }else{
        setSuccess(regno);
    }

    // if(degreeVal === ""){
    //     success = false;
    //     setError(degree, degree_required);
    // }else{
    //     setSuccess(degreeVal);
    // }

    // if(branchVal === ""){
    //     success = false;
    //     setError(branch, branch_required);
    // }else{
    //     setSuccess(branchVal);
    // }

    // if(genderVal === ""){
    //     success = false;
    //     setError(gender, genderVal);
    // }else{
     //     setSuccess(genderVal);
    // }

    if(emailVal === ""){
        success = false;
        // email.style.border = "1px solid red";
        setError(email, email_required);
    }else if(!validateEmail(emailVal)){
        success = false;
        setError(email, email_check);
    }else{
        setSuccess(email);
    }

    if(contactVal === ""){
        success = false;
        setError(contact, contact_required);
    }else if(contactVal.length <= 10){
        success = false;
        setError(contact, contact_lenght);
    }
    else if(contactVal.length !== 11){
        success = false;
        setError(contact, contact_lenght_more);
    }else{
        setSuccess(contact);
    }

    if(cgpaVal === "" || isNaN(cgpaVal)){
        success = false;
        setError(cgpa, cgpa_required);
    }
    else{
        setSuccess(cgpa);
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

form.addEventListener('submit', function(e){
    e.preventDefault();
    var formData = new FormData(form);
    if(validate()){ 
        var xhr = new XMLHttpRequest();
        xhr.open('POST', 'connect.php', true);
        xhr.onload = function() {
            if (xhr.status === 200) {
                // Response from the PHP file (if needed)
                alert(xhr.responseText);
                document.getElementById('registerform').reset();
            };
        };
        xhr.send(formData);
    };
});

