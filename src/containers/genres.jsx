import React, { useContext, useEffect } from 'react';
import { Link } from "react-router-dom";
import { BooksContext} from "../context/books/books-context";
import { Loader } from "../components/loader";
import { Error } from "../components/error";


const Genres = () => {
  const { genres, loading, error, getGenres } = useContext(BooksContext)
  
  useEffect(() => {
    getGenres();
  
    // eslint-disable-next-line
  }, []);
  
  
  if (error) return <Error />;
  if (!genres.length || loading) return <Loader />;
  
  const genreList = (data) => {
    return data.map(genre => {
      const { display_name, list_name_encoded } = genre;
      
      return <Link
        key={ list_name_encoded }
        to={ "/genre/" + list_name_encoded }
        className="list-group-item list-group-item-action"
      >
        <p className="mb-1">{ display_name }</p>
      </Link>
    })
  };
  
  return (
    <div className="list-group">
      { genreList(genres) }
    </div>
  );
};


export default Genres;
