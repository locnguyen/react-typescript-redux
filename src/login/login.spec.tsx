import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as TestUtils from 'react-addons-test-utils';
import {LoginPanel} from './index';

describe('LoginPanel', () => {
    it('should call the doLogin prop with username and password on button click', () => {
        const testUsername: string = 'darth vader';
        const testPassword: string =  'thedarkside';

        const doLogin = (username, password) => {
            expect(username).toBe(testUsername);
            expect(password).toBe(testPassword);
        };

        const root: LoginPanel = TestUtils.renderIntoDocument(<LoginPanel doLogin={doLogin} />) as LoginPanel;
        const componentUsernameInput: HTMLInputElement = root.refs.username;
        componentUsernameInput.value = testUsername;
        TestUtils.Simulate.change(componentUsernameInput);

        const componentPasswordInput: HTMLInputElement = root.refs.password;
        componentPasswordInput.value = testPassword;
        TestUtils.Simulate.change(componentPasswordInput);

        const loginButton = TestUtils.findRenderedDOMComponentWithTag(root, 'button');
        TestUtils.Simulate.click(loginButton);
    });
});
