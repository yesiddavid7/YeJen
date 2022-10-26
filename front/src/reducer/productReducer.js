import { 
    ALL_PRODUCTS_REQUEST,
    ALL_PRODUCTS_SUCCESS,
    ALL_PRODUCTS_FAIL,
    PRODCUCT_DETAIL_REQUEST,
    PRODCUCT_DETAIL_SUCCESS,
    PRODCUCT_DETAIL_FAIL,
    CLEAR_ERRORS } from "../constants/productConstants";

//Reducer de los Productos
export const productsReducer = (state = {products: []}, action) =>{
    switch(action.type){
        case ALL_PRODUCTS_REQUEST:
            return{
                loading:true,
                productos:[]
            }
        case ALL_PRODUCTS_SUCCESS:
            return{
                loading:false,
                productos: action.payload.productos,
                cantidad: action.payload.cantidad
            }
        case ALL_PRODUCTS_FAIL:
            return{
                loading:false,
                error: action.payload
            }    
        case CLEAR_ERRORS:{
            return{
                ...state,
                error: null
            }
        }
        default:
            return state;
    }
}

//Reducer de los todos los Detalles
export const productsDetailReducer = (state = {product: {}}, action) =>{
    switch(action.type){
        case PRODCUCT_DETAIL_REQUEST:
            return{
                ...state,
                loading:true
            }
        case PRODCUCT_DETAIL_SUCCESS:
            return{
                loading:false,
                product: action.payload.product,
            }
        case PRODCUCT_DETAIL_FAIL:
            return{
                ...state,
                error: action.payload
            }    
        case CLEAR_ERRORS:{
            return{
                ...state,
                error: null
            }
        }
        default:
            return state;
    }
}