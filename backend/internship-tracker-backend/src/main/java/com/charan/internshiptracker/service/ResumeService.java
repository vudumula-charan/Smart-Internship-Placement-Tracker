package com.charan.internshiptracker.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.charan.internshiptracker.entity.Resume;
import com.charan.internshiptracker.repository.ResumeRepository;

@Service
public class ResumeService {

    @Autowired
    private ResumeRepository resumeRepository;

    public Resume saveResume(Resume resume) {
        return resumeRepository.save(resume);
    }
    public long getResumeCount() {
    return resumeRepository.count();
    }
}