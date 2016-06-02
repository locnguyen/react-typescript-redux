import * as React from 'react';
import * as ReactDom from 'react-dom';

import {Router, browserHistory} from 'react-router';
import {Provider} from 'react-redux';
import {syncHistoryWithStore} from 'react-router-redux';
import routes from './routes';

import configureStore from './configureStore';

const store: Redux.Store = configureStore();
const history: ReactRouterRedux.ReactRouterReduxHistory = syncHistoryWithStore(browserHistory, store);

ReactDom.render((
    <Provider store={store}>
        <Router history={history} routes={routes} />
    </Provider>
), document.getElementById('container'));
