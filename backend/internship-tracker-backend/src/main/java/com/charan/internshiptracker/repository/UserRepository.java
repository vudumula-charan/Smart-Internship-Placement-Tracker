package com.charan.internshiptracker.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.charan.internshiptracker.entity.User;

public interface UserRepository extends JpaRepository<User, Long> {

    User findByEmailAndPassword(String email, String password);

}