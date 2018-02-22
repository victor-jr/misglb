import * as auth0 from 'auth0-js';
import history from '../History/History';

export default class Auth {
    private _auth0 = new auth0.WebAuth({
        domain: 'victorjr.auth0.com',
        clientID: 'XDibzEJzELE0W50lVkQwvVejDYAc95rX',
        redirectUri: 'http://localhost:5000/callback',
        audience: 'http://localhost:5000/api/',
        responseType: 'token id_token',
        scope: 'openid profile'
    })
    
    constructor() {
        this.login = this.login.bind(this);
        this.logout = this.logout.bind(this);
        this.handleAuthentication = this.handleAuthentication.bind(this);
        this.isAuthenticated = this.isAuthenticated.bind(this);        
    }
    
    handleAuthentication() {
        this._auth0.parseHash((err, authResult) => {
            if (authResult && authResult.accessToken && authResult.idToken) {
                this.setSession(authResult);
                this.getProfile();
                history.replace('/');
            } else if (err) {
                history.replace('/');
                console.log(err);
            }
        })
    }

    setSession(authResult: any) {
        let expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
        localStorage.setItem('access_token', authResult.accessToken);
        localStorage.setItem('id_token', authResult.idToken);
        localStorage.setItem('expires_at', expiresAt);
        history.replace('/');
    }

    logout() {
        localStorage.removeItem('access_token');
        localStorage.removeItem('id_token');
        localStorage.removeItem('expires_at');
        history.replace('/');
    }

    login() {
        this._auth0.authorize();
    }

    getProfile(): any {
        let accessToken: any = localStorage.getItem("access_token");
        this._auth0.client.userInfo(accessToken, (err: any, profile: any) => {
            if (profile) {
                localStorage.setItem('profile', profile);
            } else {
                console.log(err);
            }
        });
    }

    isAuthenticated() {
        let expiresAt = JSON.parse(String(localStorage.getItem('expires_at')));
        return new Date().getTime() < expiresAt;
    }
}