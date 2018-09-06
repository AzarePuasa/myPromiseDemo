import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css']
})

export class MainContentComponent implements OnInit {

  private results = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  private search(term) {
    console.log(term);
    this.http.get(`https://swapi.co/api/people/?search=${term}`).toPromise()
    .then((data: any) => {
      /* tslint:disable:no-console */
      console.time('request-length');
      console.log(data);
      console.timeEnd('request-length');
      this.results = data.results;
      console.log("result type:", typeof(this.results))
    });
  }

}
