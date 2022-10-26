import React, {Fragment} from 'react'
import MetaData from '../layout/MetaData'

const ProductDetails = () => {
  return (
    <Fragment>
        <MetaData title="Naturé Jugando en los Árboles"></MetaData>
        <div className='row d-flex justify-content-around'>
            <div className='col-12 col-lg-5 img-fluid' id="imagen_producto">
                <img src="../images/productos/colonia.jpg" alt='image_producto' height="450" width="450"></img>
            </div>
            <div className='col-12 col-lg-5 mt-5'>
                <h3>Naturé Jugando en los Árboles</h3>
                <p id="product_id">Producto # 3</p>
            </div>
        </div>
    </Fragment>
  )
}

export default ProductDetails