import {action, computed, observable} from 'mobx';
import {RootStore} from './index';
import firebase from 'firebase/app';
import 'firebase/auth';
import axios from 'axios';

interface AuthInfo {
    age: number;
    email: string;
    name: string;
    post_list: string[];
    uid: string;
    __v?: number;
    _id?: string;
}

export class AuthStore {
    private rootStore: RootStore;
    @observable authInfo: AuthInfo = {
        age: 19,
        email: 'katttergil331@gmail.com',
        name: '회원',
        post_list: [''],
        uid: '0',
    };
    @observable inProgress: boolean = false;

    constructor(rootStore: RootStore) {
        this.rootStore = rootStore;
        const config = {
            apiKey: process.env.REACT_APP_API_KEY,
            authDomain: process.env.REACT_APP_AUTH_DOMAIN,
        };
        firebase.initializeApp(config);
    }

    @computed get isAuthenticated() {
        return window.localStorage.getItem('jwt') !== '' && window.localStorage.getItem('jwt') !== null;
    }

    @action current = (uid: string) => {
        axios.post(process.env.REACT_APP_API_BASE_URL + '/data/user', {uid})
            .then(({data}) => {
                this.authInfo = data;
            });
    };

    @action login = () => new Promise((resolve, reject) => {
        this.inProgress = true;
        const provider = new firebase.auth.FacebookAuthProvider();
        provider.setCustomParameters({
            display: 'popup',
        });
        firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {
                if (result.credential) {
                    // This gives you a Facebook Access Token. You can use it to access the Facebook API.
                    const credential = result.credential;
                    console.log('Credential', credential);
                }
                const {user} = result;
                console.log('Success', user!.providerData[0]);
                this.inProgress = false;
                axios.post(process.env.REACT_APP_API_BASE_URL + '/auth/login', {uid: user!.providerData[0]!.uid})
                    .then(({data: {data}}) => {
                        this.authInfo = data;
                        this.rootStore.setToken(data.uid);
                    })
                    .catch((err) => console.log(err));
                resolve();
            })
            .catch((error) => {
                // Handle Errors here.
                const {
                    code: errorCode, message: errorMessage, email, credential,
                } = error;
                console.log('failed:', errorMessage, errorCode, email, credential);
                this.inProgress = false;
                reject();
            });
    });
}
