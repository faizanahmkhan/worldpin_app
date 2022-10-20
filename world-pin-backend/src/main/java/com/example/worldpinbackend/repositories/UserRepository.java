package com.example.worldpinbackend.repositories;

import com.example.worldpinbackend.models.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
}
