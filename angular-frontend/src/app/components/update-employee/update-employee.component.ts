import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/app/employee';
import { EmployeeService } from 'src/app/service/employee.service';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {
  employee: Employee = new Employee;
  id: number = -1;

  constructor(
    private employeeService: EmployeeService,
    private route: ActivatedRoute, private router: Router) { }


  onSubmit() {
    this.employeeService.updateEmployee(this.id, this.employee).subscribe(data =>  {
    this.goToEmployeeList();
    })
  }

  goToEmployeeList() {
    this.router.navigate(["/employees"])
  }
  ngOnInit(): void {
    this.id = this.route.snapshot.params["id"];

    this.employeeService.getEmpmloyeeById(this.id).subscribe(data => {
      this.employee = data;
    }, error => console.log(error));
  }

}
