package com.his.hadbackend.service;

import com.his.hadbackend.model.Patient;
import com.his.hadbackend.repository.LoginRepository;
import org.springframework.stereotype.Service;

@Service
public class LoginService {

    private LoginRepository patientRepository;

    public void PatientService(LoginRepository patientRepository) {
        this.patientRepository = patientRepository;
    }

    public LoginService(LoginRepository patientRepository) {
        this.patientRepository = patientRepository;
    }

    public Patient getPatientById(Long id) {
        return null;
    }

    // Add any methods to handle business logic here

}