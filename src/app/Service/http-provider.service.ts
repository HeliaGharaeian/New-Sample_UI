import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WebApiService } from './web-api.service';

var apiUrl = "http://localhost:8100/";

var httpLink = {
  GetUsers: apiUrl + "/api/user/GetUsers",
  DeleteUser: apiUrl + "/api/user/DeleteUser",
  GetUserById: apiUrl + "/api/user/GetUserById",
}

@Injectable({
  providedIn: 'root'
})
export class HttpProviderService {

  constructor(private webApiService: WebApiService) { }

  public GetUsers(): Observable<any> {
    return this.webApiService.get(httpLink.GetUsers);
  }
  public DeleteUser(model: any): Observable<any> {
    return this.webApiService.post(httpLink.DeleteUser + '?UserId=' + model, "");
  }
  public GetUserById(model: any): Observable<any> {
    return this.webApiService.get(httpLink.GetUserById + '?UserId=' + model);
  }
 }
