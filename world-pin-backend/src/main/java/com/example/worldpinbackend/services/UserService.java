package com.example.worldpinbackend.services;

import com.example.worldpinbackend.models.Pin;
import com.example.worldpinbackend.models.User;
import com.example.worldpinbackend.repositories.PinRepository;
import com.example.worldpinbackend.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserService {


    @Autowired
    UserRepository userRepository;

    @Autowired
    PinRepository pinRepository;

    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    public Optional<User> getUserById(long id) {
        return userRepository.findById(id);
    }


    public User saveUser(User user) {
        userRepository.save(user);
        return user;
    }

//    May not be Necessary

}
