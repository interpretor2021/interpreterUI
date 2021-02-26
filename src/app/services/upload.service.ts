import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpErrorResponse, HttpEventType, HttpRequest } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UploadService {
  //private baseUrl = 'http://localhost:8080/interpretor/';  
  private baseUrl = 'https://1-dot-hack-interpreters.el.r.appspot.com/interpretor/';

  
  constructor(private http: HttpClient) {

  }

  upload(file: File): Observable<any> {
  // upload(file: File): Observable<HttpEvent<any>> {
    const formData: FormData = new FormData();

    formData.append('file', file);

    const req = new HttpRequest('POST', `${this.baseUrl}uploadFileCloud/`, formData, {
      reportProgress: true,
      responseType: 'json'
    });

    //return this.http.request(req);

    
    const formdata: FormData = new FormData();  
    
    formdata.append('file', file);  
   
    return this.http.post(`${this.baseUrl}uploadFileCloud/` , formdata);  
  }

  getFiles(): Observable<any> {
    return this.http.get(`${this.baseUrl}files/`);
  }
  
 
}
