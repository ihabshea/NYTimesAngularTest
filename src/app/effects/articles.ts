import { Injectable } from "@angular/core";
// import 'rxjs/add/operator/map';
import {catchError, debounceTime, map, mergeMap, switchMap, takeUntil} from 'rxjs';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import * as articles from '../actions/articles';
import { NYTimesService } from "../services/nytimes";
import { of, skip } from 'rxjs';

import {Article} from '../models/article';


@Injectable()
export class ArticleEffects{
    loadArticles$ = createEffect(() =>
     this.actions$.pipe(
        ofType(articles.LoadAction),
        mergeMap(({section}) => 
            this.nytimesService.getTopStories(section).pipe(
                map(articleList => articles.LoadSuccessAction({articles: articleList})),
                catchError((error) => [articles.LoadFailedAction({error})])
            )
        ))
     );
    constructor(private actions$: Actions, private nytimesService: NYTimesService){}
}