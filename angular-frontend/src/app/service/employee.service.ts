import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, ObservedValueOf } from 'rxjs';
import { Employee } from '../employee';
import { JsonPipe } from '@angular/common';
import { Router } from '@angular/router';


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
  
  getEmpmloyeeById(id: number): Observable<Employee> {
    return this.httpClient.get<Employee>(`${this.baseURL}/${id}`)
  }

  updateEmployee(id: number, employee: Employee): Observable<object> {
    return this.httpClient.put(`${this.baseURL}/${id}`,employee)
  }

  deleteEmployee(id: number): Observable<object> {
    return this.httpClient.delete(`${this.baseURL}/${id}`)
  }
}
