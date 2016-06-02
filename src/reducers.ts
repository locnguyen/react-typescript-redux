import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';
import {Action, isType} from './actions';

function sessionReducer(state: any = {
    user: undefined,
    jwtToken: undefined,
    isRequesting: false
}, action: Action): any {
    if (isType(action, 'DoLogin')) {
        return Object.assign({}, state, {user: action.payload});
    } else {
        return state;
    }
}

const rootReducer: Redux.Reducer = combineReducers({
    routing: routerReducer,
    session: sessionReducer
});

export default rootReducer;
