import React, {Component} from 'react';
import Login from './Login';
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom';
import * as Styled from './styles';
import {inject, observer} from 'mobx-react';
import {RootStore} from '../store';
import Feed from './Feed';

interface IAppProps {
    children?: React.ReactNode;
    store: RootStore
}

@inject('store')
@observer
class App extends Component<IAppProps> {
    render() {
        const PrivateRoute = ({ component: Component, ...rest }: any) => (
            <Route {...rest} render={(props) => (
                this.props.store.authStore.isAuthenticated === true
                    ? <Component {...props} />
                    : <Redirect to='/login' />
            )} />
        );

        return (
            <>
                <Router>
                    <>
                        <Route path="/feed" exact component={Feed}/>
                        {/*<PrivateRoute path="/feed" exact component={Feed}/>*/}
                        <Route path="/login" exact component={Login}/>
                    </>
                </Router>
                <Styled.GlobalStyles/>
            </>
        );
    }
}

export default App;
