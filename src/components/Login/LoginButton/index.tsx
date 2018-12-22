import React, {Component} from 'react';
import * as Styled from './styles';
import {inject, observer} from 'mobx-react';
import {RootStore} from '../../../store';
import {withRouter} from 'react-router';

interface ILoginButtonProps {
    children: React.ReactNode;
    store?: RootStore;
    history?: any;
}

@inject('store')
@observer
class LoginButton extends Component<ILoginButtonProps> {

    login = () => {
        // @ts-ignore
        this.props.store.authStore.login()
            .then(() => {
                this.props.history.push('/feed')
            })
            .catch(() => console.log('errored!'));
    };

    render() {
        return (
            <Styled.ButtonWrapper onClick={this.login}>{this.props.children}</Styled.ButtonWrapper>
        );
    }
}

// @ts-ignore
export default withRouter(LoginButton);
