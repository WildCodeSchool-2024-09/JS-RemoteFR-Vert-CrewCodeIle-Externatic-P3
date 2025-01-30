import express from "express";

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

import offersListActions from "./modules/offersList/offersListActions";

import offersActions from "./modules/offers/offersActions";

router.get("/api/offers", offersActions.browseOffers);
router.get("/api/offersByCompany", offersActions.browseOffersByCompany);
// Define item-related routes

import { comparePassword, hashPassword } from "./middlewares/argon.middleware";
import { checkEmail, verifieEmail } from "./middlewares/checkEmail.middleware";
import {
  candidateRegister,
  companyRegister,
} from "./middlewares/register.middleware";
import {
  checkCandidateRole,
  checkCompanyRole,
} from "./middlewares/role.middleware";
import { login } from "./modules/auth/authActions";
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

router.post(
  "/api/login/company",
  verifieEmail,
  comparePassword,
  checkCompanyRole,
  login,
);

router.post(
  "/api/login/candidate",
  verifieEmail,
  comparePassword,
  checkCandidateRole,
  login,
);
import candidateActions from "./routes/candidate.routes";
import offerActions from "./routes/offer.routes";

router.use("/api/candidates", candidateActions);
router.use("/api/offers", offerActions);
router.get("/api/offersPage", offersListActions.browse);

import companiesActions from "./modules/companies/companiesActions";

router.get("/api/companies", companiesActions.browseCompanies);

export default router;
