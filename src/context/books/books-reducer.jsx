import {
  GET_BOOKS_GENRES, GET_BOOKS_GENRE,
  SET_BOOKS_ERROR, SET_BOOKS_LOADING,
} from '../types';


const handlers = {
  [ GET_BOOKS_GENRES ]: (state, { payload }) => ({ ...state, genres: payload, loading: false, error: false }),
  [ GET_BOOKS_GENRE ]: (state, { payload }) => ({ ...state, genre: payload, loading: false, error: false }),
  [ SET_BOOKS_LOADING ]: state => ({ ...state, loading: true, error: false }),
  [ SET_BOOKS_ERROR ]: (state, { payload }) => ({ ...state, loading: false, error: true, errorMessage: payload }),
  DEFAULT: state => state
};


export const booksReducer = (state, action) => {
  const handler = handlers[action.type] || handlers.DEFAULT;
  return handler(state, action)
};
