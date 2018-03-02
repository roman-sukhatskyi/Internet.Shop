import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  apiValues: string[] = [];

  title = 'app';

  constructor(private _http: HttpClient) { }
  
  ngOnInit() {
    this._http.get('/api/values').subscribe((values: string[]) => {
      this.apiValues = values;
    });
  }

}
