package com.sofka.studentsApp.backend.controllers;

import com.sofka.studentsApp.backend.models.Student;
import com.sofka.studentsApp.backend.repositories.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/")
@CrossOrigin(origins = "http://localhost:3000")
public class StudentController {

    @Autowired
    private StudentRepository repository;

    @GetMapping("/students")
    public List<Student> getAllStudents(){
        return repository.findAll();
    }

}
