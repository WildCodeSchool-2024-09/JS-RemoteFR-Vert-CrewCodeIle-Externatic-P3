import express from "express";

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Define item-related routes

import roleActions from "./modules/item/role/roleActions";
import userActions from "./modules/item/user/userActions";

router.get("/api/userformregister", userActions.browse);
router.post("/api/userformregister", userActions.add);

router.get("/api/roleformregister", roleActions.browse);
router.post("/api/roleformregister", roleActions.add);
/* ************************************************************************* */

export default router;
