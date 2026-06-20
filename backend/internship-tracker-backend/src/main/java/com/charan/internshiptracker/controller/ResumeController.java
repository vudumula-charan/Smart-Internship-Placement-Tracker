package com.charan.internshiptracker.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.charan.internshiptracker.entity.Resume;
import com.charan.internshiptracker.service.ResumeService;

@RestController
@RequestMapping("/api/resumes")
@CrossOrigin("*")
public class ResumeController {

    @Autowired
    private ResumeService resumeService;

    @PostMapping
    public Resume uploadResume(@RequestBody Resume resume) {
        return resumeService.saveResume(resume);
    }
}