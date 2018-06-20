import * as React from 'react';
import { NavMenu } from './NavMenu';
import Auth from '../service/Auth/Auth';
import * as _ from 'lodash';

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
      profile: {}
    };
  }
  
  getProfileInfo = () => {
    const { getProfile, userProfile } = this.props.auth;
    getProfile( (err: any, profile: any) => {
      if (profile) {
        this.setState({
          profile
        })
      } else {
        console.log(err);
      }
    })
  }

  handleLayoutLogout = () => {
    const { userProfile } = this.props.auth;    
    this.setState({
      profile: userProfile
    })
  }

  public render() {
    const { profile } = this.state;
    const { isAuthenticated } = this.props.auth;
    
    if (isAuthenticated() && _.isEmpty(profile)) {
      this.getProfileInfo();
    }
    
    return (
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-sm-3'>
            <NavMenu {...this.props} {...this.state} handleLayoutLogout={this.handleLayoutLogout} />
          </div>
          <div className='col-sm-9'>
            {this.props.children}
          </div>
        </div>
      </div>);
  }
}
