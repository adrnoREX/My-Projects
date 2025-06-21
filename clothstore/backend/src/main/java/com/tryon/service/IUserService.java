package com.tryon.service;
import java.util.List;

import org.springframework.stereotype.Service;

import com.tryon.model.User;

@Service
public interface IUserService {
    
    User saveUser(User user);
    User getUserById(int id);
    List<User> getAllUsers();
    User updateUser(User user);
    User getUserByEmail(String email);
    String hardDeleteById(int id);
}
