package com.example.worldpinbackend.repositories;

import com.example.worldpinbackend.models.Pin;
import com.example.worldpinbackend.models.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface UserRepository extends JpaRepository<User, Long> {

    List<User> findUserByName(String name);

}
