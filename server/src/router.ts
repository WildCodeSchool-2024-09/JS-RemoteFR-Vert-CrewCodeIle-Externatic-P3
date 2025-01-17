import express from "express";

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Define item-related routes
import itemActions from "./modules/item/itemActions";

router.get("/api/items", itemActions.browse);
router.get("/api/items/:id", itemActions.read);
router.post("/api/items", itemActions.add);

import candidateActions from "./routes/candidate.routes";
import offerActions from "./routes/offer.routes";

router.use("/api/candidates", candidateActions);
router.use("/api/offers", offerActions);

export default router;
