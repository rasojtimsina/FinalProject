

var myUsername;
var myPassword;


function captureEmail(event) {
    console.log(event.target.value);
    myPassword = event.target.value;
}

function submit(event) {
    event.preventDefault();
}