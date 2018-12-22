import React, {Component} from 'react';
import * as Styled from './styles';
import {Link} from 'react-router-dom';
import {inject, observer} from 'mobx-react';
import {RootStore} from '../../../store';
import {computed, observable, toJS} from 'mobx';
import {ReactComponent as LikeLogo} from '../../../assets/ic_like.svg';
import {ReactComponent as DislikeLogo} from '../../../assets/ic_dislike.svg';

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

    @observable args: any[] = [];

    @computed get data() {
        return toJS(this.args);
    }

    componentDidMount(): void {
        this.props.store.postStore.loadArg(this.props.token)
            .then(({data}: any) => {
                console.log(data);
                this.args = data;
            });
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
                            {
                                this.data.length !== 0 ? this.data.map(({comment}, i) => (
                                        <Styled.ArgCard>
                                            <Styled.ArgTitle>{comment.comment_title}</Styled.ArgTitle>
                                            <Styled.FlexBox>
                                                <Styled.ArgImage alt={comment.comment_user_name}
                                                                 src={comment.comment_user_profile}/>
                                                <Styled.ArgName>{comment.comment_user_name}</Styled.ArgName>
                                                <Styled.ArgDate>{comment.comment_date}</Styled.ArgDate>
                                            </Styled.FlexBox>
                                            <p>{comment.comment_content}</p>
                                            <Styled.FlexBox style={{justifyContent: 'flex-end'}}>
                                                <p><LikeLogo/>{comment.comment_like}</p>
                                                <p style={{marginLeft: '.5rem'}}><DislikeLogo/>{comment.comment_dislike}</p>
                                            </Styled.FlexBox>
                                        </Styled.ArgCard>
                                    ))
                                    : <Styled.ArgEmpty>주장이 없습니다!</Styled.ArgEmpty>
                            }
                        </Styled.Arglist>
                    </div>
                </Styled.ContentSection>
            </Styled.NewsCardWrapper>
        );
    }
}

export default NewsCard;
