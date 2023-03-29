package com.example.hadbackend.bean.carecontext;

import com.example.hadbackend.bean.Login;
import com.fasterxml.jackson.annotation.JsonAutoDetect;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@JsonAutoDetect(fieldVisibility = JsonAutoDetect.Visibility.ANY)
@Entity
public class Medicalrecords {

    @Column
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int vistid;

    @Column
    private String prescription;

    @ManyToOne
    private Patient patient;

    @ManyToOne
    private Login doctor;


}
