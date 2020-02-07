import React, { useReducer } from 'react';
import { ArticleContext } from "./articles-context";
import { articlesReducer } from "./articles-reducer";
import {
  GET_ARTS, GET_SCIENCE,
  SET_ARTICLES_ERROR, SET_ARTICLES_LOADING
} from '../types';


const BOOKS_SECRET_KEY = process.env.REACT_APP_SECRET_KEY;
const REACT_APP_BASIC_SERVER = process.env.REACT_APP_BASIC_SERVER;


const ArticlesState = ({ children }) => {
  const initialState = {
    arts: [],
    science: [],
    articleLoading: false,
    articleError: false,
    articleErrorMessage: ""
  };
  
  const [ state, dispatch ] = useReducer(articlesReducer, initialState);
  
  const setLoading = () => dispatch({ type: SET_ARTICLES_LOADING });
  const setError = (message) => dispatch({ type: SET_ARTICLES_ERROR, payload: message });
  
  const getArts = async () => {
    setLoading();
    
    try {
      const response = await fetch(
        `${ REACT_APP_BASIC_SERVER }topstories/v2/arts.json?api-key=${ BOOKS_SECRET_KEY }`
      );
      const data = await response.json();
      
      if (data.status !== "OK") return setError("Arts: Server Error");
  
      console.log(data)
      
      dispatch({ type: GET_ARTS, payload: data.results })
    } catch (error) {
      setError(error)
    }
  };
  
  const getScience = async () => {
    setLoading();
    
    try {
      const response = await fetch(
        `${ REACT_APP_BASIC_SERVER }topstories/v2/science.json?api-key=${ BOOKS_SECRET_KEY }`
      );
      const data = await response.json();
      
      if (data.status !== "OK") return setError("Arts: Server Error");
      
      console.log(data)
      
      dispatch({ type: GET_SCIENCE, payload: data.results })
    } catch (error) {
      setError(error)
    }
  };
  
  
  return (
    <ArticleContext.Provider value={{
      ...state,
      getArts, getScience
    }}>
      {children}
    </ArticleContext.Provider>
  )
};


export {
  ArticlesState
}
