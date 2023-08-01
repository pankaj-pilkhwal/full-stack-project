import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, ObservedValueOf } from 'rxjs';
import { Employee } from '../employee';
import { JsonPipe } from '@angular/common';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private baseURL: string = "http://localhost:8080/api/v1/employees"
  constructor(private httpClient: HttpClient) {

  } 

  getEmployeesList(): Observable<Employee[]> {
    return this.httpClient.get<Employee[]>(`${this.baseURL}`)
  }

  addEmployee(employee: Employee): Observable<Object> {
    return this.httpClient.post(`${this.baseURL}`,employee)
  }

}
