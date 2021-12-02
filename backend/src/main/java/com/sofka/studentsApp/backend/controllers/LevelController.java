package com.sofka.studentsApp.backend.controllers;

import com.sofka.studentsApp.backend.models.Level;
import com.sofka.studentsApp.backend.models.Student;
import com.sofka.studentsApp.backend.repositories.LevelRepository;
import com.sofka.studentsApp.backend.repositories.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/")
@CrossOrigin(origins = "http://localhost:3000")
public class LevelController {

    @Autowired
    private LevelRepository repository;

    @GetMapping("/levels")
    public List<Level> getAllLevels(){
        return repository.findAll();
    }

    @PostMapping("/levels")
    public Level saveLevelDetails(@RequestBody Level level){
        return repository.save(level);
    }


    @GetMapping("/levels/{id}")
    public Level getSingleLevel(@PathVariable Integer id){
        return repository.findById(id).get();
    }

    @PutMapping("/levels")
    public Level updateLevelDetails(@RequestBody Level level){
        return repository.save(level);
    }

    @DeleteMapping("/levels/{id}")
    public ResponseEntity<HttpStatus> deleteLevelById(@PathVariable Integer id){
        repository.deleteById(id);
        return new ResponseEntity<HttpStatus>(HttpStatus.NO_CONTENT);
    }
}
