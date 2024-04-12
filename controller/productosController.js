const fs = require( 'fs' );
const path = require('path');

const productosFilePath = path.join( __dirname, '../data/productos.json' ) ;
const productos = JSON.parse( fs.readFileSync( productosFilePath , 'utf8')); 

const productosController = {
    list: (req, res) => {
        res.render('home', {productos})
    }
}

module.exports = productosController;