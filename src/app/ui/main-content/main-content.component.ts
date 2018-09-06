import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { debounceTime } from 'rxjs/operators';
import { FormControl } from '@angular/forms';
import { distinctUntilChanged} from 'rxjs/operators'

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css']
})

export class MainContentComponent implements OnInit {

  private results = [];
  private term = new FormControl();

  constructor(private http: HttpClient) { }

  ngOnInit() {

    let debounce = this.term.valueChanges.pipe(debounceTime(400),distinctUntilChanged());
    
    debounce.subscribe(searchTerm => {
      this.http.get(`https://swapi.co/api/people/?search=${searchTerm}`)
      .subscribe((data: any) => {
        /* tslint:disable:no-console */
        console.time('request-length');
        console.log(data);
        console.timeEnd('request-length');
        this.results = data.results;
      });
    });
  }
}
