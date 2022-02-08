import React from 'react';
import { Switch, Route, BrowserRouter} from 'react-router-dom';


// PAGES
import Login from './pages/Login';
import LoginSide from './pages/LoginSide';

  const Routes = () => (

        <BrowserRouter>
        <Switch>
         
            <Route exact path='/'>
                <Login />
            </Route>

            <Route exact path='/loginside'>
                <LoginSide />
            </Route>           

        </Switch>
        </BrowserRouter>

    );

    export default Routes;