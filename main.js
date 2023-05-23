const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
});

const setError = (element, messeage) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelctor('.error__text');

    errorDisplay.innerHTML = messeage;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
}

const isValidEmail = email => {
    // const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase()); 
}

const validateInputs = () => {
    const usernameValue = username.Value.trim();
    const emailValue = email.Value.trim();
    const passwordValue = password.Value.trim();
    const password2Value = password2.Value.trim();

    if(usernameValue === "") {
        setError(username, 'Username is required');
    } else {
        setSuccess(username);
    }

    if(emailValue === "") {
        setError(email, 'Email is required');
    } else if(!isValidEmail(emailValue)){
        setError(email, 'Provide a valid email address');
    } else {
            setSuccess(email);
        }
    
    if(passwordValue === '') {
        setError(password, 'Password is required');
    } else if(passwordValue.length < 8) {
        setError(password, "Passward must be atleast 8 characters.");
    } else {
        setSuccess(password)
    }

    if(password2Value === ''){
        setError(password2, 'Password comfirm your password');
    } else if(password2Value !== passwordValue) {
        setError(password2, "Passwords doesn't match");
    } else {
        setSuccess(password2);
    }
}