import * as React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Auth from '../service/Auth/Auth';

interface LoginButtonProps {
    auth: Auth;
    handleLayoutLogout: Function;
}

export class LoginButton extends React.Component<LoginButtonProps, {}> {
    constructor(props: any) {
        super(props);
        this.handleLogout = this.handleLogout.bind(this);
        this.handleLogin = this.handleLogin.bind(this);        
    }

    handleLogout = (event: React.MouseEvent<HTMLAnchorElement>) => {
        event.preventDefault();
        this.props.auth.logout();
        this.props.handleLayoutLogout();
    }

    handleLogin = (event: React.MouseEvent<HTMLAnchorElement>) => {
        event.preventDefault();     
        this.props.auth.login();
    }
    
    public render() {
        const isLoggedIn = this.props.auth.isAuthenticated();
        let button = null;
        if (isLoggedIn) {
            button =
            <a href="#" onClick={this.handleLogout}>
                <span className='glyphicon glyphicon-log-out'></span> Logout
            </a>
        } else {
            button = 
            <a href="#" onClick={this.handleLogin}>
                <span className='glyphicon glyphicon-log-in'></span> Login
            </a>
        }

        return <li> {button} </li>
    }
}