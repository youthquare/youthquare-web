import React, {Component} from 'react';
import * as Styled from './styles';

class Feed extends Component {
    render() {
        return (
            <Styled.Container>
                <Styled.TitleHolder>
                    <div>
                        <Styled.Youthquare/>
                        <Styled.Title>
                            김진원님,
                            안녕하세요
                        </Styled.Title>
                        <Styled.Date>
                            2018/12/21 토요일
                        </Styled.Date>
                    </div>
                    <Styled.IconHolder>
                        <Styled.ActionButton>
                            <Styled.NotifyIcon/>
                        </Styled.ActionButton>
                        <Styled.ActionButton>
                            <Styled.SettingIcon/>
                        </Styled.ActionButton>
                    </Styled.IconHolder>
                </Styled.TitleHolder>
            </Styled.Container>
        );
    }
}

export default Feed;
