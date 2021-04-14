let fName = document.getElementById("fName").value;
let lName = document.getElementById("lName").value;
let eMail = document.getElementById("eMail").value;

let passWord = document.getElementById("passWord").value;
function getInputValue(event) {
    event.preventDefault();

    console.log(fName, lName, eMail, passWord);
}