import { JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/employee';
import { EmployeeService } from 'src/app/service/employee.service';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  employee: Employee = new Employee();
  constructor(
    private employeeService: EmployeeService,
    private router: Router) { }
  

  onSubmit() {
    // this.employeeService.addEmployee(employee).subscribe
    if(this.employee.firstName?.trim() == "" || this.employee.lastName?.trim() == "" || this.employee.emailId?.trim() == "") {
      window.alert("Please Fill all the required fields")
    } else {
      this.saveEmployee();
      alert('added a new employee to the table. details are as follows: '+JSON.stringify(this.employee))

    }
  }

  saveEmployee() {
    this.employeeService.addEmployee(this.employee).subscribe(data => {
      console.log(data)
    },error=> console.log(error));
  }

  goToEmployeeList() {
    this.router.navigate(["/employees"])
  }

  resetAll() {
    this.employee.firstName = "";
    this.employee.lastName = "";
    this.employee.emailId = "";
  }



  ngOnInit(): void {
    
  }

}
