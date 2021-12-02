package com.sofka.studentsApp.backend.controllers;

import com.sofka.studentsApp.backend.models.Teacher;
import com.sofka.studentsApp.backend.repositories.TeacherRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/")
@CrossOrigin(origins = "http://localhost:3000")
public class TeacherController {

    @Autowired
    private TeacherRepository levelRepository;

    @GetMapping("/teachers")
    public List<Teacher> getAllLevels(){
        return levelRepository.findAll();
    }

    @GetMapping("/teachers/{id}")
    public Teacher getSingleLevel(@PathVariable Long id){
        return levelRepository.findById(id).get();
    }


    @PostMapping("/teachers")
    public Teacher saveLevelDetails(@RequestBody Teacher level) {
        return levelRepository.save(level);
    }

    @PutMapping("/teachers")
    public Teacher updateLevelDetails(@RequestBody Teacher level){
        return levelRepository.save(level);
    }

    @DeleteMapping("/teachers/{id}")
    public ResponseEntity<HttpStatus> deleteLevelById(@PathVariable Long id){
        levelRepository.deleteById(id);
        return new ResponseEntity<HttpStatus>(HttpStatus.NO_CONTENT);
    }

}
