import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { IAccount } from '../../schemas/account.interface';

@Injectable()
export class AccountsService {

  public $accounts: Subject<IAccount[]> = new Subject();

  constructor(public http: HttpClient) {
    console.log('Service');
  }

  public update() {
    this.http.get('api/account').subscribe({
      next: (accounts: IAccount[]) => {
        console.log(accounts);
        this.$accounts.next(accounts);
      }
    });
  }

}
