import express from "express";

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

import offersListActions from "./modules/offersList/offersListActions";

import offersActions from "./modules/offers/offersActions";

router.get("/api/offers", offersActions.browseOffers);
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
router.get("/api/offersPage", offersListActions.browse);

export default router;
