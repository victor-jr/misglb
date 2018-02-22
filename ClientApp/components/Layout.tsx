import * as React from 'react';
import { NavMenu } from './NavMenu';
import Auth from '../service/Auth/Auth';

export interface LayoutProps {
    children?: React.ReactNode;
    auth: Auth;
}

export class Layout extends React.Component<LayoutProps, {}> {
    public render() {
        return <div className='container-fluid'>
            <div className='row'>
                <div className='col-sm-3'>
                    <NavMenu auth={this.props.auth} />
                </div>
                <div className='col-sm-9'>
                    { this.props.children }
                </div>
            </div>
        </div>;
    }
}
