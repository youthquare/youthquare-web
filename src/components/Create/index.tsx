import React, {Component} from 'react';
import queryString from 'querystring';
import {inject, observer} from 'mobx-react';
import {observable} from 'mobx';
import Form from 'react-jsonschema-form';
import * as Styled from './styles';
import {RootStore} from '../../store';
import {withRouter} from 'react-router-dom';

interface ICreateProps {
    location?: any;
    store: RootStore;
    history?: any;
}

const schema = {
    title: '새로운 주장 추가',
    type: 'object',
    required: ['comment_title', 'link', 'comment_content'],
    properties: {
        comment_title: {type: 'string', title: '주장 제목'},
        comment_content: {
            type: 'array',
            title: '근거',
            minItems: 3,
            items: {
                type: 'string'
            }
        },
        link: {
            type: 'array',
            title: '자료',
            minItems: 2,
            items: {
                type: 'string',
                format: 'uri',
            }
        },
    }
};

@inject('store')
@observer
class Create extends Component<ICreateProps> {

    @observable uid: string = '';
    @observable token: string = '';

    componentDidMount(): void {
        const query = queryString.parse(this.props.location.search);
        this.uid = query['?uid'] as string;
        this.token = query.token as string;
        console.log(query);
    }

    handleSubmit = ({formData}: any) => {
        this.props.store.postStore.add({
            ...formData,
            uid: this.uid,
            post_token: this.token
        })
            .then(() => this.props.history.push('/feed'));
    };

    render(): React.ReactNode {
        // @ts-ignore
        return (
            <Styled.Wrapper>
                {/*{this.uid}*/}
                {/*{this.token}*/}
                <Form schema={schema} onSubmit={this.handleSubmit}/>
                <Styled.GlobalStyles/>
            </Styled.Wrapper>
        );
    }
}

// @ts-ignore
export default withRouter(Create);
