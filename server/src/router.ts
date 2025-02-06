import path from "node:path";
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
  checkAdminRole,
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

router.post(
  "/api/login/admin",
  verifieEmail,
  comparePassword,
  checkAdminRole,
  login,
);
/* ************************************************************************* */
router.get("/api/offers", offersListActions.browse);

import { upload } from "./middlewares/multer.middleware";
import candidateActions from "./modules/candidate/candidateActions";
import companiesActions from "./modules/companies/companiesActions";

router.get("/api/companies", companiesActions.browseCompanies);

router.use(
  "/uploads",
  express.static(path.join(__dirname, "/middlewares/uploads")),
);

router.get("/api/user/:id", userActions.read);
router.get("/api/candidate/account/:id", candidateActions.readProfil);
router.post("/api/candidate/account", upload, candidateActions.uploadFiles);

export default router;
