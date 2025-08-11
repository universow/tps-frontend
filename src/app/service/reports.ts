import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ReportsModel } from '../models/reports-models';

@Injectable({
  providedIn: 'root'
})
export class ReportsService {
     constructor(private HttpClient: HttpClient){
  
}

  getReports(): Observable<ReportsModel[]>{
    return this.HttpClient.get<ReportsModel[]>('http://localhost:9000/api/v1/report'+ '/List').pipe(map(res => res));
  }
}