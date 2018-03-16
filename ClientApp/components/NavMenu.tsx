import * as React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { LoginButton } from './LoginButton';
import Auth from '../service/Auth/Auth';
import { Grid, Image, Container, Icon } from 'semantic-ui-react';

interface NavMenuProps {
  auth: Auth;
}

export class NavMenu extends React.Component<NavMenuProps, {}> {
  public render() {
    return <div className='main-nav'>
      <div className='navbar navbar-inverse'>
        <div className='navbar-header'>
          <button type='button' className='navbar-toggle' data-toggle='collapse' data-target='.navbar-collapse'>
            <span className='sr-only'>Toggle navigation</span>
            <span className='icon-bar'></span>
            <span className='icon-bar'></span>
            <span className='icon-bar'></span>
          </button>
        </div>
        <div className='clearfix'></div>
        <div className='navbar-collapse collapse'>
          <ul className='nav navbar-nav'>
            <li>
              <NavLink to={'/'} exact activeClassName='active'>
                <span className='glyphicon glyphicon-home'></span> Home
                            </NavLink>
            </li>
            <li>
              <NavLink to={'/counter'} activeClassName='active'>
                <span className='glyphicon glyphicon-education'></span> Counter
                            </NavLink>
            </li>
            <li>
              <NavLink to={'/fetchdata'} activeClassName='active'>
                <span className='glyphicon glyphicon-th-list'></span> Fetch data
                            </NavLink>
            </li>
            <LoginButton auth={this.props.auth} />
          </ul>
        </div>
      </div>
    </div>;
  }
}
