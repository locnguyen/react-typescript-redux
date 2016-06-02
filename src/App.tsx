import * as React from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';

class App extends React.Component<{}, {}> {
    constructor(props: any) {
        super(props);
    }

    public render() {
        return (
            <div>
                <h1>App</h1>

                <Link to="/login">Login</Link>

                {this.props.children}
            </div>
        );
    }
}

function mapStateToProps(state: any): {} {
    return {};
}

function mapDispatchToProps(dispatch: Redux.Dispatch): {} {
    return {};
}

export default connect<{}, {}, App>(mapStateToProps, mapDispatchToProps)(App);
