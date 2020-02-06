import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { BooksState } from "./context/books/books-state";
import { ArticlesState } from "./context/articles/articles-state";
import Genres from './containers/genres'
import Arts from './containers/arts'
import Science from './containers/science'
import { BookList } from "./components/book-list";
import { Home } from "./containers/home";


const Routes = () => {
  return (
    <ArticlesState>
      <BooksState>
        <div className="container">
          <Switch>
            <Route path="/" exact component={ Home }/>
            <Route path="/genre/:name" component={ BookList }/>
            <Route path="/genre" component={ Genres }/>
            <Route path="/arts" component={ Arts } />
            <Route path="/science" component={ Science } />
            <Redirect to={'/'}/>
          </Switch>
        </div>
      </BooksState>
    </ArticlesState>
  )
};


export default Routes;