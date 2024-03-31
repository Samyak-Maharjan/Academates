// const express = require('express');
import express from 'express';
import { signUp } from '../controllers/Login';
import { logIn } from '../controllers/Signup';
const router = express.Router();


//signup
router.post('/signup', signUp)

router.post('/Login', logIn)

export default router;