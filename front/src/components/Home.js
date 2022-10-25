import React, { Fragment, useEffect } from "react";
import MetaData from "./layout/MetaData";
import { useDispatch } from "react-redux";
import { getProducts } from "../actions/productActions";

const Home = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getProducts());
    }, [dispatch])
  return (
    <Fragment>
      <MetaData title="Bienvenidos"></MetaData>
      <h1 id="Encabezado">Ultimos Productos</h1>
      <section id="productos" className="container mt-5">
        <div className="row">
          {/*Producto 1*/}
          <div className="col-sm-12 col-md-6 col-lg-3 my-3">
            <div className="card p-3 rounded">
              <img
                className="card-img-top mx-auto"
                src="./images/Home_Azul.jpg"
                alt="Home Essencial Azul"
              ></img>
              <div className="card-body d-flex flex-column">
                <h5 id="titulo_producto">
                  <a href="http://localhost:3000">Home Azul</a>
                </h5>
                <div className="rating mt-auto">
                  <div className="rating-outer">
                    <div className="inner"></div>
                  </div>
                  <span id="No_opiniones">5</span>
                </div>
                <p className="card-text">72000</p>
                <a
                  href="http://localhost:3000"
                  id="view_btn"
                  className="btn btn-block"
                >
                  Ver Detalle
                </a>
              </div>
            </div>
          </div>
          {/*Producto 2*/}
          <div className="col-sm-12 col-md-6 col-lg-3 my-3">
            <div className="card p-3 rounded">
              <img
                className="card-img-top mx-auto"
                src="./images/Polvos.jpg"
                alt="Polvos"
              ></img>
              <div className="card-body d-flex flex-column">
                <h5 id="titulo_producto">
                  <a href="http://localhost:3000">Polvos</a>
                </h5>
                <div className="rating mt-auto">
                  <div className="rating-outer">
                    <div className="inner"></div>
                  </div>
                  <span id="No_opiniones">3</span>
                </div>
                <p className="card-text">25000</p>
                <a
                  href="http://localhost:3000"
                  id="view_btn"
                  className="btn btn-block"
                >
                  Ver Detalle
                </a>
              </div>
            </div>
          </div>
          {/*Producto 3*/}
          <div className="col-sm-12 col-md-6 col-lg-3 my-3">
            <div className="card p-3 rounded">
              <img
                className="card-img-top mx-auto"
                src="./images/Shampoo.jpg"
                alt="Shampoo"
              ></img>
              <div className="card-body d-flex flex-column">
                <h5 id="titulo_producto">
                  <a href="http://localhost:3000">Shampoo</a>
                </h5>
                <div className="rating mt-auto">
                  <div className="rating-outer">
                    <div className="inner"></div>
                  </div>
                  <span id="No_opiniones">12</span>
                </div>
                <p className="card-text">59000</p>
                <a
                  href="http://localhost:3000"
                  id="view_btn"
                  className="btn btn-block"
                >
                  Ver Detalle
                </a>
              </div>
            </div>
          </div>
          {/*Producto 4*/}
          <div className="col-sm-12 col-md-6 col-lg-3 my-3">
            <div className="card p-3 rounded">
              <img
                className="card-img-top mx-auto"
                src="./images/Colonia.jpg"
                alt="Colonia"
              ></img>
              <div className="card-body d-flex flex-column">
                <h5 id="titulo_producto">
                  <a href="http://localhost:3000">Colonia Bebe</a>
                </h5>
                <div className="rating mt-auto">
                  <div className="rating-outer">
                    <div className="inner"></div>
                  </div>
                  <span id="No_opiniones">5</span>
                </div>
                <p className="card-text">65000</p>
                <a
                  href="http://localhost:3000"
                  id="view_btn"
                  className="btn btn-block"
                >
                  Ver Detalle
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Home;
