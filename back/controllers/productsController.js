//const { restart } = require("nodemon");
const Producto = require("../models/productos")
const fetch =(url) => import('node-fetch').then(({default:fetch}) => fetch(url));

// ver lista de productos
exports.getProducts = async(req,res,next) => {
    try {
        const productos = await Producto.find();
        return res.status(200).json({
            success:true,
            cantidad: productos.length,
            productos
        });
    } catch (error) {
        next(error);
    }
}

// ver un producto por id
exports.getProductById = async(req,res,next) => {
    try {
        const productoEncontrado = await Producto.findById(req.params.id)
        if (!productoEncontrado){
            return res.status(404).json({
                success:false,
                message: "No se encontro el producto",
                error:true
            })
        }
        return res.status(200).json({
            success:true,
            message: "Aqui se muestra la informacion del producto",
            producto: productoEncontrado
        })
    } catch (error) {
        next(error);
    }
}

//Update un producto
exports.updateProduct = async (req,res,next) => {
    try {
        //Variable de tipo modificable
        let productoActual = await Producto.findById(req.params.id)
        //Verifico que el objeto no existe para finalizar el proceso
        if (!productoActual){
            return res.status(404).json({
                success:false,
                message: "No se encontro el producto"
            })
        }
        //Si el objeto si existia, entonces si ejecuto la actualizacion
        productoActual = await Producto.findByIdAndUpdate(req.params.id, req.body, {
            // valido solo los atributos nuevos o actualizados
            new:true,
            runValidators:true
        });
        //Respondo OK si el producto si se actualizo
        return res.status(200).json({
            success:true,
            message: "Producto actualizado Correctamente",
            producto: productoActual
        })
    } catch (error) {
        next(error);
    }
}

// crear nuevo producto /api/productos
exports.newProduct= async(req,res,next) => {
    try {
        const productoCreado = await Producto.create(req.body);
        return res.status(201).json({
            success:true,
            producto: productoCreado
        })
    } catch (error) {
        next(error);
    }
}

// Eliminar un producto
exports.deleteProduct = async (req,res,next) => {
    try {
        //Variable de tipo modificable
        const productoEncontrado = await Producto.findById(req.params.id)
        //Verifico que el objeto no existe para finalizar el proceso
        if (!productoEncontrado){
            return res.status(404).json({
                success:false,
                message: "No se encontro el producto"
            })
        }
        // Eliminamos el producto
        await productoEncontrado.remove();
        return res.status(200).json({
            success:true,
            message: "Producto eliminado Correctamente",
        })
    } catch (error) {
        next(error);
    }
}


//FETCH
//Ver todos los productos function verProductos()
function verProductos(){
    fetch('http://localhost:4000/api/productos')
    .then(res => res.json())
    .then(res => console.log(res))
    .catch(err => console.error(err))
}

//verProductos();

//ver por Id
function verProductosPorId(id){
    fetch('http://localhost:4000/api/producto/'+id)
    .then(res => res.json())
    .then(res => console.log(res))
    .catch(err => console.error(err))
}

//verProductosPorId('63573dc49a029d73214abd26');