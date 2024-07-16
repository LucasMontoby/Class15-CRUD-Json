const router = require("express").Router();
const productoController = require("../controller/productosController");

router.get("/", productoController.list);

// Crear producto
router.get("/create", productoController.create);
router.post("/create", productoController.stock);

// Editar producto
router.get("/:id/edit", productoController.edit);
router.put("/:id", productoController.update);

// Eliminar producto
router.get("/:id/delete", productoController.delete);
router.delete("/:id", productoController.destroy);

module.exports = router;

