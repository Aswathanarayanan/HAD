package com.example.healthcare;

import com.example.healthcare.model.Patient;
import com.example.healthcare.model.User;
import com.example.healthcare.repository.PatientRepository;
import com.example.healthcare.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class HealthcareApplication implements CommandLineRunner {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PatientRepository patientRepository;

    public static void main(String[] args) {
        SpringApplication.run(HealthcareApplication.class, args);
    }

    @Override
    public void run(String... args) throws Exception {
        User user1 = new User("john.doe@example.com", "password123");
        userRepository.save(user1);

        User user2 = new User("jane.doe@example.com", "password456");
        userRepository.save(user2);

//        Patient patient1 = new Patient(1, "91-3545-5326-7435", "johndoe@sbx", "John Doe", "Male", 1985, 5, 10, "Electronic City", "6574839232");
//        patientRepository.save(patient1);
//
//        Patient patient2 = new Patient(2, "92-3746-5896-9435", "janedoe@sbx", "Jane Doe", "Female", 1990, 8, 20, "ESR Layout", "8765473645");
//        patientRepository.save(patient2);
    }
}
