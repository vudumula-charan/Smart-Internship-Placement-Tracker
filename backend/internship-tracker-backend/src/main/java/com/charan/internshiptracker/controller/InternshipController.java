package com.charan.internshiptracker.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.charan.internshiptracker.entity.Internship;
import com.charan.internshiptracker.service.InternshipService;

@RestController
@RequestMapping("/api/internships")
@CrossOrigin("*")
public class InternshipController {

    @Autowired
    private InternshipService internshipService;

    @PostMapping
    public Internship addInternship(@RequestBody Internship internship) {
        return internshipService.saveInternship(internship);
    }

    @GetMapping
    public List<Internship> getAllInternships() {
        return internshipService.getAllInternships();
    }

    @GetMapping("/hello")
    public String hello() {
        return "Internship Controller Working";
    }

    @GetMapping("/count")
    public long getInternshipCount() {
        return internshipService.getInternshipCount();
    }
}
