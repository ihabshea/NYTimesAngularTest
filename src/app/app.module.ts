import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/layout/header.component';
import { FooterComponent } from './core/layout/footer.component';
import { NYTimesService } from './services/nytimes';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { authInterceptor } from './auth.interceptor';
import { ArticlesComponent } from './articles/articles.component';
import { StoreModule } from '@ngrx/store';
import * as fromReducers from './reducers';
import { EffectsModule } from '@ngrx/effects';
import { ArticleEffects } from './effects/articles';
import { ArticleReducer } from './reducers/articles';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    HeaderComponent,
    AppRoutingModule,
    ArticlesComponent,
    StoreModule.forRoot(({AppState: fromReducers.developmentReducer, articleState: ArticleReducer})),
    EffectsModule.forRoot([ArticleEffects])
  ],
  providers: [ NYTimesService, provideHttpClient(
    withInterceptors([authInterceptor])
  ) ],
  bootstrap: [AppComponent]
})
export class AppModule { }
