package com.example.worldpinbackend.repositories;

import com.example.worldpinbackend.models.Pin;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface PinRepository extends JpaRepository<Pin, Long> {
    List<Pin> findPinByYear(int year);
    List<Pin> findPinByLocation(String location);
    List<Pin> findPinByUserName(String userName);
}
