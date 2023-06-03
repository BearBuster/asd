import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AiServiceService {

  apiUrl = 'http://localhost:8989/rest';

  constructor(private http: HttpClient) { }

  youTubeComments(url: string): Observable<any>{
    let data = {
      "content": "Simona Halep qualified for the Australian Open quarterfinals on Sunday, February 14, after a three-set win against Iga Swiatek. In the quarterfina the Romanian will play against Serena Williams. It will be their first meeting since Halep defeating Williams in the 2019 Wimbledon final.",
      "language": "eng"
    }
    return this.http.post<any>(this.apiUrl + "/process", data);
  }
}
