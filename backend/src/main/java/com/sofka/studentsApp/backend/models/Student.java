package com.sofka.studentsApp.backend.models;

import javax.persistence.*;

@Entity
@Table(name = "students")
public class Student {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String name;
    private String lastName;
    private String idLevel;
    private String email;
    private String phone;

    public Student() {
    }

    public Student(String name, String lastName, String idLevel, String email, String phone) {
        this.name = name;
        this.lastName = lastName;
        this.idLevel = idLevel;
        this.email = email;
        this.phone = phone;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getIdLevel() {
        return idLevel;
    }

    public void setIdLevel(String level) {
        this.idLevel = idLevel;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }
}