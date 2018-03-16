import * as React from 'react';
import { NavMenu } from './NavMenu';
import Auth from '../service/Auth/Auth';

export interface LayoutProps {
  children?: React.ReactNode;
  auth: Auth;
}

export interface LayoutStates {
  profile: any
}

export class Layout extends React.Component<LayoutProps, LayoutStates> {
  constructor(props: any) {
    super(props);
    this.state = {
      profile: null
    }
  }

  componentDidMount() {
    const { isAuthenticated, getProfile, userProfile } = this.props.auth;
    if (isAuthenticated()) {
      getProfile( (err: any, profile: any) => {
        this.setState({
          profile: profile
        })
      })
    }
  }

  public render() {
    const { profile } = this.state;
    return (
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-sm-3'>
            <NavMenu auth={this.props.auth} />
          </div>
          <div className='col-sm-9'>
            <h1 style={{color: 'red'}}>{profile == null ? 'No User Found' : this.state.profile.name}</h1>
            {this.props.children}
          </div>
        </div>
      </div>);
  }
}
