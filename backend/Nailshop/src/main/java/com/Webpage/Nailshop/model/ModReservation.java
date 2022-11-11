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


    private Long product_id;

    @Column(name = "Name")
    private String name;

    @Column(name = "Email")
    private String email;

    @Column(name = "Phone")
    private String phone;

    @Column(name = "StartDate")
    private String startDate;

    @Column(name = "EndDate")
    private String endDate;

    @Column(name = "Description")
    private String description;


}