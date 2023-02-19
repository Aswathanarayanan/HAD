package com.example.healthcare.model;

import jakarta.persistence.*;
import org.springframework.lang.NonNull;

@Entity
@Table(name= "User")
public class User {

    @Column(name = "email", unique = true)
    @Id
    @NonNull
    private String email;

    @Column(name = "password", unique = true)
    @NonNull
    private String password;

    public User(@NonNull String email, @NonNull String password) {
        this.email = email;
        this.password = password;
    }

    public User() {

    }

    @NonNull
    public String getEmail() {
        return email;
    }

    public void setEmail(@NonNull String email) {
        this.email = email;
    }

    @NonNull
    public String getPassword() {
        return password;
    }

    public void setPassword(@NonNull String password) {
        this.password = password;
    }

    @Override
    public String toString() {
        return "User{" +
                "email='" + email + '\'' +
                ", password='" + password + '\'' +
                '}';
    }
}
