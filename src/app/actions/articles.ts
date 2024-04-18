import {createAction, props} from '@ngrx/store';
import {Article} from '../models/article';

export const LOAD = '[Articles] Load';
export const LOAD_SUCCESS = '[Articles] Load Success';
export const LOAD_FAILED = '[Articles] Load failed';

export const LoadAction = createAction(LOAD, props<{section: string}>());
export const LoadSuccessAction = createAction(LOAD_SUCCESS, props<{articles: Article[]}>());
export const LoadFailedAction = createAction(LOAD_FAILED, props<{error: string}>());


