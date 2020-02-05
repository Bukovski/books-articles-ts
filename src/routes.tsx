import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Genres from './containers/genres'
import Arts from './containers/arts'
import Science from './containers/science'
import { BooksState } from "./context/books/books-state";
import { BookList } from "./components/book-list";


const Routes = () => {
  return (
    <BooksState>
      <div className="container">
        <Switch>
          <Route path="/" exact component={ () => <h1>Hello</h1> }/>
          <Route path="/genre/:name" component={ BookList }/>
          <Route path="/genre" component={ Genres }/>
          <Route path="/arts" component={ Arts } />
          <Route path="/science" component={ Science } />
          <Redirect to={'/'}/>
        </Switch>
      </div>
    </BooksState>
  )
};


export default Routes;