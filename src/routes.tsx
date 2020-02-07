import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { BooksState } from "./context/books/books-state";
import Genres from './containers/genres'
import BookList from "./components/book-list";
import { Home } from "./containers/home";


const Routes = () => {
  return (
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
  )
};


export default Routes;