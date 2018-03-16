import * as auth0 from 'auth0-js';
import history from '../History/History';

interface Profile {
  family_name: string,
  given_name: string,
  locale: string,
  name: string,
  picture: string,
  sub: string,
  updated_at: string
}

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

  constructor() {
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
    this.handleAuthentication = this.handleAuthentication.bind(this);
    this.isAuthenticated = this.isAuthenticated.bind(this);
    this.getProfile = this.getProfile.bind(this);
  }

  handleAuthentication(props:any) {
    this._auth0.parseHash((err: any, authResult: any) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        this.setSession(authResult);
        props.history.replace('/');
      } else if (err) {
        props.history.replace('/');
        console.log(err);
        return err;
      }
    })
  }

  getProfile(cb: any) {
    if (this.isAuthenticated()) {
      const token = String(localStorage.getItem('access_token'));
      this._auth0.client.userInfo(token, (err, profile) => {
        if(profile) {
          this.userProfile = profile;
          cb(err,profile);
        } else {
          console.log(profile);
        }
      })
    }
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
    this.userProfile = null;
    history.replace('/');
  }

  login() {
    this._auth0.authorize();
  }

  isAuthenticated() {
    let expiresAt = JSON.parse(String(localStorage.getItem('expires_at')));
    return new Date().getTime() < expiresAt;
  }
}