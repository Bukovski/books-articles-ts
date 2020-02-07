import React from 'react';
import ReactPaginate from "react-paginate";
import { BooksContext } from "../../context/books/books-context";
import { usePagination, withDataReady } from "../../hoc-helpers";
import BookItem from "./book-item";
import "./book-list.sass"


const BookList = (props) => {
  const { books, booksRecords, showLoader } = props;
  
  const [ { pieceOfData, pageCount }, handlePageClick ] = usePagination(books, booksRecords);
  
  const bookList = (data) => {
    return data.map(genre => <BookItem key={ genre.primary_isbn13 } data={ genre }/>);
  };
  
  return (
    <div className="book-list">
      <h2 className="book-list__title">Book List</h2>
      
      { showLoader
        ? showLoader
        : <div className="list-group">
          { bookList(pieceOfData) }
          
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
  )
};


const mapMethodsToProps = (item) => {
  return {
    getLoadData: item.getBooks,
    getData: item.books,
    error: item.booksError,
    loading: item.booksLoading
  }
};


export default withDataReady(BooksContext, mapMethodsToProps)(BookList);
