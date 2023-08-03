package com.springboot.springbootbackend.controller;

import com.springboot.springbootbackend.exception.ResourceNotFoundException;
import com.springboot.springbootbackend.model.Employee;
import com.springboot.springbootbackend.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@RestController
@CrossOrigin
@RequestMapping("/api/v1")
public class EmployeeController {

    @Autowired
    private EmployeeRepository employeeRepository;



    // get all employees
    @GetMapping("/employees")
    @CrossOrigin
    public List<Employee> getAllEmployees() {
        return employeeRepository.findAll();
    }

    // create employee rest api
    @PostMapping("/employees")
    public Employee createEmployee(@RequestBody Employee employee) {
        return employeeRepository.save(employee);
    }

    // get employee with specified id
    @GetMapping("employees/{id}")
    @CrossOrigin
    public ResponseEntity<Employee> getEmployeeById(@PathVariable("id") long id) {
        Employee employee = employeeRepository.findById(id)
                .orElseThrow(()->new ResourceNotFoundException("Employee does not exist with id " + id));

        return ResponseEntity.ok(employee);

    }


    // update employee REST API
    @PutMapping("employees/{id}")
    public ResponseEntity<Employee> updateEmployee(@PathVariable("id") long id, @RequestBody Employee employee) {
        Employee tempEmployee = employeeRepository.findById(id).orElseThrow(()->
                new ResourceNotFoundException("Employee does not exist with id " + id));

        tempEmployee.setFirstName(employee.getFirstName());
        tempEmployee.setLastName(employee.getLastName());
        tempEmployee.setEmailId(employee.getEmailId());

        Employee updatedEmployee = employeeRepository.save(tempEmployee);

        return ResponseEntity.ok(updatedEmployee);
    }


    // delete employee
    @DeleteMapping("/employees/{id}")
    public ResponseEntity<Map<String,Boolean>> deleteEmployee(@PathVariable("id") long id) {
        Employee employee = employeeRepository.findById(id).orElseThrow(() ->
                new ResourceNotFoundException("Employee does not exist with id " + id));

        employeeRepository.delete(employee);

        Map<String, Boolean> map = new HashMap<>();
        map.put("delete", Boolean.TRUE);

        return ResponseEntity.ok(map);
    }


}
