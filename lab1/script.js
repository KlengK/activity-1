"use strict";

function showPassword() {
    var x = document.getElementById("password_field");
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
}

// Modals
var modal = document.getElementById("myModal");

var btn = document.getElementById("register");

var span = document.getElementsByClassName("close")[0];
btn.onclick = function () {
    modal.style.display = "block";
};

span.onclick = function () {
    modal.style.display = "none";
};

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
        var x = document.getElementById("email");
        var y = document.getElementById("psw");
        var z = document.getElementById("psw-repeat");
        x.value = "";
        y.value = "";
        z.value = "";
    }
};

//login
var username = document.getElementById("email");
var password = document.getElementById("psw");
var confirm_password = document.getElementById("psw-repeat");

function validatePassword() {
    if (password.value === confirm_password.value && username.value != "") {
        alert(`${username.value} you are registered!`);
        modal.style.display = "none";
    } else if (password.value != confirm_password.value) {
        confirm_password.setCustomValidity("Passwords Don't Match");
    } else if (password.value === confirm_password.value) {
        confirm_password.setCustomValidity("password match!");
    } else {
    }
}

var reg_username = username;
var reg_password = password;

var user = document.getElementById("reg_user");
var pass = document.getElementById("password_field");

function signIn() {
    if (user.value === username.value && pass.value === password.value) {
        alert("Login Success!");
    } else {
        alert("invalid Account!");
    }
}
