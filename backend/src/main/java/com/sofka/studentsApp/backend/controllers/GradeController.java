package com.sofka.studentsApp.backend.controllers;

import com.sofka.studentsApp.backend.models.Grade;
import com.sofka.studentsApp.backend.repositories.GradeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/")
@CrossOrigin(origins = "http://localhost:3000")
public class GradeController {

    @Autowired
    private GradeRepository repository;

    @GetMapping("/grades")
    public List<Grade> getAllLevels(){
        return repository.findAll();
    }

    @PostMapping("/grades")
    public Grade saveGradeDetails(@RequestBody Grade grade){
        return repository.save(grade);
    }


    @GetMapping("/grades/{id}")
    public Grade getSingleGrade(@PathVariable Integer id){
        return repository.findById(id).get();
    }

    @PutMapping("/grades")
    public Grade updateGradeDetails(@RequestBody Grade grade){
        return repository.save(grade);
    }

    @DeleteMapping("/grades/{id}")
    public ResponseEntity<HttpStatus> deleteGradeById(@PathVariable Integer id){
        repository.deleteById(id);
        return new ResponseEntity<HttpStatus>(HttpStatus.NO_CONTENT);
    }
}
