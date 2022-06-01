import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  url = 'https://script.google.com/macros/s/AKfycbyD84cmP1oiyGHg42yNN87ImwIzyOUWj1iyuMueXWFngyA--wEwMD1XwwAXXCFIHzTv/exec';
  constructor(private http: HttpClient) { }
  
  sendMessage(data:any){
    return this.http.post(this.url, data);
  }
}
