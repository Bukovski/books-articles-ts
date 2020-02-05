import React, { useContext, useEffect, Fragment } from 'react';
import { BooksContext} from "../context/books/books-context";

const Genres = () => {
  const { genres, loading, getGenres } = useContext(BooksContext)
  
  useEffect(() => {
    getGenres();
  }, []);
  
  if (loading) return <p className="text-center">Загрузка...</p>;
  
  const genreList = (data) => {
    return data.map(genre => {
      const { display_name, list_name_encoded } = genre;
      
      return <a
        key={ list_name_encoded }
        href={ list_name_encoded }
        className="list-group-item list-group-item-action"
      >
        <p className="mb-1">{ display_name }</p>
      </a>
    })
  };
  
  return (
    <div className="list-group">
      { genreList(genres) }
    </div>
  );
};


export default Genres;
