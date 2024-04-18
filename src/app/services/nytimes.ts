import {map} from 'rxjs';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Article } from '../models/article';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class NYTimesService {
    private API_PATH = 'https://api.nytimes.com/svc';
    constructor(private http: HttpClient){}
    getTopStories(section: string): Observable<Article[]>{
        return this.http.get<any>(`${this.API_PATH}/topstories/v2/${section}.json`).pipe(
            map(result => result.results)
        );
    }
}