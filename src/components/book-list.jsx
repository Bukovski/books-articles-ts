import React, { useContext, useEffect } from 'react';
import { BooksContext } from "../context/books/books-context";
import { Loader } from "./loader";
import { Error } from "./error";


export const BookList = (props) => {
  const { name } = props.match.params;
  const { books, loading, error, getBooks } = useContext(BooksContext);
  
  useEffect(() => {
    getBooks(name);
    
    // eslint-disable-next-line
  }, [ name ]);
  
  
  if (error) return <Error />;
  if (!books.length || loading) return <Loader />;
  
  
  const bookList = (data) => {
    return data.map(genre => {
      const { title, author, description, contributor, amazon_product_url, book_image } = genre;
      
      return <div key={ title } className="row">
        <a
          href={ amazon_product_url }
          className="list-group-item list-group-item-action col-md-8"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="d-flex w-100 justify-content-between">
            <h5 className="mb-1">{ title }</h5>
            <small>{ author }</small>
          </div>
          <p className="mb-1">{ description }</p>
          <small>{ contributor }</small>
        </a>
        <img src={ book_image } alt={ title } className="col-md-2"/>
      </div>
    })
  };
  
  return (
    <div>
      <div className="list-group">
        { bookList(books) }
      </div>
    </div>
  )
};