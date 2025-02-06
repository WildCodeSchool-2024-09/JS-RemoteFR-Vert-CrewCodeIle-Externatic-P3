import express from "express";
import candidateActions from "../modules/item/candidate/candidateActions";

const router = express.Router();

router.get("/", candidateActions.browse);
router.get("/:id", candidateActions.read);

export default router;
