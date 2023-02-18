package com.his.hadbackend.service;

import com.his.hadbackend.model.Patient;
import com.his.hadbackend.dao.PatientRepository;
import org.springframework.stereotype.Service;

@Service
public class PatientService {

    private final PatientRepository patientRepository;

    public PatientService(PatientRepository patientRepository) {
        this.patientRepository = patientRepository;
    }

    public Patient getPatientById(Long id) {
        return null;
    }

    // Add any methods to handle business logic here

}