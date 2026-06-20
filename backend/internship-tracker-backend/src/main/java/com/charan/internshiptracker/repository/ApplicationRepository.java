package com.charan.internshiptracker.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.charan.internshiptracker.entity.Application;

public interface ApplicationRepository extends JpaRepository<Application, Long> {

}