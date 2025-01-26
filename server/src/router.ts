import express from "express";

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Define item-related routes

import hashPassword from "./middlewares/argon.middleware";
import { checkEmail } from "./middlewares/checkEmail.middleware";
import {
  candidateRegister,
  companyRegister,
} from "./middlewares/register.middleware";
import userActions from "./modules/item/user/userActions";

router.post(
  "/api/usercandidateformregister",
  hashPassword,
  checkEmail,
  candidateRegister,
  userActions.add,
);
router.post(
  "/api/usercompanyformregister",
  hashPassword,
  checkEmail,
  companyRegister,
  userActions.add,
);

/* ************************************************************************* */

export default router;
