import { Router } from "express";
import { handleAuth } from "../middleware/auth.js";
import { validateTask, validateTaskUpdate } from "../middleware/taskMiddleware.js";
import { createTask, deleteTask, getTaskById, getTasks, updateTask } from "../controllers/taskController.js";

const router = Router()

router.route("/").post(handleAuth, validateTask, createTask);
router.route("/").get(handleAuth, getTasks)
router.route("/:id").get(handleAuth, getTaskById)
router.route("/:id").patch(handleAuth, validateTaskUpdate, updateTask)
router.route("/:id").delete(handleAuth, deleteTask)

export default router;