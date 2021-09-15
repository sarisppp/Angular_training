import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PathService {

  private baseUrl = 'http://localhost:8000/api/auth'
  constructor(private http:HttpClient) { }

  register(data:any){
    return this.http.post(`${this.baseUrl}/register`,data)
  }


  login(data:any){
    return this.http.post(`${this.baseUrl}/login`,data)
  }

}
