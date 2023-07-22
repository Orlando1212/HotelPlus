import express from "express"
import quartoController from "../controllers/quarto_controller.js";
const router = express.Router()

// endpoints para cliente
router.post('/', quartoController.createQuarto)
router.get('/', quartoController.getAllQuartos)
router.get('/:id_quarto', quartoController.getQuarto)
router.delete('/:id_quarto', quartoController.deleteQuarto)
router.put('/:id_quarto', quartoController.updateQuarto)

export default router;

