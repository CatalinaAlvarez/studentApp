package com.sofka.studentsApp.backend.repositories;

import com.sofka.studentsApp.backend.models.Teacher;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TeacherRepository extends JpaRepository<Teacher, Long> {

}
