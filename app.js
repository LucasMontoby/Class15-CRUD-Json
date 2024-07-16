const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Configurar method-override para soportar PUT y DELETE en formularios
app.use(methodOverride('_method'));

const routerProducto = require('./router/productoRouter');
app.use("/", routerProducto);

app.use(express.static("public"));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

app.get("/", (req, res) => {
    res.render("home", { productos: [] });  // Asegúrate de que `productos` esté definido si lo usas en la vista
});

