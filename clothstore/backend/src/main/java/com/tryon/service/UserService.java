package com.tryon.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.tryon.model.User;
import com.tryon.repository.UserRepository;

import jakarta.transaction.Transactional;

@Service
public class UserService implements IUserService {

    @Autowired
    UserRepository userRepository;


    @Override
    public User saveUser(User user) {
		if (userRepository.findByEmail(user.getEmail()) != null) {
			throw new IllegalArgumentException("Email already exists");
		}
		return userRepository.save(user);
	}

    @Override
	public User getUserById(int id) {
		return userRepository.findById(id).get();
	}

    @Override
	public List<User> getAllUsers() {
		return userRepository.findAll();
	}

	@Override
	public User getUserByEmail(String email) {
		return userRepository.findByEmail(email);
	}

    @Override
	public User updateUser(User user) {
		User b=getUserById(user.getId());
		b.setUsername(user.getUsername());
		b.setEmail(user.getEmail());
		b.setPassword(user.getPassword());
		return userRepository.save(b);
	}

	@Override
	@Transactional
    public String hardDeleteById(int id) {
		if (userRepository.existsById(id)) {
			userRepository.deleteById(id);  // Force hard delete at DB level
			return "User permanently deleted";
		} else {
			return "User not found";
		}
	}
}

