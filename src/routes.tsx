import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { BooksState } from "./context/books/books-state";
import ErrorBoundry from "./components/error-boundry";
import Genres from './containers/genres'
import BookList from "./components/book-list";
import { Home } from "./containers/home";


const Routes = () => {
  return (
    <ErrorBoundry>
      <BooksState>
        <div className="container">
          <Switch>
            <Route path="/" exact component={ Home }/>
            <Route path="/genre/:name" component={ BookList }/>
            <Route path="/genre" component={ Genres }/>
            <Redirect to={'/'}/>
          </Switch>
        </div>
      </BooksState>
    </ErrorBoundry>
  )
};


export default Routes;