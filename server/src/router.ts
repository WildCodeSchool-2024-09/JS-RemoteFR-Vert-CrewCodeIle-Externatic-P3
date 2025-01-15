import express from "express";

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

import offersActions from "./modules/Offers/offersActions";

/* ************************************************************************* */
router.get("/api/offersPage", offersActions.browse);

export default router;
