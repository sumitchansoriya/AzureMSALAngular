import { Component } from '@angular/core';
import { Employee } from './services/employee';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AzureMSALAngular';

  employees: Employee[];
  errorMessage: any;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getEmployees().subscribe(
      values => {
        this.employees = values;
      },
      error => this.errorMessage = <any>error
    );
  }

  getUser(){
    this.dataService.getCurrentUserInfo();
  }

  logout(){
    this.dataService.logout();
  }
}
