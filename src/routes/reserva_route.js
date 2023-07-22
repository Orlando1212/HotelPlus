import express from "express"
import reservaController from "../controllers/reserva_controller.js"

const router = express.Router()

// endpoints para cliente
router.post('/', reservaController.createReserva )
router.get('/', reservaController.getAllReservas )
router.get('/:id_reserva', reservaController.getReserva )
router.delete('/:id_reserva', reservaController.deleteReserva )
router.put('/:id_reserva', reservaController.updateReserva )

export default router;

