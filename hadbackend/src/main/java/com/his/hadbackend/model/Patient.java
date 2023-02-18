package com.his.hadbackend.model;

import jakarta.persistence.*;

@Entity
@Table(name="Patient")
public class Patient {
    @Id
    @Column(name = "patient_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer patientID;

    @Column(name = "abha_num")
    private Integer patientABHANumber;

    @Column(name = "abha_addr")
    private String patientABHAAddr;

    @Column(name = "name")
    private String patientName;

    @Column(name = "gender")
    private String patientGender;

    @Column(name = "birth_year")
    private Integer yearOfBirth;

    @Column(name = "birth_month")
    private Integer monthOfBirth;

    @Column(name = "birth_day")
    private Integer dayOfBirth;

    @Column(name = "address")
    private String patientAddr;

    @Column(name = "mobile")
    private Integer patientMobile;

    public Patient() {
    }

    public Patient(Integer patientID, Integer patientABHANumber, String patientABHAAddr, String patientName, String patientGender, Integer yearOfBirth, Integer monthOfBirth, Integer dayOfBirth, String patientAddr, Integer patientMobile) {
        this.patientID = patientID;
        this.patientABHANumber = patientABHANumber;
        this.patientABHAAddr = patientABHAAddr;
        this.patientName = patientName;
        this.patientGender = patientGender;
        this.yearOfBirth = yearOfBirth;
        this.monthOfBirth = monthOfBirth;
        this.dayOfBirth = dayOfBirth;
        this.patientAddr = patientAddr;
        this.patientMobile = patientMobile;
    }

    public Integer getPatientID() {
        return patientID;
    }

    public void setPatientID(Integer patientID) {
        this.patientID = patientID;
    }

    public Integer getPatientABHANumber() {
        return patientABHANumber;
    }

    public void setPatientABHANumber(Integer patientABHANumber) {
        this.patientABHANumber = patientABHANumber;
    }

    public String getPatientABHAAddr() {
        return patientABHAAddr;
    }

    public void setPatientABHAAddr(String patientABHAAddr) {
        this.patientABHAAddr = patientABHAAddr;
    }

    public String getPatientName() {
        return patientName;
    }

    public void setPatientName(String patientName) {
        this.patientName = patientName;
    }

    public String getPatientGender() {
        return patientGender;
    }

    public void setPatientGender(String patientGender) {
        this.patientGender = patientGender;
    }

    public Integer getYearOfBirth() {
        return yearOfBirth;
    }

    public void setYearOfBirth(Integer yearOfBirth) {
        this.yearOfBirth = yearOfBirth;
    }

    public Integer getMonthOfBirth() {
        return monthOfBirth;
    }

    public void setMonthOfBirth(Integer monthOfBirth) {
        this.monthOfBirth = monthOfBirth;
    }

    public Integer getDayOfBirth() {
        return dayOfBirth;
    }

    public void setDayOfBirth(Integer dayOfBirth) {
        this.dayOfBirth = dayOfBirth;
    }

    public String getPatientAddr() {
        return patientAddr;
    }

    public void setPatientAddr(String patientAddr) {
        this.patientAddr = patientAddr;
    }

    public Integer getPatientMobile() {
        return patientMobile;
    }

    public void setPatientMobile(Integer patientMobile) {
        this.patientMobile = patientMobile;
    }

    @java.lang.Override
    public java.lang.String toString() {
        return "Patient{" +
                "patientID=" + patientID +
                ", patientABHANumber=" + patientABHANumber +
                ", patientABHAAddr='" + patientABHAAddr + '\'' +
                ", patientName='" + patientName + '\'' +
                ", patientGender='" + patientGender + '\'' +
                ", yearOfBirth=" + yearOfBirth +
                ", monthOfBirth=" + monthOfBirth +
                ", dayOfBirth=" + dayOfBirth +
                ", patientAddr='" + patientAddr + '\'' +
                ", patientMobile=" + patientMobile +
                '}';
    }
}
