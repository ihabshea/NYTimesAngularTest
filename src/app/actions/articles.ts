import {Action} from '@ngrx/store';
import {Article} from '../models/article';

export const LOAD = '[Articles] Load';
export const LOAD_SUCCESS = '[Articles] Load Success';
export const LOAD_FAILED = '[Articles] Load failed';


export class LoadAction implements Action{
    readonly type = LOAD;
}

export class LoadSuccessAction implements Action {
    readonly type = LOAD_SUCCESS;
    constructor(public payload: Article[]){ }
}

export class LoadFailedAction implements Action {
    readonly type = LOAD_FAILED;
    constructor(public payload: string){ }
}

export type Actions
= LoadAction 
| LoadSuccessAction 
| LoadFailedAction;