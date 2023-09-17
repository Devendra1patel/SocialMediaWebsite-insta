import { createUser, editProfile,loginUser } from "../actions/usersAction.js";
import express from 'express';


const router = express.Router();

router.post('/signUp',createUser)
      .post('/login',loginUser)
      .post('/editprofile',editProfile)

export { router };
