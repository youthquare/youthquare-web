import React, {Component} from 'react';
import * as Styled from './styles';
import LoginButton from './LoginButton';

class Login extends Component {
    render() {
        return (
            <Styled.Wrapper>
                <Styled.Container>
                    <div>
                        <Styled.YouthquareLogo/>
                        <Styled.Slogan>
                            세상을 보는 젊음의 광장<br/>
                            유스퀘어
                        </Styled.Slogan>
                    </div>
                    <Styled.Card>
                        <LoginButton>
                            페이스북 계정으로 로그인하기
                        </LoginButton>
                        <Styled.Divider/>
                        <Styled.LogoHolder>
                            <Styled.GooglePlay src={require('../../assets/google.png')}/>
                            <Styled.Appstore/>
                        </Styled.LogoHolder>
                    </Styled.Card>
                </Styled.Container>
            </Styled.Wrapper>
        );
    }
}

export default Login;
