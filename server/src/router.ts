import express from "express";

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

import offersListActions from "./modules/offersList/offersListActions";

import offersActions from "./modules/offers/offersActions";

router.get("/api/offers", offersActions.browseOffers);

/* ************************************************************************* */
router.get("/api/offersPage", offersListActions.browse);

import companiesActions from "./modules/companies/companiesActions";

router.get("/api/companies", companiesActions.browseCompanies);

export default router;
