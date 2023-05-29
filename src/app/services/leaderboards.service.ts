import { Injectable } from '@angular/core';
import {ILeaderboardsUser} from "../interfaces/ILeaderboardUser";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

export interface LeaderboardRequest {
  id: number,
  userId: number,
  recycleType: number,
  amount: number,
}

export enum recycleType {
  Glass = 1,
  Iron = 2,
  Tires = 3,
  Electro = 4,
  Banners = 5,
  Clothes = 6,
  Oil = 7
}

@Injectable({
  providedIn: 'root'
})

export class LeaderboardsService {

  apiUrl = 'http://localhost:8080/';

  data: ILeaderboardsUser[] = [
    { name: 'John', points: 200, type: 'Iron' },
    { name: 'Jane', points: 100, type: 'Clothes' },
    { name: 'Jim', points: 300, type: 'Tires' },
    { name: 'Jenny', points: 150, type: 'Electro' },
    { name: 'Jack', points: 250, type: 'Banners' },
    { name: 'Jeff', points: 175, type: 'Oil' },
    { name: 'Jill', points: 125, type: 'Iron' },
    { name: 'Jerry', points: 275, type: 'Tires' },
    { name: 'Janet', points: 225, type: 'Banners' },
    { name: 'Jasmine', points: 275, type: 'Clothes' },
    { name: 'Jared', points: 75, type: 'Oil' },
    { name: 'Joan', points: 300, type: 'Iron' },
    { name: 'Jace', points: 200, type: 'Tires' },
    { name: 'Jules', points: 225, type: 'Banners' },
    { name: 'Jaxon', points: 150, type: 'Electro' },
    { name: 'Jamie', points: 250, type: 'Clothes' },
    { name: 'Judd', points: 100, type: 'Oil' },
    { name: 'Josie', points: 175, type: 'Iron' },
    { name: 'Joaquin', points: 275, type: 'Tires' },
    { name: 'Jerome', points: 225, type: 'Banners' },
    { name: 'Joey', points: 275, type: 'Clothes' },
    { name: 'Jasmine', points: 75, type: 'Oil' },
    { name: 'Jenny', points: 300, type: 'Iron' },
    { name: 'Joel', points: 200, type: 'Tires' },
    { name: 'Jenny', points: 225, type: 'Banners' },
    { name: 'Javier', points: 150, type: 'Electro' },
    { name: 'Jana', points: 250, type: 'Clothes' },
    { name: 'Jordan', points: 100, type: 'Oil' },
    { name: 'Jared', points: 175, type: 'Iron' },
    { name: 'Janine', points: 275, type: 'Tires' },
    { name: 'Julie', points: 225, type: 'Banners' },
    { name: 'Jasper', points: 275, type: 'Clothes' },
    { name: 'Jay', points: 75, type: 'Oil' },
    { name: 'Jake', points: 300, type: 'Iron' },
    { name: 'Jen', points: 200, type: 'Tires' },
    { name: 'Jenny', points: 225, type: 'Banners' },
    { name: 'Jaxon', points: 150, type: 'Electro' },
    { name: 'Alice', points: 150, type: 'Glass' },
    { name: 'Bob', points: 200, type: 'Glass' },
    { name: 'Charlie', points: 75, type: 'Glass' },
    { name: 'David', points: 300, type: 'Glass' },
    { name: 'Emily', points: 225, type: 'Glass' },
    { name: 'Frank', points: 100, type: 'Glass' },
    { name: 'Grace', points: 175, type: 'Glass' },
    { name: 'Henry', points: 250, type: 'Glass' },
    { name: 'Isaac', points: 125, type: 'Glass' },
    { name: 'Julia', points: 275, type: 'Glass' }
  ]

  constructor(private http: HttpClient) { }

  getLeaderboardsByTypee(type: string, datas: {name: string | undefined, points: number, type: string}[]): {name: string | undefined, points: number, type: string}[]{
    return datas.filter((data) => data.type === type)
  }

  getLeaderboardsByType(type: string): ILeaderboardsUser[]{
    return this.data.filter((data: ILeaderboardsUser) => data.type === type)
  }

  getData(): Observable<LeaderboardRequest[]> {
    return this.http.get<LeaderboardRequest[]>(this.apiUrl + "/api/statistics");
  }
}
