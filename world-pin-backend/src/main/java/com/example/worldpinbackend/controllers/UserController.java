package com.example.worldpinbackend.controllers;

import com.example.worldpinbackend.models.Pin;
import com.example.worldpinbackend.models.Reply;
import com.example.worldpinbackend.models.User;
import com.example.worldpinbackend.services.PinService;
import com.example.worldpinbackend.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping( value = "/users")


public class UserController {

    @Autowired
    UserService userService;

    @Autowired
    PinService pinService;


    //Get Requests

    @GetMapping
    public ResponseEntity<List<User>> getAllUsers(){
        List<User> users = userService.getAllUsers();
        return new ResponseEntity<>(users, HttpStatus.OK);
    }

    @GetMapping (value = "/pins")
    public ResponseEntity<List<Pin>> getAllPins(){
        List<Pin> pins = pinService.getAllPins();
        return new ResponseEntity<>(pins, HttpStatus.OK);
    }

    // Post Request
    @PostMapping
    public ResponseEntity<Pin> savePin(@RequestBody Pin pinParam){
        Pin savedPin = pinService.savePin(pinParam);
        return new ResponseEntity<>(savedPin,HttpStatus.CREATED);
    }





}
