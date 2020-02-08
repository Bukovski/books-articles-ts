import * as React from 'react';
import { useReducer } from 'react';
import { BooksContext } from "./books-context";
import { booksReducer } from "./books-reducer";
import {
  GET_BOOKS_GENRES, GET_BOOKS,
  SET_BOOKS_RECORDS, SET_GENRES_RECORDS,
  SET_BOOKS_ERROR, SET_BOOKS_LOADING,
} from '../types';


export interface IGenres {
  list_name: string
  display_name: string
  list_name_encoded: string
}

export interface IBooks {
  title: string,
  author: string,
  description: string,
  contributor: string,
  amazon_product_url: string,
  book_image: string,
  primary_isbn13: string
}

export interface IInitialState {
  genres: IGenres[],
  books: IBooks[],
  booksRecords: number,
  genresRecords: number,
  booksLoading: boolean,
  booksError: boolean,
  booksErrorMessage: string
}


export interface IReducerAction {
  type: string,
  payload?: any
}




const BOOKS_SECRET_KEY: string | undefined = process.env.REACT_APP_SECRET_KEY;
const REACT_APP_BASIC_SERVER: string | undefined = process.env.REACT_APP_BASIC_SERVER;


const BooksState = ({ children }: { children: React.ReactNode }) => {
  const initialState: IInitialState = {
    genres: [],
    books: [],
    booksRecords: 6,
    genresRecords: 10,
    booksLoading: false,
    booksError: false,
    booksErrorMessage: ""
  };
  
  const [ state, dispatch ] = useReducer<React.Reducer<any, IReducerAction>>(booksReducer, initialState);
  
  const setLoading = () => dispatch({ type: SET_BOOKS_LOADING });
  const setError = (message: string) => dispatch({ type: SET_BOOKS_ERROR, payload: message });
  
  const getGenres = async () => {
    setLoading();
    
    try {
      const response = await fetch(
        `${ REACT_APP_BASIC_SERVER }books/v3/lists/names.json?api-key=${ BOOKS_SECRET_KEY }`
      );
      const data = await response.json();
      
      if (data.status !== "OK") return setError("Genres: Server Error");

      dispatch({ type: GET_BOOKS_GENRES, payload: data.results })
    } catch (error) {
      setError(error)
    }
  };
  
  const getBooks = async (genreName: string) => {
    setLoading();
    
    try {
      const response = await fetch(
        `${ REACT_APP_BASIC_SERVER }books/v3/lists/${ genreName }.json?api-key=${ BOOKS_SECRET_KEY }`
      );
      const data = await response.json();
      
      if (data.status !== "OK") return setError("Books: Server Error");

      console.log("books", data.results.books)

      dispatch({ type: GET_BOOKS, payload: data.results.books })
    } catch (error) {
      setError(error)
    }
  };
  
  const setBooksRecords = (recordsNumber: number) => {
    dispatch({ type: SET_BOOKS_RECORDS, payload: recordsNumber })
  };
  
  const setGenresRecords = (recordsNumber: number) => {
    dispatch({ type: SET_GENRES_RECORDS, payload: recordsNumber })
  };
  
  
  return (
    <BooksContext.Provider value={{
      ...state,
      getGenres, getBooks,
      setGenresRecords, setBooksRecords,
    }}>
      {children}
    </BooksContext.Provider>
  )
};


export {
  BooksState
}
