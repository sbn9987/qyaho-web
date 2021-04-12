"use strict"

const qyhome=(req,res)=>{
    res.render("home/index");
};

const qylogin = (req, res) =>{
    res.render("home/login")
};

module.exports ={
    qyhome,
    qylogin
}