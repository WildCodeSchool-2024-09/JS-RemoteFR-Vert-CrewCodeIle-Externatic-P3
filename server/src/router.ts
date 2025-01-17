import express from "express";

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

import offersListActions from "./modules/offersList/offersListActions";

/* ************************************************************************* */
router.get("/api/offersPage", offersListActions.browse);

export default router;
