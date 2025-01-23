import express from "express";

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Define item-related routes

import hashPassword from "./middlewares/auth.helpers";
import { candidateLogin } from "./middlewares/login.helpers";
import userActions from "./modules/item/user/userActions";

router.post(
  "/api/usercandidateformregister",
  hashPassword,
  candidateLogin,
  userActions.add,
);

/* ************************************************************************* */

export default router;
