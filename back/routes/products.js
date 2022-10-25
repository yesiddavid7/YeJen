const express = require("express")
const router = express.Router();

///Traemos la respuesta json desde el controlador
const {getProducts, newProduct} = require("../controllers/productsController")

//Establecemos desde que ruta queremos ver el getProducts
router.route('/productos').get(getProducts)

//Establecemos la ruta
router.route('/productos/nuevo').post(newProduct)

module.exports=router;
