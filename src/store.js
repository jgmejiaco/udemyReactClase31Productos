//  Siempre que se crea un store, se requiere un reducer
//  productos, nuevoProducto, editarProducto necesitará su propio state pero todos esos State deben ir juntos (para es el REDUCER), EL ARCHIVO (INDEX.JS) será el encargado de combinar todos los reducers

import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducers';


const store = createStore(
    reducer,
    compose(applyMiddleware(thunk),
        // window.__REDUX_DEVTOOLS_EXTENSION__ &&
        // window.__REDUX_DEVTOOLS_EXTENSION__()

        typeof window === 'object' &&
            typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined' ? 
                window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
    )
);
export default store;

