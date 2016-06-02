import {createStore, applyMiddleware, compose} from 'redux';
import thunkMiddleware from 'redux-thunk';
import {persistState} from 'redux-devtools';
import DevTools from './DevTools';
import rootReducer from './reducers';

import typedToPlain from './typedToPlainMiddleware';

const enhancer: Function = compose(
    applyMiddleware(thunkMiddleware, typedToPlain),
    DevTools.instrument(),
    persistState(getDebugSessionKey())
);

function getDebugSessionKey() {
    const matches: Array<string> = window.location.href.match(/[?&]debug_session=([^&#]+)\b/);
    return (matches && matches.length > 0) ? matches[1] : undefined;
}

function configureStore(history: any, initialState: any): Redux.Store {
    const store: Redux.Store = createStore(rootReducer, initialState, enhancer);

    if (module.hot) {
        module.hot.accept('./reducers', () => {
            const nextRootReducer: Redux.Reducer = <Redux.Reducer>require('./reducers');
            store.replaceReducer(nextRootReducer);
        });
    }

    return store;
}

export {configureStore};
