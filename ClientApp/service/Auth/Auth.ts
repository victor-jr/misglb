import * as auth0 from 'auth0-js';

export default class Auth {
  private _auth0 = new auth0.WebAuth({
    domain: 'victorjr.auth0.com',
    clientID: 'XDibzEJzELE0W50lVkQwvVejDYAc95rX',
    redirectUri: 'http://localhost:5000/callback',
    audience: 'http://localhost:5000/api/',
    responseType: 'token id_token',
    scope: 'openid profile'
  })

  userProfile: any;
  history: any;

  constructor() {
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
    this.handleAuthentication = this.handleAuthentication.bind(this);
    this.isAuthenticated = this.isAuthenticated.bind(this);
    this.getProfile = this.getProfile.bind(this);
    this.userProfile = {};
    this.history = null;
  }

  handleAuthentication(history: any) {
    this.history = history;
    this._auth0.parseHash((err: any, authResult: any) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        this.setSession(authResult);
        this.history.replace('/');
      } else if (err) {
        this.history.replace('/');
        console.log(err);
        return err;
      }
    })
  }

  getProfile(cb: any) {    
    const token = String(localStorage.getItem('access_token'));
    this._auth0.client.userInfo(token, (err, profile) => {
      if(profile) {
        this.userProfile = profile;
        cb(err, profile);
      } else {
        console.log(err);
      }
    })
  }

  setSession(authResult: any) {
    let expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
    localStorage.setItem('access_token', authResult.accessToken);
    localStorage.setItem('id_token', authResult.idToken);
    localStorage.setItem('expires_at', expiresAt);
  }

  logout() {
    localStorage.removeItem('access_token');
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');
    this.userProfile = {};
    // this.history.replace('/');
  }

  login() {
    this._auth0.authorize();
  }

  isAuthenticated() {
    let expiresAt = JSON.parse(String(localStorage.getItem('expires_at')));
    return new Date().getTime() < expiresAt;
  }
}