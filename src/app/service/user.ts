import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { UserModel } from '../models/user-model';


@Injectable({
  providedIn: 'root'
})
export class UserService {

     constructor(private HttpClient: HttpClient){

  }

  getUsers(): Observable<UserModel[]>{
    return this.HttpClient.get<UserModel[]>('http://localhost:9002/api/v1/user'+ '/List').pipe(map(res => res));
  }
  saveUser(request: any): Observable<any>{
    return this.HttpClient.post<any>('http://localhost:9002/api/v1/user'+ '/save', request).pipe(map(res => res));
  }
  updateUser(request: any): Observable<any>{
    return this.HttpClient.post<any>('http://localhost:9002/api/v1/user'+ '/update', request).pipe(map(res => res));
  }
}
