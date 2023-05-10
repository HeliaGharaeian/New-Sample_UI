import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WebApiService } from './web-api.service';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/models/UserModel';
import { enviroment } from 'src/enviroments/enviroment'



@Injectable({
  providedIn: 'root'
})
export class HttpProviderService {
  constructor(private http: HttpClient) { }

  public GetUsers() : Observable<User[]>{
    return this.http.get<User[]>(
      `${enviroment.apiurl}/${"Home/GetUsers"}`);
  }
  public GetUsersById(userId:number) : Observable<User>{
    return this.http.get<User>(
      `${enviroment.apiurl}/${"Home/GetUserById/"+userId}`);
  }
  public AddUser(model :User) : Observable<any>{
    return this.http.post<any>(
      `${enviroment.apiurl}/${"Home/AddUser"}`, model);
  } 
  public UpdateUser(user :User) : Observable<User[]>{
    return this.http.put<User[]>(
      `${enviroment.apiurl}/${"Home/UpdateUser"}`, user);
  }

  public DeleteUser(model:User) : Observable<any>{
    return this.http.post<any>(
      `${enviroment.apiurl}/${"Home/DeleteUser"}`,model);
  }
}                          