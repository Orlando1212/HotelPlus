import express from "express"
import loginController from "../controllers/login_controller.js"

const router = express.Router()

// endpoints para login
router.post('/', loginController.Login)


export default router;