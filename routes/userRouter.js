import { Router } from "express";
import { createUser, getUsers, loginUser} from "../controllers/userController.js";
import { validateUser } from "../middleware/userMiddleware.js";

const router = Router()

router.route('/login').post(loginUser)
router.route("/register").post(validateUser, createUser);
router.route("/").get(getUsers)

export default router;