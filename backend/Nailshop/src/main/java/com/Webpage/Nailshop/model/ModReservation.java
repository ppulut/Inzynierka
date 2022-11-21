package com.Webpage.Nailshop.model;

import lombok.Setter;
import lombok.Getter;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import javax.persistence.*;
import java.text.DateFormat;
import java.text.SimpleDateFormat;

@Getter
@Setter
@Entity
@Table(name = "reservations")
public class ModReservation {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id


    private Long id;

    @Column(name = "Title")
    private String title;

    @Column(name = "Email")
    private String email;

    @Column(name = "Name")
    private String name;

    @Column(name = "Surname")
    private String surname;

    @Column(name = "Phone")
    private String phone;

    @Column(name = "StartDate")
    private String startDate;

    @Column(name = "EndDate")
    private String endDate;

    @Column(name = "Description")
    private String description;

    @Column(name = "ClientIdCard")
    private String cardNumber;
}