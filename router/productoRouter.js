const router = require("express").Router();
const productoController = require("../controller/productosController");

router.get("/", productoController.list);

module.exports = router;