import React from 'react';
import { BooksContext } from "../../context/books/books-context";
import { GenreItem } from "../../components/genre-item";
import { usePagination, withDataReady } from "../../hoc-helpers";
import { Pagination } from "../../components/pagination";
import "./genres.sass";


const Genres = (props) => {
  const { genres, genresRecords, showLoader } = props;
  
  const [ { pieceOfData, pageCount }, handlePageClick ] = usePagination(genres, genresRecords);
    
  const genreList = (data) => {
    return data.map(genre => <GenreItem
        key={ genre.list_name_encoded }
        genre={ genre }
      />
    )
  };
  
  return (
    <div className="genres">
      <h2 className="genres__title">Genres</h2>
      
      { showLoader
        ? showLoader
        : <div className="list-group">
          { genreList(pieceOfData) }
    
          <Pagination pageCount={ pageCount } handlePageClick={ handlePageClick }/>
        </div>
      }
    </div>
  );
};


const mapMethodsToProps = (item) => {
  return {
    getLoadData: item.getGenres,
    getData: item.genres,
    error: item.booksError,
    loading: item.booksLoading
  }
};


export default withDataReady(BooksContext, mapMethodsToProps)(Genres);
