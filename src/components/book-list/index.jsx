import React from 'react';
import { BooksContext } from "../../context/books/books-context";
import { usePagination, withDataReady } from "../../hoc-helpers";
import BookItem from "./book-item";
import { Pagination } from "../pagination";
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
    
          <Pagination pageCount={ pageCount } handlePageClick={ handlePageClick }/>
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
