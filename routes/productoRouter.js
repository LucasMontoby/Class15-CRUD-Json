const express = require("express");
const router = express.Router();
const productoController = require("../controller/productosController");
const multer = require('multer');

// Configuración de Multer (la misma que en app.js)
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/images');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname);
    }
});
const upload = multer({ storage });

router.get("/", productoController.list);
router.get("/create", productoController.create);
router.post("/create", upload.single('imagen'), productoController.stock);
router.get("/edit/:id", productoController.edit);
router.put("/edit/:id", upload.single('imagen'), productoController.update);
router.get("/delete/:id", productoController.delete);
router.delete("/delete/:id", productoController.destroy);

module.exports = router;


