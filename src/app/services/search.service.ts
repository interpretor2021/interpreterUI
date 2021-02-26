import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  private baseUrl = 'http://localhost:8080/interpretor/';
  
  //private baseUrl = 'https://20210226t004115-dot-hack-interpreters.el.r.appspot.com/interpretor/';
  
  constructor(private http: HttpClient) { }

  getFiles(): Observable<any> {
    return this.http.get(`${this.baseUrl}filelistallcloud`)    
  }

  getFilePreview(fileName:string){    
    return this.http.get(`${this.baseUrl}extracttext?file=` + fileName)
  }

  searchtext(searchText:string, type:string){
    console.log('searchText:' , searchText)
    return this.http.get(`${this.baseUrl}searchtext?text=` + searchText + '&type=' + type)
  }
  
}
