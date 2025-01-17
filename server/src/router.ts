import express from "express";

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Define item-related routes

import userActions from "./modules/item/user/userActions";

router.get("/api/userformregister", userActions.browse);
router.post("/api/userformregister", userActions.add);

/* ************************************************************************* */

export default router;
