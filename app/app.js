"USE strict";
//require은 불러오는 것
const express = require("express");
const app =express();
const home =require("./src/routes/home")

// ejs view 엔진 설정
app.set("views", "./src/views"); // ★ 여기서 views 경로를 설정해 줬기 때문에 
app.set("view engine", "ejs")


app.use(express.static(`${__dirname}/src/public`))
app.use("/",home); //미들웨어 

module.exports= app; //export를 해야 이 파일 외에서도 쓸수있다.