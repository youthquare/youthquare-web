import React, {Component} from 'react';
import * as Styled from './styles';
import NewsCard from '../common/NewsCard';
import {inject, observer} from 'mobx-react';
import {observable} from 'mobx';
import {Spring} from 'react-spring';
import {RootStore} from '../../store';

interface IFeedProps {
    children: React.ReactNode;
    store: RootStore;
}

@inject('store')
@observer
class Feed extends Component<IFeedProps> {

    constructor(props: any) {
        super(props);
    }

    @observable titleOpacity: number = 1;

    componentDidMount(): void {
        window.addEventListener('scroll', this.handleScroll);
        this.props.store.postStore.load();
        if (this.props.store.token && this.props.store.authStore.authInfo.uid === '0') {
            console.log('need data')
            this.props.store.authStore.current(this.props.store.token);
        }
    }

    componentWillUnmount(): void {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll = () => {
        this.titleOpacity = Math.max(1 - document.documentElement.scrollTop / 200, 0);
    };

    render(): React.ReactNode {
        return (
            <Spring to={{opacity: this.titleOpacity}} from={{opacity: 1}}>
                {props => (
                    <Styled.Container>
                        <Styled.TitleHolder style={props} opacity={this.titleOpacity}>
                            <div>
                                <Styled.Youthquare/>
                                <Styled.Title>
                                    {this.props.store.authStore.authInfo.name}님,
                                    안녕하세요
                                </Styled.Title>
                                <Styled.Date>
                                    2018/12/22 일요일
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
                        <Styled.ScrollUp style={props}>
                            <Styled.ArrowIcon/><br/>
                            스크롤 하거나 위쪽방향키를 눌러보세요
                        </Styled.ScrollUp>
                        {
                            this.props.store.postStore.isLoading
                                ? <p>Loading...</p>
                                : <div>
                                    {
                                        this.props.store.postStore.data.map((post, i) => (
                                            <NewsCard category={post.category}
                                                      store={this.props.store}
                                                      key={post.post_token}
                                                      image={post.img}
                                                      url={post.url}
                                                      uid={this.props.store.token}
                                                      token={post.post_token}
                                                      title={post.title}
                                                      content={post.content}/>
                                        ))
                                    }
                                </div>
                        }
                    </Styled.Container>
                )}
            </Spring>
        );
    }
}

export default Feed;
