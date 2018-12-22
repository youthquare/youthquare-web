import {action, observable} from 'mobx';
import {RootStore} from './index';
import firebase from 'firebase/app';
import 'firebase/auth';

export class AuthStore {
    private rootStore: RootStore;
    @observable isAuthenticated: boolean = false;
    @observable inProgress: boolean = false;

    constructor(rootStore: RootStore) {
        this.rootStore = rootStore;
        const config = {
            apiKey: process.env.REACT_APP_API_KEY,
            authDomain: process.env.REACT_APP_AUTH_DOMAIN,
        };
        firebase.initializeApp(config);
    }

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
