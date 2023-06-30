const submit = document.getElementById("submit");

submit.addEventListener("click", validate);

function validate(e){
  e.preventDefault();

  const username = document.getElementById("username");
  const emailAddress = document.getElementById("email");
  const password = document.getElementById("password");
  const password2 = document.getElementById("password2");

  let usernameValue = username.value.trim();
  let emailAddressValue = emailAddress.value.trim();
  let passwordValue = password.value.trim();
  let password2Value = password2.value.trim();

  function setError(element, message){
    const field = element.parentElement;
    const errorText = field.querySelector(".error__text");

    errorText.innerText = message;
    field.classList.add("error");
    field.classList.remove("success");
  }

  function setSuccess(element, message){
    const field = element.parentElement;
    const errorText = field.querySelector(".error__text");

    errorText.innerText = message;
    field.classList.remove("error");
    field.classList.add("success");
  }

  // function validEmail(){
  //   const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  //   return re.test(String(email).toLowerCase());
  // }

  const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

  if(usernameValue === ''){
    setError(username, "Username is required");
  } else {
    setSuccess(username, "")
  }

  if(emailAddressValue === ""){
    setError(emailAddress, "Email is required");
  }else if(!isValidEmail(emailAddressValue)){
    setError(emailAddress, "Valid Email is required");
  }else {
    setSuccess(emailAddress, "")
  }

  if(passwordValue === ""){
    setError(password, "Password is required");
  }else if (passwordValue.length <= 6) {
    setError(password, "Password of morethan 6 characters is required");
  }else {
    setSuccess(password, "")
  }

  if(password2Value === ""){
    setError(password2, "Password confirmation is required");
  }else if (password2Value != passwordValue) {
    setError(password2, "Same password is required");
  }else {
    setSuccess(password2, "")
  }
}