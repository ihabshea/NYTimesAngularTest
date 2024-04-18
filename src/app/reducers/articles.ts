import { createFeatureSelector, createReducer, createSelector, on } from '@ngrx/store';
import * as articles from '../actions/articles';
import { Article } from '../models/article';

export interface ArticleState {
    loaded: boolean;
    loading: boolean;
    error?: String;
    articles: Article[];
}

export const initialState: ArticleState = {
    loaded: false,
    loading: true,
    articles: []
}

export const ArticleReducer = createReducer(
    initialState,
    on(articles.LoadAction, (state: ArticleState) => 
         ({...state, 
            loading: true
        })
    ),
    on(articles.LoadSuccessAction, (state, { articles }) => ({ ...state, loading: false, loaded: true, articles })),
    on(articles.LoadFailedAction, (state, { error }) => ({ ...state, loading: false, loaded: true, articles: [], error })),
)

export const selectFeature = createFeatureSelector<ArticleState>("ArticleSelector");
export const selectFeatureLoaded = createSelector(selectFeature, (state: ArticleState) => state.loaded);
export const selectFeatureLoading = createSelector(selectFeature, (state: ArticleState) => state.loading);
export const selectFeatureArticles = createSelector(selectFeature, (state: ArticleState) => state.articles);


export const selectLoaded = (state: ArticleState) => state.loaded;
export const selectLoading = (state: ArticleState) => state.loading; 
export const selectError = (state: ArticleState) => state.error; 
export const selectArticles = (state: ArticleState) => state.articles; 

