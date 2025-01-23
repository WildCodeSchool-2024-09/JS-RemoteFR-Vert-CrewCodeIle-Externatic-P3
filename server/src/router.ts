import express from "express";

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

import offersListActions from "./modules/offersList/offersListActions";

import offersActions from "./modules/offers/offersActions";

router.get("/api/offers", offersActions.browseOffers);

import candidateActions from "./routes/candidate.routes";
import offerActions from "./routes/offer.routes";

router.use("/api/candidates", candidateActions);
router.use("/api/offers", offerActions);
router.get("/api/offersPage", offersListActions.browse);

export default router;
