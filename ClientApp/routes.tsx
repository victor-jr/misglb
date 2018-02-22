import * as React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { FetchData } from './components/FetchData';
import { Counter } from './components/Counter';
import { Callback } from './components/Callback';
import Auth from './service/Auth/Auth';

const auth = new Auth();

const handleAuthentication = ({location}: any) => {
    if (/access_token|id_token|error/.test(location.hash)) {
        auth.handleAuthentication();
    }
}

export const routes = <Layout auth={auth}> 
    <Route exact path='/' render={(props) => <Home />} />
    <Route path='/counter' render={(props) => <Counter {...props} />} />
    <Route path='/fetchdata' render={(props) => <FetchData {...props} />} />
    <Route path="/callback" render={props => {
        handleAuthentication(props);
        return <Callback {...props} />
    }} />
</Layout>;