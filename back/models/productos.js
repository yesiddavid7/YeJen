const mongoose = require ("mongoose")

const tablaProductos = mongoose.Schema({
    nombre:{
        type: String,
        required: [true,"Por favor registra el nombre del producto"],
        trim: true,
        maxLength: [120, "El nombre del producto no debe exceder 120 caracteres"]
    },
    precio:{
        type: Number,
        required: [true,"Por favor registra el precio del producto"],
        max: [99999999, "El precio no puede estar por encima de 99'999.999"],
        min: [0, "El precio no puede ser negativo"],
        default: 0.0
    },
    descripcion:{
        type: String,
        required: [true,"Por favor registra la descripcion del producto"]
    },
    calificacion:{
        type: Number,
        default: 0
    },
    imagen:[
        {
            public_id:{
                type: String,
                required:true
            },
            url:{
                type: String,
                required:true
            }
        }
    ],
    categoria:{
        type:String,
        required: [true,"Por favor seleccione la categoria del producto"],
        enum:{
            values:[
                "Perfumeria",
                "Maquillaje",
                "Cuidado Facial",
                "Cuidado Diario",
                "Bebes",
                "Niños",
                "Hombres"
            ],
            message: 'Categoria no válida'
        }
    },
    vendedor:{
        type: String,
        required: [true,"Por favor registre el vendedor del producto"]
    },
    inventario:{
        type: Number,
        required: [true,"Por favor registre el stock del producto"],
        max: [99999, "La cantidad no puede estar por encima de 99999"],
        min: [0, "La cantidad no puede ser negativa"],
        default: 0
    },
    numCalificaciones:{
        type: Number,
        default: 0
    },
    opiniones: [
        {
            nombreCliente:{
                type: String,
                required: true
            },
            rating:{
                type: Number,
                required: true,
                min: [0, 'El rating no puede ser negativo'],
                max: [5, 'El rating no puede ser mayor a 5']
            },
            comentario:{
                type: String,
                required: true
            }
        }
    ],
    fechaCreacion:{
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model("productos",tablaProductos);