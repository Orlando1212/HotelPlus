import express from "express"
import clienteController from "../controllers/cliente_controller.js"

const router = express.Router()

// endpoints para cliente
router.post('/', clienteController.createCliente )
router.get('/', clienteController.getAllClientes )
router.get('/:id_cliente', clienteController.getCliente )
router.delete('/:id_cliente', clienteController.deleteCliente )
router.put('/:id_cliente', clienteController.updateCliente )

export default router;

