import {AuthStore} from './authStore';
import {action, reaction} from 'mobx';

export class RootStore {
    public authStore: AuthStore;
    public token: string = window.localStorage.getItem('jwt') as string;

    constructor() {
        this.authStore = new AuthStore(this);
        reaction(
            () => this.token,
            token => {
                if (token) {
                    window.localStorage.setItem('jwt', token);
                } else {
                    window.localStorage.removeItem('jwt');
                }
            }
        );
    }

    @action setToken(token: string) {
        this.token = token;
    }
}
