package com.sofka.studentsApp.backend.controllers;

import com.sofka.studentsApp.backend.models.Student;
import com.sofka.studentsApp.backend.repositories.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

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

    @PostMapping("/students")
    public Student saveStudentDetails(@RequestBody Student student){
        return repository.save(student);
    }


    @GetMapping("/students/{id}")
    public Student getSingleStudent(@PathVariable Long id){
        return repository.findById(id).get();
    }

    @PutMapping("/students")
    public Student updateStudentDetails(@RequestBody Student student){
        return repository.save(student);
    }

}
