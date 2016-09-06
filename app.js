var myVar;

function myFunction() {
    myVar = setTimeout(alertFunc, 3000);
}

function alertFunc() {
  document.getElementById("txt").innerHTML = " gatitos";
}
myFunction();
document.body.style.backgroundColor = "#000";
document.body.style.color = "#fff";

