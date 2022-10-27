package com.example.worldpinbackend.components;


import com.example.worldpinbackend.models.Pin;
import com.example.worldpinbackend.models.User;
import com.example.worldpinbackend.repositories.PinRepository;
import com.example.worldpinbackend.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

import java.lang.reflect.Array;
import java.util.Arrays;
import java.util.Date;

@Component
public class DataLoader implements ApplicationRunner {

    @Autowired
    PinRepository pinRepository;

    @Autowired
    UserRepository userRepository;


    @Override
    public void run(ApplicationArguments args) throws Exception {

        User user1 = new User("Ben");
        User user2 = new User("Hasmeet");
        User user3 = new User("Faizan");
        User user4 = new User("Kai");

//        Pin pin1 = new Pin("Swag description1", new Date(1 - 10 - 2022), "London", "77", user1);
//        Pin pin2 = new Pin("Swag description2", new Date(2 - 10 - 2021), "Barcelona", "66", user1);
//        Pin pin3 = new Pin("Swag description3", new Date(3 - 10 - 2020), "Paris", "44", user2);
//        Pin pin4 = new Pin("Swag description4", new Date(4 - 10 - 2019), "Krakow", "55", user2);
//        Pin pin5 = new Pin("Swag description5", new Date(5 - 10 - 2018), "Berlin", "34", user3);
//        Pin pin6 = new Pin("Swag description6", new Date(6 - 10 - 2017), "Amsterdam", "54", user3);
//        Pin pin7 = new Pin("Swag description7", new Date(7 - 10 - 2017), "Budapest", "11", user4);
//        Pin pin8 = new Pin("Swag description8", new Date(8 - 10 - 2017), "Rome", "47", user4);

//        pinRepository.saveAll(Arrays.asList(pin1, pin2, pin3, pin4, pin5, pin6, pin7, pin8));
        userRepository.saveAll(Arrays.asList(user1, user2, user3, user4));

    }

}

