import {
  GET_BOOKS_GENRES, GET_BOOKS, SET_BOOKS_RECORDS,
  SET_BOOKS_ERROR, SET_BOOKS_LOADING, SET_GENRES_RECORDS,
} from '../types';


const handlers = {
  [ GET_BOOKS_GENRES ]: (state, { payload }) => ({ ...state, genres: payload, booksLoading: false, booksError: false }),
  [ GET_BOOKS ]: (state, { payload }) => ({ ...state, books: payload, booksLoading: false, booksError: false }),
  [ SET_BOOKS_LOADING ]: state => ({ ...state, booksLoading: true, booksError: false }),
  [ SET_BOOKS_ERROR ]: (state, { payload }) => ({ ...state, booksLoading: false, booksError: true, booksErrorMessage: payload }),
  [ SET_BOOKS_RECORDS ]: (state, { payload }) => ({ ...state, booksRecords: payload }),
  [ SET_GENRES_RECORDS ]: (state, { payload }) => ({ ...state, genresRecords: payload }),
  DEFAULT: state => state
};


export const booksReducer = (state, action) => {
  const handler = handlers[action.type] || handlers.DEFAULT;
  return handler(state, action)
};
