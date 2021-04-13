"use strict"

const id = document.querySelector("#id"),
    password = document.querySelector("#password"),
    loginBtn = document.querySelector("#loginBtn"),
    signupBtn = document.querySelector("#signupBtn")


loginBtn.addEventListener("click",loginbutton),
signupBtn.addEventListener("click",signupbutton)

function loginbutton(){
       const req = {
         id:id.value,
         password: password.value
       };
       console.log(JSON.stringify(req));
      }
function signupbutton(){
    console.log("hello");
};

// fetch("/login",{
//     body: JSON.stringify(req),

// });
