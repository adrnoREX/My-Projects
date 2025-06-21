package com.tryon.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.tryon.model.User;
import com.tryon.service.IUserService;
@CrossOrigin(origins="http://localhost:5173")
@RestController
@RequestMapping("/api/users")

public class UserController {
    
    @Autowired
    IUserService userService;

    // Get all users
    @GetMapping
    public List<User> getAllUsers() {
        return userService.getAllUsers();
    }

    // Get user by ID
    @GetMapping("/{id}")
    public User getUser(@PathVariable int id) {
        return userService.getUserById(id);
    }

    // Add new user
    @PostMapping("/signup")
    public User saveUser(@RequestBody User user) {
        try {
            return userService.saveUser(user);
        } catch (IllegalArgumentException e) {
            System.out.println("Signup failed: " + e.getMessage());
            return null;
        }
    }

    // Get user by email
    @PostMapping("/login")
    public User loginUser(@RequestBody User loginData) {
        User user = userService.getUserByEmail(loginData.getEmail());
        if (user != null && user.getPassword().equals(loginData.getPassword())) {
            return user;
        }
        System.out.println("Login failed: Invalid credentials");
        return null;
    }

    // Update user by ID
    @PutMapping("/{id}")
    public User updateUser(@PathVariable int id, @RequestBody User user) {
        user.setId(id);
        return userService.updateUser(user);
    }

    //Hard Delete user by ID
    @DeleteMapping("/{id}")
    public String hardDeleteUser(@PathVariable int id) {
        return userService.hardDeleteById(id);
    }
}