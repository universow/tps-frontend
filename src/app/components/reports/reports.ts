import { Component, OnInit } from '@angular/core';
import { ReportsModel } from '../../models/reports-models';
import { ReportsService } from '../../service/reports';


@Component({
  selector: 'app-reports',
  standalone: false,
  templateUrl: './reports.html',
  styleUrl: './reports.sass'
})
export class Reports implements OnInit {

    listReports: ReportsModel [] = [];

      constructor(private reportsService: ReportsService) { }
    
      ngOnInit(): void {
        this.list();
      }
  
  list(){
    this.reportsService.getReports().subscribe(resp=>{
      if(resp){
        this.listReports = resp;
      }
    });
  }
         
}
