import React, { Fragment } from 'react'

const Header = () => {
  return (
    <Fragment>
        <nav className='navbar row'>
            <div className='col-12 col-md-3'>
                <div className='navbar-brand'>
                    <img src="./images/logo.png' alt='YeJen Logo"></img>
                </div>
            </div>
            <div className='col-12 col-md-6 mt-2 mt-md-0'>
                <div className="input-group">
                    <input 
                        type="text" 
                        id="search_field"
                        className="form-control"
                        placeholder='Que producto Busca?'/>
                    <div className='input-group-append'>
                        <button id="search-btn" class="btn">
                            <i class= "fa fa-search-plus fa-2x" aria-hidden="true"/>
                        </button>
                    </div>
                </div>
            </div>
            <div className='col-12 col-md-3 mt-4 mt-md-0 text-center'>
                <span><button className='btn' id="login-btn">Inicie Sesion</button></span>
                <i class="fa fa-shopping-cart fa-2x text-white" aria-hidden="false"></i>
                <span className='ml-1' id='cart-count'>2</span>
            </div>
        </nav>
    </Fragment>
  )
}

export default Header