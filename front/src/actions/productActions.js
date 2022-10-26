import axios from 'axios';
import { 
    ALL_PRODUCTS_REQUEST,
    ALL_PRODUCTS_SUCCESS,
    ALL_PRODUCTS_FAIL,
    PRODCUCT_DETAIL_REQUEST,
    PRODCUCT_DETAIL_SUCCESS,
    PRODCUCT_DETAIL_FAIL,
    CLEAR_ERRORS } from "../constants/productConstants";

export const getProducts = () => async(dispatch) =>{
    try{
        dispatch({type:ALL_PRODUCTS_REQUEST})
        const {data} = await axios.get('api/productos')
        dispatch({
            type: ALL_PRODUCTS_SUCCESS,
            payload: data
        })
    }catch(error){
        dispatch({
            type: ALL_PRODUCTS_FAIL,
            payload: error.response.data.message
        })
    }
}

export const getProductsDetails = (id) => async(dispatch) =>{
    try{
        dispatch({type:PRODCUCT_DETAIL_REQUEST})
        const {data} = await axios.get(`api/producto/:${id}`)
        dispatch({
            type: PRODCUCT_DETAIL_SUCCESS,
            payload: data.product
        })
    }catch(error){
        dispatch({
            type: PRODCUCT_DETAIL_FAIL,
            payload: error.response.data.message
        })
    }
}

//Limpiar Errores
export const clearErrors = () => async (dispatch) => {
    dispatch({
        type: CLEAR_ERRORS
    })
}