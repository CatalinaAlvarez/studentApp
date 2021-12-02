package com.sofka.studentsApp.backend.repositories;

import com.sofka.studentsApp.backend.models.Grade;
import org.springframework.data.jpa.repository.JpaRepository;

public interface GradeRepository extends JpaRepository<Grade,Integer> {
}
