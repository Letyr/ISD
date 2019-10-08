import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

  constructor(public http: HttpClient) {}

  public ngOnInit(): void {
    this.http.get('users').subscribe({
      next: response => {
        console.log(response);
      }
    });
  }

}
