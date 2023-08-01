import { Component, OnInit } from '@angular/core';
import { Employee } from '../../employee';
import { EmployeeService } from '../../service/employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  employees: Employee[] = [
    {
      id:10,
      firstName: "Pankaj",
      lastName: "Pilkhwal",
      emailId: "pankaj@gmail.com"
    },

  ];


  constructor(private employeeService: EmployeeService ) { }



  ngOnInit(): void {
    this.employeeService.getEmployeesList().subscribe(data=> {
      this.employees = data;

      console.log(this.employees)
    }); 
  }

}
