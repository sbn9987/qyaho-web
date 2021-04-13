"use strict";

const express= require("express");
const router =express.Router();
const ctrl =require("./home.ctrl")


//home.ctrl 에서 export한 모듈을 받아옴
router.get("/", ctrl.qyhome);
router.get("/login", ctrl.qylogin);
router.get("/sign-up",ctrl.qysignup);
router.get("/post",ctrl.qypost);
//라우터 익스포트
module.exports = router;

