import React, { useReducer } from 'react';
import { BooksContext } from "./books-context";
import { booksReducer } from "./books-reducer";
import {
  GET_BOOKS_GENRES, GET_BOOKS_GENRE,
  SET_BOOKS_ERROR, SET_BOOKS_LOADING,
} from '../types';

const BOOKS_SECRET_KEY = process.env.REACT_APP_BOOKS_SECRET_KEY;


const BooksState = ({ children }) => {
  const initialState = {
    genres: [],
    genre: [],
    loading: false,
    error: false,
    errorMessage: ""
  };
  
  const [ state, dispatch ] = useReducer(booksReducer, initialState);
  
  const setLoading = () => dispatch({ type: SET_BOOKS_LOADING });
  const setError = (message) => dispatch({ type: SET_BOOKS_ERROR, payload: message });
  
  const getGenres = async () => {
    setLoading();
    
    try {
      const response = await fetch(
        `https://api.nytimes.com/svc/books/v3/lists/names.json?api-key=${ BOOKS_SECRET_KEY }`
      );
      const data = await response.json();
      
      if (data.status !== "OK") return setError("Genres: Server Error");
  
      dispatch({ type: GET_BOOKS_GENRES, payload: data.results })
    } catch (error) {
      setError(error)
    }
  };
  
  const getGenre = async (genreName) => {
    setLoading();
    
    try {
      const response = await fetch(
      `https://api.nytimes.com/svc/books/v3/lists.json?list-name=${ genreName }&api-key=${ BOOKS_SECRET_KEY }`
      );
      const data = await response.json();
      
      if (data.status !== "OK") return setError("Genre: Server Error");
      
      dispatch({ type: GET_BOOKS_GENRE, payload: data.results })
    } catch (error) {
      setError(error)
    }
  };
  
  const { genres, genre, loading, error } = state;
  
  return (
    <BooksContext.Provider value={{
      genres, genre, loading, error,
      setLoading, getGenres, getGenre
    }}>
      {children}
    </BooksContext.Provider>
  )
};


export {
  BooksState
}
