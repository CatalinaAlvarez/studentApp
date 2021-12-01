package com.sofka.studentsApp.backend.controllers;

import com.sofka.studentsApp.backend.models.Level;
import com.sofka.studentsApp.backend.repositories.LevelRepository;
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
    private LevelRepository levelRepository;

    @GetMapping("/levels")
    public List<Level> getAllLevels(){
        return levelRepository.findAll();
    }

    @GetMapping("/levels/{id}")
    public Level getSingleLevel(@PathVariable Long id){
        return levelRepository.findById(id).get();
    }


    @PostMapping("/levels")
    public Level saveLevelDetails(@RequestBody Level level) {
        return levelRepository.save(level);
    }

    @PutMapping("/levels")
    public Level updateLevelDetails(@RequestBody Level level){
        return levelRepository.save(level);
    }

    @DeleteMapping("/levels/{id}")
    public ResponseEntity<HttpStatus> deleteLevelById(@PathVariable Long id){
        levelRepository.deleteById(id);
        return new ResponseEntity<HttpStatus>(HttpStatus.NO_CONTENT);
    }

}
