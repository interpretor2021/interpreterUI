import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpErrorResponse, HttpEventType, HttpRequest } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UploadService {
  private baseUrl = 'http://localhost:7015/interpretor/';
  
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
   
    return this.http.post(`${this.baseUrl}uploadFile/` , formdata);  
  }

  getFiles(): Observable<any> {
    return this.http.get(`${this.baseUrl}files/`);
  }
  
 
}
