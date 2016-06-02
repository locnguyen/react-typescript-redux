import * as React from 'react';
import {Route} from 'react-router';
import App from './App';
import Login from './login';

const routes: any = (
     <Route component={App} path="/">
        <Route component={Login} path="/login" />
    </Route>
);

export default routes;
