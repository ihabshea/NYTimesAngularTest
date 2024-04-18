import { createSelector } from 'reselect';
import * as fromRouter from '@ngrx/router-store';
import * as fromArticles from './articles';
import { environment } from '../../environments/environment';
import { combineReducers, createFeatureSelector, select } from '@ngrx/store';

export interface AppState {
    articleState: fromArticles.ArticleState;
}

const initialState: AppState = {
    articleState: fromArticles.initialState
}

const reducers = {
    articleState: fromArticles.ArticleReducer,
    router: fromRouter.routerReducer
}
// const developmentReducer = fromArticles.reducer;
export const developmentReducer = combineReducers(reducers, initialState);

// console.log('developmentReducer', developmentReducer);

export const selectFeature = createFeatureSelector<AppState>(
    "AppState"
  );
  export const getArticlesLoading = createSelector(
  selectFeature,
  (state: AppState) => {
    console.log("===>", state);
    return state.articleState.loading;
  }
);
export const getArticlesLoaded = createSelector(
    selectFeature,
    (state: AppState) => {
      console.log("===>", state);
      return state.articleState.loaded;
    }
  );
  export const getArticles = createSelector(
    selectFeature,
    (state: AppState) => {
      console.log("===>", state);
      return state.articleState.articles;
    }
  );
