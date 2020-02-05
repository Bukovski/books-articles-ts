import React, { useReducer } from 'react';
import { BooksContext } from "./books-context";
import { booksReducer } from "./books-reducer";
import { GET_BOOKS_GENRES, SET_BOOKS_LOADING } from '../types'


const BOOKS_SECRET_KEY = process.env.REACT_APP_BOOKS_SECRET_KEY;


const BooksState = ({ children }) => {
  const initialState = {
    genres: [],
    loading: false
  };
  
  const [ state, dispatch ] = useReducer(booksReducer, initialState);
  
  const setLoading = () => dispatch({ type: SET_BOOKS_LOADING });
  
  const getGenres = async value => {
    setLoading();
    
    const response = await fetch(
      `https://api.nytimes.com/svc/books/v3/lists/names.json?api-key=${ BOOKS_SECRET_KEY }`
    );
    const data = await response.json();
  
    console.log(data)
    
    dispatch({
      type: GET_BOOKS_GENRES,
      payload: data.results
    })
  };
  
  const { genres, loading } = state;
  
  return (
    <BooksContext.Provider value={{
      genres, loading,
      setLoading, getGenres
    }}>
      {children}
    </BooksContext.Provider>
  )
};


export {
  BooksState
}
