import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Genres from './containers/Genres'
import Arts from './containers/Arts'
import Science from './containers/Science'


const Routes = () => {
  return (
    <div className="container">
      <Switch>
        <Route path="/" exact component={ Genres }/>
        <Route path="/arts" component={ Arts } />
        <Route path="/science" component={ Science } />
        <Redirect to={'/'}/>
      </Switch>
    </div>
  )
};


export default Routes;