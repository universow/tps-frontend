import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { LoginModel } from '../models/login-model';
import { request } from 'http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  
  constructor(private HttpClient: HttpClient){
  }
  getUser(nombre_usuario: string): Observable<LoginModel[]>{
    return this.HttpClient.get<LoginModel[]>('http://localhost:9000/api/v1/user/validacambio/'+ nombre_usuario).pipe(map(res => res));
  }
  savep(request: any, cod: number, password: string): Observable<any>{
    return this.HttpClient.post<any>('http://localhost:9000/api/v1/user/savep/'+ cod + '/' + password + '', request).pipe(map(res => res));
  }
  validarusu(request: any, nombre_usuario: string, password: string): Observable<any>{
    return this.HttpClient.post<any>('http://localhost:9000/api/v1/user/valida/'+ nombre_usuario + '/' + password + '', request).pipe(map(res => res));
  }

}
