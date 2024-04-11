import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ChatServiceService {

  constructor(private readonly http: HttpClient) { }

  // sendMessage(message: string) {
  //   return this.http.post<any>('YOUR_BACKEND_ENDPOINT', { message });
  // }
  getdata() {
    return this.http.get<any>('http://localhost:8000/getfiledata');
  }
}
