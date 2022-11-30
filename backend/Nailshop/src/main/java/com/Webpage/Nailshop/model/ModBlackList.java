package com.Webpage.Nailshop.model;

import lombok.Setter;
import lombok.Getter;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import javax.persistence.*;

@Getter
@Setter
@Entity
@Table(name = "blacklist")
public class ModBlackList {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id


    private Long id;

    @Column(name = "Email")
    private String email;

    @Column(name = "Name")
    private String name;

    @Column(name = "Surname")
    private String surname;

    @Column(name = "Phone")
    private String phone;

    @Column(name = "ClientIdCard")
    private String cardNumber;
}