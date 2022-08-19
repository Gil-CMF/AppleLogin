import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AppleserviceService {


  constructor(private http: HttpClient) {}
    client_id:any;
    redirect_uri:any;
    response_type:any;
    scope:any;

    req:any = () =>{
    return this.http.get<any>(`appleid.apple.com/auth/authorize/${this.client_id}/${this.redirect_uri}/${this.response_type}`)
    }


}
