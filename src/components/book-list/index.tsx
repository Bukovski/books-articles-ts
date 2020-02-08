import * as React from 'react';
import { BooksContext } from "../../context/books/books-context";
import { usePagination, withDataReady } from "../../hoc-helpers";
import BookItem, { IBookItem } from "./book-item";
import { Pagination } from "../pagination";
import { IBooks } from "../../context/books/books-state";
import "./book-list.sass"


interface IBookList {
  books: IBookItem[],
  booksRecords: number,
  showLoader: boolean
}

interface IMapItem {
  getBooks: (genreName: string) => Promise<void>,
  books: IBooks[],
  booksLoading: boolean,
  booksError: boolean,
}

type pageClick = (data: { selected: number }) => void


const BookList = (props: IBookList) => {
  const { books, booksRecords, showLoader } = props;

  //@ts-ignore
  const [ { pieceOfData, pageCount }, handlePageClick ] = usePagination(books, booksRecords);


  const bookList = (data: IBookItem[]) => {
    return data.map(genre => <BookItem key={ genre.primary_isbn13 } data={ genre }/>);
  };
  
  return (
    <div className="book-list">
      <h2 className="book-list__title">Book List</h2>

      { showLoader
        ? showLoader
        : <div className="list-group">
          { bookList(pieceOfData) }

          <Pagination pageCount={ pageCount } handlePageClick={ handlePageClick as pageClick }/>
        </div>
      }
    </div>
  )
};


const mapMethodsToProps = (item: IMapItem) => {
  return {
    getLoadData: item.getBooks,
    getData: item.books,
    error: item.booksError,
    loading: item.booksLoading
  }
};


export default withDataReady(BooksContext, mapMethodsToProps)(BookList);