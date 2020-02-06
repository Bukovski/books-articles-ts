import React, { useContext, useEffect, useState } from 'react';
import { BooksContext} from "../../context/books/books-context";
import { Loader } from "../../components/loader";
import { Error } from "../../components/error";
import { GenreItem } from "../../components/genre-item";
import "./genres.sass";
import ReactPaginate from 'react-paginate';


export const Genres = () => {
  const { genres, loading, error, getGenres } = useContext(BooksContext);
  
  const [ notesOnPage, setNotesOnPage ] = useState(9);
  const [ pageCount, setPageCount ] = useState(10);
  const [ data, setData ] = useState([]);
  
  
  useEffect(() => {
    async function dataGenres() {
      await getGenres();
    }
    
    dataGenres();
    // eslint-disable-next-line
  }, []);
  
  useEffect(() => {
    countNotes();
    sliceGenre();
    
    // eslint-disable-next-line
  }, [ genres ]);
  
  
  const countNotes = () => {
    const pageCount = Math.ceil(genres.length / notesOnPage);
    
    setPageCount(pageCount);
  };
  
  const sliceGenre = (pageNumber = 0) => {
    const start = pageNumber * notesOnPage;
    const end = start + notesOnPage;
  
    const notes = genres.slice(start, end);
    
    setData(notes);
  };
  
  
  if (error) return <Error />;
  if (!genres.length || loading) return <Loader />;
  
  
  const genreList = (data) => {
    return data.map(genre => <GenreItem
        key={ genre.list_name_encoded }
        genre={ genre }
      />
    )
  };
  
  const handlePageClick = data => {
    const selected = data.selected; // page number click
    
    sliceGenre(selected)
  };
  
  return (
    <div className="genres">
      <h2 className="genres__title">Genres</h2>
      <div className="list-group">
        { genreList(data) }
        
        <div className="genres__pagination">
          <ReactPaginate
            previousLabel={'<'}
            nextLabel={'>'}
            breakLabel={'...'}
            breakClassName={'page-link'}
            previousClassName={'page-link'}
            nextClassName={'page-link'}
            pageCount={ pageCount }
            marginPagesDisplayed={ 1 }
            pageRangeDisplayed={ 3 }
            onPageChange={ handlePageClick }
            containerClassName={'pagination justify-content-center'}
            pageClassName={'page-item'}
            pageLinkClassName={'page-link'}
            activeClassName={'active'}
          />
        </div>
      </div>
    </div>
  );
};
