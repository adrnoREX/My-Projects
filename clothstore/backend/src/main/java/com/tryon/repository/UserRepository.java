package com.tryon.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.tryon.model.User;

public interface UserRepository extends JpaRepository<User, Integer> {
    User findByEmail(String email);
}

