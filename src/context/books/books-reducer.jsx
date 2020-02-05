import { GET_BOOKS_GENRES, SET_BOOKS_LOADING } from '../types'


const handlers = {
  [ GET_BOOKS_GENRES ]: (state, {payload}) => ({ ...state, genres: payload, loading: false }),
  [ SET_BOOKS_LOADING ]: state => ({ ...state, loading: true }),
  DEFAULT: state => state
};


export const booksReducer = (state, action) => {
  const handler = handlers[action.type] || handlers.DEFAULT;
  return handler(state, action)
};
