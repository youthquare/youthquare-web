import {action, computed, observable, toJS} from 'mobx';
import axios from 'axios';

interface Post {
    category: string;
    content: string;
    img: string;
    url: string;
    post_token: string;
    title: string;
    __v?: number;
    _id?: string;
}

export class PostStore {
    @observable posts: Post[] = [];
    @observable isLoading: boolean = true;

    @action add = (data: any) => new Promise((resolve, reject) => {
        axios.post(process.env.REACT_APP_API_BASE_URL + '/post/add/argument', data)
            .then(res => {
                console.log(res);
                resolve();
            })
            .catch(err => {
                console.log(err);
                reject();
            });
    });

    @action load = () => {
        this.isLoading = true;
        axios.get(process.env.REACT_APP_API_BASE_URL + '/post')
            .then(({data: {data}}) => {
                this.isLoading = false;
                this.posts = data;
            })
            .catch((err) => {
                this.isLoading = false;
                console.log(err);
            });
    };

    @action loadArg = (token: string) => new Promise((resolve, reject) => {
        axios.get(process.env.REACT_APP_API_BASE_URL + '/post/get/argument/' + token)
            .then(({data}) => {
                console.log(data);
                resolve(data);
            })
            .catch((err) => {
                console.log(err);
                reject(err);
            });
    });

    @computed get data() {
        return toJS(this.posts);
    }
}
