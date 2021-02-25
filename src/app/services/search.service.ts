import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  private baseUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) {
    
   }

  getFiles(): Observable<any> {
    //return this.http.get(`${this.baseUrl}/files`);
    const filerec =[
      {name:"test1" ,size:"232"},
      {name:"test2" ,size:"1232"},
      {name:"test3" , size:"3232"},
    ]
    return  of(filerec)
  }

  getFile(){
    return this.http.get('/assets/test.txt')  
  }
}
