import React from 'react';
import ReactPaginate from 'react-paginate';
import { BooksContext } from "../../context/books/books-context";
import { GenreItem } from "../../components/genre-item";
import { usePagination, withDataReady } from "../../hoc-helpers";
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
          
          <div className="pagination__wrap">
            <ReactPaginate
              previousLabel={ '<' }
              nextLabel={ '>' }
              breakLabel={ '...' }
              breakClassName={ 'page-link' }
              previousClassName={ 'page-link' }
              nextClassName={ 'page-link' }
              pageCount={ pageCount }
              marginPagesDisplayed={ 1 }
              pageRangeDisplayed={ 3 }
              onPageChange={ handlePageClick }
              containerClassName={ 'pagination justify-content-center' }
              pageClassName={ 'page-item' }
              pageLinkClassName={ 'page-link' }
              activeClassName={ 'active' }
            />
          </div>
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