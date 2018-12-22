import React, {Component} from 'react';
import * as Styled from './styles';
import {Link} from 'react-router-dom';
import {inject, observer} from 'mobx-react';
import {RootStore} from '../../../store';

export interface INewsCardProps {
    image: string;
    title: string;
    content: string;
    url: string;
    token: string;
    uid: string;
    category: string;
    store: RootStore;
}

@observer
class NewsCard extends Component<INewsCardProps> {
    constructor(props: INewsCardProps) {
        super(props);
        this.state = {};
    }

    componentDidMount(): void {
        this.props.store.postStore.loadArg(this.props.token)
            .then((res) => console.log(res))
    }

    render() {
        const {title, content, image, category, url, token, uid} = this.props;
        return (
            <Styled.NewsCardWrapper>
                <Styled.ImageSection image={image} onClick={() => window.open(url, '_blank')}>
                    <div>
                        <Styled.CategoryTag>
                            {category}
                        </Styled.CategoryTag>
                        <Styled.ImageSectionTitle>
                            {title}
                        </Styled.ImageSectionTitle>
                    </div>
                </Styled.ImageSection>
                <Styled.ContentSection>
                    <Styled.ReadState>아직 기사를 읽지 않았습니다</Styled.ReadState>
                    <Styled.QuoteSection>
                        <Styled.QuoteIcon/>
                        {content}
                    </Styled.QuoteSection>
                    <Styled.ArgumentSectionTitle>
                        이 토픽에 대한 주장들
                    </Styled.ArgumentSectionTitle>
                    <div>
                        <Styled.Arglist>
                            <Link to={{
                                pathname: '/create',
                                search: `?uid=${uid}&token=${token}`
                            }}>
                                <Styled.CreateButton>
                                    + 새로운 주장 만들기
                                </Styled.CreateButton>
                            </Link>
                        </Styled.Arglist>
                    </div>
                </Styled.ContentSection>
            </Styled.NewsCardWrapper>
        );
    }
}

export default NewsCard;
