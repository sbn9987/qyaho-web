"use strict"
//render는 /도메인에 왔을때 이동시켜주는 명령어 만약 /login 도메인으로 연결되면  render 명령어로인하여 home/login.ejs로 이동하게된다.
// ★여기서 경로를 home/xx 만 쳐줘도 views/home으로 이동된다.
const qyhome=(req,res)=>{
    res.render("home/index");
};

const qylogin = (req, res) =>{
    res.render("home/login")
};

const qysignup =(req, res) =>{
    res.render("home/sign-up");
};

const qypost = (req, res ) => {
    res.render("home/post");
};

// 위에 qyhome과 qylogin을 export
module.exports ={
    qyhome,
    qylogin,
    qysignup,
    qypost,
}