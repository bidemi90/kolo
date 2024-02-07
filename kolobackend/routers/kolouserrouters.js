const express = require("express");
const {signup,open,login, addbvn, createkolo}=require("../controllers/kolousercontroller")

const kolouserrouters = express.Router();


kolouserrouters.get("/open",open)
kolouserrouters.post("/signup",signup)
kolouserrouters.post("/login",login)
kolouserrouters.post("/addbvn",addbvn)
kolouserrouters.post("/createkolo",createkolo)

module.exports=kolouserrouters