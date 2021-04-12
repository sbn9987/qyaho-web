"use strict";

const express= require("express");
const router =express.Router();
const ctrl =require("./home.ctrl")


//home.ctrl 에서 export한 모듈을 받아옴
router.get("/", ctrl.qyhome);
router.get("/login", ctrl.qylogin);

//라우터 익스포트
module.exports = router;

