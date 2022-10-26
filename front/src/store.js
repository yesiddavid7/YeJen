import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension'
import {productsReducer, productsDetailReducer} from './reducer/productReducer'

const reducer = combineReducers({
    products: productsReducer,
    productDetails: productsDetailReducer
})
let initialState = {}
const middlware = [thunk]
const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middlware)))

export default store