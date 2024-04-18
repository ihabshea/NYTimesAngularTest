import { Component, OnInit } from '@angular/core';
import { environment } from '../environments/environment';
import * as articleActions from './actions/articles';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {

  ngOnInit(): void {
    
  }
  title = 'NYTTest';
}
