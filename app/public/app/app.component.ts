import { Component, OnInit } from '@angular/core';
import { AccountsService } from './accounts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

  constructor(public accountsService: AccountsService) {}

  public ngOnInit(): void {
    console.log(this.accountsService);
    // this.http.get('users').subscribe({
    //   next: response => {
    //     console.log(response);
    //   }
    // });
    this.accountsService.$accounts.subscribe({
      next: accounts => {
        console.log('Update this accounts: ', accounts);
      }
    });

    this.accountsService.update();
  }

}
