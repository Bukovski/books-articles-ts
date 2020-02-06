import {
  GET_ARTS, GET_SCIENCE,
  SET_ARTICLES_ERROR, SET_ARTICLES_LOADING
} from '../types';


const handlers = {
  [ GET_ARTS ]: (state, { payload }) => ({ ...state, arts: payload, loading: false, error: false }),
  [ GET_SCIENCE ]: (state, { payload }) => ({ ...state, science: payload, loading: false, error: false }),
  [ SET_ARTICLES_LOADING ]: state => ({ ...state, loading: true, error: false }),
  [ SET_ARTICLES_ERROR ]: (state, { payload }) => ({ ...state, loading: false, error: true, errorMessage: payload }),
  DEFAULT: state => state
};


export const articlesReducer = (state, action) => {
  const handler = handlers[action.type] || handlers.DEFAULT;
  return handler(state, action)
};
