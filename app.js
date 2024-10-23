const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
// const multer = require('multer');

// Configuración de Multer
// const storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//         cb(null, 'public/images');
//     },
//     filename: (req, file, cb) => {
//         cb(null, Date.now() + '-' + file.originalname);
//     }
// });
// const upload = multer({ storage });

// Middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.use(express.static("public"));

// Rutas
const routerProducto = require('./routes/productoRouter');
app.use("/", routerProducto);

// Configuraciones de vistas
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Iniciar el servidor
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

// app.get("/", (req, res) => {
//     res.render(__dirname + "/views/home.ejs");
// });


