// const express = require('express');
import express from "express";
import { logIn } from "../controllers/LogIn.js";
import { signUp } from "../controllers/SignUp.js";
const router = express.Router();

//signup
router.post("/signup", signUp);

router.post("/Login", logIn);

export default router;
