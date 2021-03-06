import * as React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { FetchData } from './components/FetchData';
import { Counter } from './components/Counter';
import { Callback } from './components/Callback';
import Auth from './service/Auth/Auth';
import NewApplication from './pages/NewApplication';
import ViewApplication from './pages/ViewApplication';

let auth = new Auth();

const handleAuthentication = (props:any) => {
  if (/access_token|id_token|error/.test(props.location.hash)) {
    auth.handleAuthentication(props.history);
  }
}

export const routes = 
  <Layout auth={auth} >
    <Route exact path='/' render={(props) => <Home {...props} auth={auth} />} />
    <Route path='/counter' render={(props) => <Counter {...props} />} />
    <Route path='/fetchdata' render={(props) => <FetchData {...props} />} />
    <Route path='/new-application' render={(props) => <NewApplication auth={auth} {...props} />} />
    <Route path='/view-applicaiton' render={props => <ViewApplication {...props} />} />
    <Route path="/callback" render={props => {
      handleAuthentication(props);
      return <Callback {...props} />
    }} />
  </Layout>;
