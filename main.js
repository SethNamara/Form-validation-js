const form = document.querySelector("form");

function validate(){
  form.addEventListener("submit", (event) => {
  event.preventDefault();
  
  function formValidate(){
    let userName = document.getElementById('username').Value;
    let mail = document.getElementById('email').Value; 
    let password = document.getElementById('password').Value; 
    let passwordConfirm = document.getElementById('password2').Value;  

    const inputMesseage = document.getElementsByClassName('.input');
    let errorText = document.getElementsByClassName('.error__text');

    if (userName == ''){

        alert('No spaces required in username');
        errorText.style.color = '#ff3860';
        errorText.innerHTML = 'Please enter your username';
        inputMesseage.style.border = '2px solid #ff3860';
    }
}

})
}

;
