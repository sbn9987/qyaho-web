"use strict"

const id = document.querySelector("#id"),
    password = document.querySelector("#password"),
    loginBtn = document.querySelector("button")
    // signupBtn = document.querySelector("signup")


loginBtn.addEventListener("click",loginbutton)
// signupBtn.addEventListener("click",signupbutton)

function loginbutton(){
       const req = {
         id:id.value,
         password: password.value
       }
       console.log(req)
};

// function signupbutton(){
//     console.log("hello");
// }