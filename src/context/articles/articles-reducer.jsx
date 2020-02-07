import {
  GET_ARTS, GET_SCIENCE,
  SET_ARTICLES_ERROR, SET_ARTICLES_LOADING
} from '../types';


const handlers = {
  [ GET_ARTS ]: (state, { payload }) => ({ ...state, arts: payload, articleLoading: false, articleError: false }),
  [ GET_SCIENCE ]: (state, { payload }) => ({ ...state, science: payload, articleLoading: false, articleError: false }),
  [ SET_ARTICLES_LOADING ]: state => ({ ...state, articleLoading: true, articleError: false }),
  [ SET_ARTICLES_ERROR ]: (state, { payload }) => ({ ...state, articleLoading: false, articleError: true, articleErrorMessage: payload }),
  DEFAULT: state => state
};


export const articlesReducer = (state, action) => {
  const handler = handlers[action.type] || handlers.DEFAULT;
  return handler(state, action)
};
