package com.charan.internshiptracker.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.charan.internshiptracker.entity.Internship;

public interface InternshipRepository extends JpaRepository<Internship, Long> {
}