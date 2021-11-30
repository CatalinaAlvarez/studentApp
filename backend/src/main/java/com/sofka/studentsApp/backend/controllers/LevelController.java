package com.sofka.studentsApp.backend.controllers;

import com.sofka.studentsApp.backend.models.Level;
import com.sofka.studentsApp.backend.models.Student;
import com.sofka.studentsApp.backend.repositories.LevelRepository;
import com.sofka.studentsApp.backend.repositories.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class LevelController {

    @Autowired
    private LevelRepository levelRepository;

    @GetMapping("/levels")
    public List<Level> getAllLevels(){
        return levelRepository.findAll();
    }

}
