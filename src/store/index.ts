import {AuthStore} from './authStore';
import {action, reaction} from 'mobx';
import {PostStore} from './postStore';

export class RootStore {
    public authStore: AuthStore;
    public postStore: PostStore;
    public token: string = window.localStorage.getItem('jwt') as string;

    constructor() {
        this.authStore = new AuthStore(this);
        this.postStore = new PostStore();
    }

    @action setToken(token: string) {
        this.token = token;
        if (token) {
            window.localStorage.setItem('jwt', token);
        } else {
            window.localStorage.removeItem('jwt');
        }
    }
}
