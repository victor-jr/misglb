import * as React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Auth from '../service/Auth/Auth';

interface LoginButtonProps {
    auth: Auth;
}

export class LoginButton extends React.Component<LoginButtonProps, {}> {
    public render() {
        const isLoggedIn = this.props.auth.isAuthenticated();
        console.log(isLoggedIn);
        let button = null;
        if (isLoggedIn) {
            button =
            <a href="#" onClick={e => this.props.auth.logout()}>
                <span className='glyphicon glyphicon-log-out'></span> Logout
            </a>
        } else {
            button = 
            <a href="#" onClick={e => this.props.auth.login()}>
                <span className='glyphicon glyphicon-log-in'></span> Login
            </a>
        }

        return <li> {button} </li>
    }
}