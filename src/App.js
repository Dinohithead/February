import './App.scss';
import React from 'react';
import { Route, Switch } from 'react-router-dom';

import SnowLand from './locations/snowland';

const App = props => {
    return (
        <>
            <Switch>
                <Route path='/snowland' component={SnowLand}/>
            </Switch>   
        </>
    )
}

export default App