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

import java.util.Date;
import java.util.List;
import java.util.Optional;

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

    @GetMapping (value = "/pins/{date}")
    public ResponseEntity<List<Pin>> getPinByDate(@PathVariable Date date){
        List<Pin> pins = pinService.getPinByDate(date);
        return pins != null ? new ResponseEntity<>(pins, HttpStatus.OK) : new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
    }

    @GetMapping (value = "/pins/{location}")
    public ResponseEntity<List<Pin>> getPinByLocation (@PathVariable String location){
        List<Pin> pins = pinService.getPinByLocation(location);
        return pins != null ? new ResponseEntity<>(pins, HttpStatus.OK) : new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
    }

    @GetMapping (value = "/pins/{name}")
    public ResponseEntity<List<Pin>> getPinByUserName (@PathVariable String name){
        List<Pin> pins = pinService.getPinByUserName(name);
        return pins != null ? new ResponseEntity<>(pins, HttpStatus.OK) : new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
    }

     @GetMapping(value = "/{id}")
     public ResponseEntity<User> getUserById (@PathVariable Long id){
         Optional<User> user = userService.getUserById(id);
         if (user.isPresent()){
             return new ResponseEntity<>(user.get(),HttpStatus.OK);
         } else {
             return new ResponseEntity<>(null,HttpStatus.NOT_FOUND);
         }
     }

    // Post Request
    @PostMapping (value = "/pins")
    public ResponseEntity<Pin> savePin(@RequestBody Pin pinParam){
        Pin savedPin = pinService.savePin(pinParam);
        return new ResponseEntity<>(savedPin,HttpStatus.CREATED);
    }

    @PostMapping
    public ResponseEntity<User> saveUser(@RequestBody User user){
        User savedUser = userService.saveUser(user);
        return new ResponseEntity<>(savedUser, HttpStatus.CREATED);
    }

    //Delete Request
    @DeleteMapping
    public ResponseEntity<String>  removePinById(@RequestParam long id, Pin pin){
        Reply deletedPin = pinService.removePinById(id, pin);
        return deletedPin.isPassed() ? new ResponseEntity<>(deletedPin.getMessage(), HttpStatus.OK) : new ResponseEntity<>(deletedPin.getMessage(), HttpStatus.NOT_FOUND);
    }


}
