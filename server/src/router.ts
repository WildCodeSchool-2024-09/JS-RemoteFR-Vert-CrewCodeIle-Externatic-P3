import express from "express";

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Define item-related routes

import hashPassword from "./middlewares/auth.helpers";
import { checkEmail } from "./middlewares/checkEmail.helpers";
import { candidateLogin, companyLogin } from "./middlewares/login.helpers";
import userActions from "./modules/item/user/userActions";

router.post(
  "/api/usercandidateformregister",
  hashPassword,
  checkEmail,
  candidateLogin,
  userActions.add,
);
router.post(
  "/api/usercompanyformregister",
  hashPassword,
  checkEmail,
  companyLogin,
  userActions.add,
);

/* ************************************************************************* */

export default router;
