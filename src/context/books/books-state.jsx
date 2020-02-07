import React, { useReducer } from 'react';
import { BooksContext } from "./books-context";
import { booksReducer } from "./books-reducer";
import {
  GET_BOOKS_GENRES, GET_BOOKS, SET_BOOKS_RECORDS,
  SET_BOOKS_ERROR, SET_BOOKS_LOADING, SET_GENRES_RECORDS
} from '../types';


const BOOKS_SECRET_KEY = process.env.REACT_APP_SECRET_KEY;
const REACT_APP_BASIC_SERVER = process.env.REACT_APP_BASIC_SERVER;


const BooksState = ({ children }) => {
  const initialState = {
    genres: [],
    books: [],
    booksRecords: 6,
    genresRecords: 10,
    booksLoading: false,
    booksError: false,
    booksErrorMessage: ""
  };
  
  const [ state, dispatch ] = useReducer(booksReducer, initialState);
  
  const setLoading = () => dispatch({ type: SET_BOOKS_LOADING });
  const setError = (message) => dispatch({ type: SET_BOOKS_ERROR, payload: message });
  
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
  
  const getBooks = async (genreName) => {
    setLoading();
    
    try {
      const response = await fetch(
        `${ REACT_APP_BASIC_SERVER }books/v3/lists/${ genreName }.json?api-key=${ BOOKS_SECRET_KEY }`
      );
      const data = await response.json();
      
      if (data.status !== "OK") return setError("Books: Server Error");
  
      dispatch({ type: GET_BOOKS, payload: data.results.books })
    } catch (error) {
      setError(error)
    }
  };
  
  const setBooksRecords = (recordsNumber) => {
    dispatch({ type: SET_BOOKS_RECORDS, payload: recordsNumber })
  };
  
  const setGenresRecords = (recordsNumber) => {
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
