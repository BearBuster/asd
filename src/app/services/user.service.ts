import { Injectable } from '@angular/core';
import {IUserInfo} from "../interfaces/UserInfo";
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private router: Router, private http: HttpClient) { }

  getUserInfo(userId: number = 0):IUserInfo {
    // if(!userId){
    //   userId = localStorage.key(Number('userId'))
    // }
    return {
      username: 'BearBuster',
      email: 'frunze.dimka@gmail.com',
      firstName: 'Dumitru',
      lastName: 'Frunza',
      address: 'Podul Inalt 12/1',
      city: 'Chisinau',
      country: 'Moldova',
      phone: '069395194',
      about: 'I am managing this  company   and I am   the company administrator  of this company and the company  that owns'
    }
  }

  updateUserInfo(newUserInfo: IUserInfo) {

  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('userId');
  }

  login(): Observable<number | null> {
    return this.http.get<number | null>("my.api");
  }
}



