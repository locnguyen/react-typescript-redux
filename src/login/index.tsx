import * as React from 'react';
import * as ReactDOM from 'react-dom';

import {connect} from 'react-redux';
import {Link} from 'react-router';
import {DoLogin} from '../actions';

interface LoginPanelProps {
    doLogin: (username: string, password: string) => void;
}

export class LoginPanel extends React.Component<LoginPanelProps, {}> {

    public refs: {
        [key: string]: Element;
        username: HTMLInputElement;
        password: HTMLInputElement;
    };

    public usernameInput(): HTMLInputElement {
        return ReactDOM.findDOMNode<HTMLInputElement>(this.refs.username);
    }

    public passwordInput(): HTMLInputElement {
        return ReactDOM.findDOMNode<HTMLInputElement>(this.refs.password);
    }

    public handleLogin(e: Event) {
        e.preventDefault();
        const username: string = this.usernameInput().value;
        const password: string = this.passwordInput().value;
        this.props.doLogin(username, password);
    }

    public render() {
        return (
            <form>
                <div>
                    <label>Username</label>
                    <input type="text" ref="username"/>
                </div>
                <div>
                    <label>Password</label>
                    <input type="password" ref="password" />
                </div>
                <div>
                    <button type="submit" onClick={this.handleLogin.bind(this)}>Submit</button>
                </div>

                <div>
                    <Link to="/">Home</Link>
                </div>
            </form>
        );
    }
}

function mapStateToProps(state: any): {} {
    return {};
}

function mapDispatchToProps(dispatch: Redux.Dispatch): {} {
    return {
        doLogin: (username, password) => dispatch(new DoLogin(username, password))
    };
}

export default connect<{}, {}, LoginPanelProps>(mapStateToProps, mapDispatchToProps)(LoginPanel);
