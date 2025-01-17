import express from "express";
import offerActions from "../modules/offer/offerActions";

const router = express.Router();
router.get("/", offerActions.browse);

export default router;
