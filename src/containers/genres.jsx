import React, { useContext, useEffect } from 'react';
import { BooksContext} from "../context/books/books-context";


const Genres = () => {
  const { genres, loading, error, getGenres } = useContext(BooksContext)
  
  useEffect(() => {
    getGenres();
  
    // eslint-disable-next-line
  }, []);
  
  
  if (error) return <p className="text-center alert-danger">!Error</p>;
  if (!genres.length || loading) return <p className="text-center">Loading...</p>;
  
  const genreList = (data) => {
    return data.map(genre => {
      const { display_name, list_name_encoded } = genre;
      
      return <a
        key={ list_name_encoded }
        href={ "/genre/" + list_name_encoded }
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
