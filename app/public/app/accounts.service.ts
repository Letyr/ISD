import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AccountsService {

  constructor(public http: HttpClient) {}

}
