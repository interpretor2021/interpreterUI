import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  //private baseUrl = 'http://localhost:8080';
  private baseUrl = 'http://localhost:7015/interpretor/';

  constructor(private http: HttpClient) {
    
   }

  getFiles(): Observable<any> {
    //return this.http.get(`${this.baseUrl}/files`);
    const filerec =[
      {name:"test1" ,size:"232"},
      {name:"test2" ,size:"1232"},
      {name:"test3" , size:"3232"},
    ]
    //return  of(filerec)
    return this.http.get(`${this.baseUrl}filelistallcloud`)
    
  }

  getFile(){
    //return this.http.get('/assets/test.txt') 
    return this.http.get(`${this.baseUrl}`)
  }

  getFilePreview(fileName:string){
    console.log('sdfsdfsd' , fileName)
    return this.http.get(`${this.baseUrl}extracttext?file=` + fileName)
  }

  searchtext(searchText:string, type:string){
    console.log('sdfsdfsd' , searchText)
    return this.http.get(`${this.baseUrl}searchtext?text=` + searchText + '&type=' + type)
  }
}
