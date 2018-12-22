import React, {Component} from 'react';
import * as Styled from './styles';
import {inject, observer} from 'mobx-react';
import {RootStore} from '../../../store';

interface ILoginButtonProps {
    children: React.ReactNode;
    store?: RootStore;
}

@inject('store')
@observer
class LoginButton extends Component<ILoginButtonProps> {

    login = () => {
        // @ts-ignore
        this.props.store.authStore.login()
            .then(() => console.log('Finished!'))
            .catch(() => console.log('errored!'));
    };

    render() {
        return (
            <Styled.ButtonWrapper onClick={this.login}>{this.props.children}</Styled.ButtonWrapper>
        );
    }
}

export default LoginButton;
