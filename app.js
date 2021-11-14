var myBtn = document.getElementById('submit_button');
var myInput = document.getElementById('main-input');
var validEmail =  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
var errIcon = document.getElementById('err');
var errMessage = document.getElementById('err-message');
var validMessage = document.getElementById('valid-message');

console.log(errIcon);
function ValidateEmail(input) {
if(input.value.match(validEmail)){
    console.log('Valid Email Address');
    errIcon.classList.remove('error-icon');
    errMessage.classList.add('invalid');
    validMessage.classList.remove('valid');
    autoRefresh();
    return true;
}else if (input.value !== " ") {
    console.log('This Is Invalid Fuckin Email Address');
    errIcon.classList.add('error-icon');
    errMessage.classList.remove('invalid');
    shaking();
    return false;
}else{
    console.log('This Is Invalid Fuckin Email Address');
    errIcon.classList.add('error-icon');
    errMessage.classList.remove('invalid');
    shaking();
    return false;
}
}


// reset the transition by...

function shaking(){
    errIcon.classList.remove("err-animation");
    void errIcon.offsetWidth;
    errIcon.classList.add("err-animation");
}
function autoRefresh(){
    window.setTimeout(function () {
        window.location.reload();
    }, 5000);
}
