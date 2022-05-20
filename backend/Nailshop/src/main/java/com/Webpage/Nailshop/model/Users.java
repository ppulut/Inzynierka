package com.Webpage.Nailshop.model;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import javax.persistence.*;

@Entity
@Getter
@Setter
@Table(name = "Users")
public class Users {

    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    private Long id;

    @Column(name="Imie")
    private String name;

    @Column(name="Nazwisko")
    private String surname;

    @Column(name="Login")
    private String login;

    @Column(name="Haslo")
    private String password;

    @Column(name="Re_haslo")
    private String repassword;

}