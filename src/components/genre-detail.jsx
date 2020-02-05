import React, { useContext, useEffect } from 'react';
import { BooksContext } from "../context/books/books-context";


export const GenreDetail = (props) => {
  const { name } = props.match.params;
  const { genre, loading, error, getGenre } = useContext(BooksContext);
  
  useEffect(() => {
    getGenre(name);
    
    // eslint-disable-next-line
  }, [ name ]);
  
  
  if (error) return <p className="text-center alert-danger">!Error</p>;
  if (!genre.length || loading) return <p className="text-center">Loading...</p>;
  
  
  const genreList = (data) => {
    return data.map(genre => {
      if (genre && genre.book_details) {
        const { title, contributor, description, author } = genre.book_details[ 0 ];
  
        return <a
          key={ title }
          href={ genre.amazon_product_url }
          className="list-group-item list-group-item-action"
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
      }
      
      return "";
    })
  };
  
  const titlePage = (genre && genre[ 0 ].list_name) || "";
  
  return (
    <div>
      <h3 className="text-center">{ titlePage }</h3>
      
      <div className="list-group">
        { genreList(genre) }
      </div>
    </div>
    )
};