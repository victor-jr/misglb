import * as React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { LoginButton } from './LoginButton';
import Auth from '../service/Auth/Auth';
import  { Grid, Image, Container, Icon } from 'semantic-ui-react';

interface NavMenuProps {
    auth: Auth;
}

const containerPad = {
    padding: '1rem'
}

export class NavMenu extends React.Component<NavMenuProps, {}> {
    public render() {
        return <div className='main-nav'>
                <div className='navbar navbar-inverse'>
                    <div className="row">
                        <div style={containerPad}>
                                <Grid>
                                    <Grid.Column key={1}>
                                        <Container>
                                            <Image avatar size="tiny" src="https://lh3.googleusercontent.com/-5EREnMhlGd8/AAAAAAAAAAI/AAAAAAAABMM/j4Acegg3un8/s75-p-rw-no/photo.jpg" />
                                        </Container>
                                    </Grid.Column>
                                    <Grid.Column key={2}>
                                        <Icon name="sign in"/>
                                    </Grid.Column>
                                </Grid>
                        </div>
                    </div>
                <div className='navbar-header'>
                    <button type='button' className='navbar-toggle' data-toggle='collapse' data-target='.navbar-collapse'>
                        <span className='sr-only'>Toggle navigation</span>
                        <span className='icon-bar'></span>
                        <span className='icon-bar'></span>
                        <span className='icon-bar'></span>
                    </button>
                    <Link className='navbar-brand' to={ '/' }> MISGLB</Link>
                </div>
                <div className='clearfix'></div>
                <div className='navbar-collapse collapse'>
                    <ul className='nav navbar-nav'>
                        <li>
                            <NavLink to={ '/' } exact activeClassName='active'>
                                <span className='glyphicon glyphicon-home'></span> Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={ '/counter' } activeClassName='active'>
                                <span className='glyphicon glyphicon-education'></span> Counter
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={ '/fetchdata' } activeClassName='active'>
                                <span className='glyphicon glyphicon-th-list'></span> Fetch data
                            </NavLink>
                        </li>
                        <LoginButton auth={this.props.auth} />
                        <li>
                            <a href='#' onClick={(e) => this.props.auth.getProfile()}>Get Profile</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>;
    }
}
