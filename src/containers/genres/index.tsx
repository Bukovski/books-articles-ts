import * as React from 'react';
import { BooksContext } from "../../context/books/books-context";
import { GenreItem } from "../../components/genre-item";
import { usePagination, withDataReady } from "../../hoc-helpers";
import { Pagination } from "../../components/pagination";
import { IGenres } from "../../context/books/books-state";
import "./genres.sass";


interface IGenresProps {
  genres: IGenres[],
  genresRecords: number,
  showLoader: boolean
}

interface IMapItem {
  getGenres: (genreName: string) => Promise<void>,
  genres: IGenres[],
  booksLoading: boolean,
  booksError: boolean,
}

type pageClick = (data: { selected: number }) => void


const Genres = (props: IGenresProps) => {
  const { genres, genresRecords, showLoader } = props;

  const [ pieceOfData, pageCount, handlePageClick ] = usePagination(genres, genresRecords);
    
  const genreList = (data: IGenres[]) => {
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
          { genreList(pieceOfData as any as  IGenres[]) }
    
          <Pagination pageCount={ pageCount } handlePageClick={ handlePageClick as pageClick }/>
        </div>
      }
    </div>
  );
};


const mapMethodsToProps = (item: IMapItem) => {
  return {
    getLoadData: item.getGenres,
    getData: item.genres,
    error: item.booksError,
    loading: item.booksLoading
  }
};


export default withDataReady(BooksContext, mapMethodsToProps)(Genres);
