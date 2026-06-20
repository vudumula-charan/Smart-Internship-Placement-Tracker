package com.charan.internshiptracker.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.charan.internshiptracker.entity.Resume;

public interface ResumeRepository extends JpaRepository<Resume, Long> {

}
