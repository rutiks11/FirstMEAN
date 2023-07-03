import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})

export class MarvellousService
{
  // Dependency Injection
  constructor(private http:HttpClient ) 
  {
  }

  // Connection of angular to Node+express server
  getBatches()
  {
    return this.http.get("http://localhost:5100/getBatches");
  }
}