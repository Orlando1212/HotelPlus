import express from "express"
import clienteController from "../controllers/cliente_controller.js"

const router = express.Router()

// endpoints para cliente
router.post('/', clienteController.createCliente )
router.get('/', clienteController.getAllClientes )
router.get('/:id_reserva', clienteController.getCliente )
router.delete('/:id_reserva', clienteController.deleteCliente )
router.put('/:id_reserva', clienteController.updateCliente )

export default router;

