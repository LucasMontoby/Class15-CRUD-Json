const fs = require( 'fs' );
const path = require('path');

const productosFilePath = path.join( __dirname, '../data/productos.json' ) ;
const productos = JSON.parse( fs.readFileSync( productosFilePath , 'utf8')); 

const productosController = {
    list: (req, res) => {
        res.render('home', {productos})
    },

    create: (req,res)=>{ 
        res.render('productos/creacionProd');
    },

    stock: (req, res) =>{
        const {marca, modelo, precio} = req.body;
        const nuevoProduct = {
            id: productos.length + 1,
            marca, 
            modelo, 
            precio
        };

        try {
            productos.push(nuevoProduct);
            fs.writeFileSync(productosFilePath, JSON.stringify(productos,  null, " "));
            res.redirect("/")
        }
        catch(err){
            console.log("Error al guardar el producto");
            console.error(err);
            res.status(500).send("Error al guardar el producto");
        }
    }, 

   
}

module.exports = productosController;