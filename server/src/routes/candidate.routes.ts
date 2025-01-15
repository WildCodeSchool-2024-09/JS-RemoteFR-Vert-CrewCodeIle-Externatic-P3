import candidateActions from "../modules/item/candidate/candidateActions";
import router from "../router";

router.get("/", candidateActions.browse);
router.get("/:id", candidateActions.read);

export default router;
