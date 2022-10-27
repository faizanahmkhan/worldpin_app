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
        User user5 = new User("Ravi");


        Pin pin1 = new Pin("Got lost on my way to Ibiza", new Date(1 - 10 - 2022), "51.517,-0.077", "https://firebasestorage.googleapis.com/v0/b/worldpin-f05bd.appspot.com/o/images%2FIMG_20221027_144631_3.jpg1fc3d4e4-868c-43ec-aafe-59ae361ca530?alt=media&token=814654ad-63fd-407b-bd09-df3bdef1515d", user1);
        Pin pin2 = new Pin("Dolphin Love", new Date(1 - 10 - 2022), "39.3999,8.2245", "https://firebasestorage.googleapis.com/v0/b/worldpin-f05bd.appspot.com/o/images%2FWhatsApp%20Image%202022-10-27%20at%2015.50.21.jpege0c49db8-a00f-4840-8bbd-7424c2e41fc5?alt=media&token=9b96be8f-7a44-48a6-ad5e-8d8fca7b46e5", user2);
        Pin pin3 = new Pin("Faizan", new Date(1 - 10 - 2022), "50.938250,-10.201940", "https://firebasestorage.googleapis.com/v0/b/worldpin-f05bd.appspot.com/o/images%2FWhatsApp%20Image%202022-10-27%20at%2015.50.21.jpege0c49db8-a00f-4840-8bbd-7424c2e41fc5?alt=media&token=9b96be8f-7a44-48a6-ad5e-8d8fca7b46e5", user3);
        Pin pin4 = new Pin("Beer pong got competitive", new Date(1 - 10 - 2022), "55.938250,-3.201940", "https://firebasestorage.googleapis.com/v0/b/worldpin-f05bd.appspot.com/o/images%2FBeerPong.jpeg0884dec9-5afb-4939-83c5-62f3ebd07886?alt=media&token=9ae74314-48a4-4a30-a108-48d999700e69", user4);
        Pin pin5 = new Pin("Slow animal drinking in Matobo national park", new Date(1 - 10 - 2022), "20.5572, 28.5125", "https://firebasestorage.googleapis.com/v0/b/worldpin-f05bd.appspot.com/o/images%2FIMG_1814.JPGc9ea46f1-834f-49a9-8053-1517e55a081b?alt=media&token=77c6d158-abd9-430a-8326-5fd1b45057ec", user5);




        pinRepository.saveAll(Arrays.asList(pin1, pin2, pin3, pin4, pin5));
        userRepository.saveAll(Arrays.asList(user1, user2, user3, user4));

    }

}

