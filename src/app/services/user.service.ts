import { Injectable } from '@angular/core';
import {IUserInfo} from "../interfaces/UserInfo";
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiUrl = 'http://localhost:8080/'

  constructor(private router: Router, private http: HttpClient) { }

  getUserInfo(userId: number = 0):Observable<IUserInfo> {
    return this.http.get<IUserInfo>(this.apiUrl + 'api/users/' + userId);
    // return {
    //   username: 'BearBuster',
    //   email: 'frunze.dimka@gmail.com',
    //   firstName: 'Dumitru',
    //   lastName: 'Frunza',
    //   address: 'Podul Inalt 12/1',
    //   city: 'Chisinau',
    //   country: 'Moldova',
    //   phone: '069395194',
    //   about: 'I am managing this  company   and I am   the company administrator  of this company and the company  that owns'
    // }
  }

  updateUserInfo(newUserInfo: IUserInfo): Observable<IUserInfo> {
    return this.http.put<IUserInfo>(this.apiUrl + 'api/users/' + localStorage.getItem('userId'), newUserInfo)
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('userId');
  }

  login(name: string): Observable<any> {
    return this.http.get<any>(this.apiUrl + 'api/users/search?name=' + name);
  }

  getUsers(): Observable<IUserInfo[]>{
    return this.http.get<IUserInfo[]>(this.apiUrl + 'api/users');
  }

  logOut() {
    localStorage.clear();
    this.router.navigate(['login'])
  }
}



