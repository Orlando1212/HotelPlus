import express from "express"
import clienteController from "../controllers/cliente_controller.js"

const router = express.Router()

// endpoints para cliente
router.post('/', clienteController.createCliente )
router.get('/', clienteController.getAllClientes )
router.get('/:id_quarto', clienteController.getCliente )
router.delete('/:id_quarto', clienteController.deleteCliente )
router.put('/:id_quarto', clienteController.updateCliente )

export default router;

