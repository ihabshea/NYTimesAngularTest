import { Component, Input, OnInit, input } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AppState, getArticles, getArticlesLoaded, getArticlesLoading } from '../reducers';
import { LoadAction } from '../actions/articles';
import { Observable } from 'rxjs';
import { Article } from '../models/article';
import {MatCardModule} from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { ThumbnailPipe } from '../pipes/selectThumbnail';
import { SetBackgroundImageModule } from '../directive/setBackgroundImage.module';

// import { getLoaded } from '../reducers/articles';

@Component({
  selector: 'app-articles',
  imports: [MatCardModule, CommonModule, ThumbnailPipe, SetBackgroundImageModule],
  templateUrl: './articles.component.html',
  standalone: true,
  styleUrl: './articles.component.css'
})
export class ArticlesComponent implements OnInit {
  articles$ : Observable<Article[]>;
  loaded$ : Observable<boolean>;
  constructor(private store: Store<AppState>) {
    this.loaded$= this.store.pipe(select(getArticlesLoaded));
    this.articles$ = this.store.pipe((select(getArticles)));
  }
  ngOnInit(): void {
      this.store.dispatch(LoadAction({section: 'arts'}));
  }
}
