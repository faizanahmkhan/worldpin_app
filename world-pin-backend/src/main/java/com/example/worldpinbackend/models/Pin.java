package com.example.worldpinbackend.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import org.springframework.format.annotation.DateTimeFormat;
import javax.persistence.*;
import java.util.Date;

@Entity(name = "pins")
public class Pin {
    @Id
    @GeneratedValue (strategy = GenerationType.IDENTITY)
    private long id;

    @Column (name = "description")
    private String description;

    @DateTimeFormat(pattern = "dd-MM-yyyy")
    @Column (name = "date")
    private Date date;

    @Column (name = "location")
    private String location;

    @Column (name = "image_id")
    private String image; //will need changing later

    @ManyToOne(cascade = {CascadeType.ALL})
    @JoinColumn(name = "user_id")
    @JsonIgnoreProperties({"pins"})
    private User user;

    public Pin(String description, Date date, String location, String image, User user) {
        this.description = description;
        this.date = date;
        this.location = location;
        this.image = image;
        this.user = user;
    }

    public Pin() {
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }
}
