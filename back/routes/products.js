const express = require("express")
const router = express.Router();

///Traemos la respuesta json desde el controlador
const {getProducts} = require("../controllers/productsController")

//Establecemos desde que ruta queremos ver el getProducts
router.route('/productos').get(getProducts)

module.exports=router;
