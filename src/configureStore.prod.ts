import {createStore, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from './reducers';

import typedToPlain from './typedToPlainMiddleware';

const enhancer: Function = applyMiddleware(thunkMiddleware, typedToPlain);

function configureStore(initialState: any = {}) {
    return createStore(rootReducer, initialState, enhancer);
}

export {configureStore}
