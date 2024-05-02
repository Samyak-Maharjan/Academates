import express from "express";
import { body } from "express-validator";

import fetchuser from "../middlewares/fetchuser.js";

import { createUser, login, getUser } from "../controllers/userController.js";

const router = express.Router();

router
  .route("/register")
  .post(
    [
      body("name").exists(),
      body("email").isEmail().exists(),
      body("password").isLength({ min: 5 }).exists(),
    ],
    createUser
  );

router
  .route("/login")
  .post([body("email").isEmail().exists(), body("password").exists()], login);

router.route("/getuser/:id").get(fetchuser, getUser);

export default router;
