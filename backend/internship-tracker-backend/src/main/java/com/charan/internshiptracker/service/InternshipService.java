package com.charan.internshiptracker.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.charan.internshiptracker.entity.Internship;
import com.charan.internshiptracker.repository.InternshipRepository;

@Service
public class InternshipService {

    @Autowired
    private InternshipRepository internshipRepository;

    public Internship saveInternship(Internship internship) {
        return internshipRepository.save(internship);
    }

    public List<Internship> getAllInternships() {
        return internshipRepository.findAll();
    }

    public long getInternshipCount() {
        return internshipRepository.count();
    }
}