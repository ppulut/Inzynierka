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
@Table(name = "users")
public class Users {

    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    private Long id;

    @Column(name="Imie")
    private String imie;

    @Column(name="Nazwisko")
    private String nazwisko;

    @Column(name="Email")
    private String mail;

    @Column(name="Telefon")
    private String telefon;

    @Column(name="Nr_Karty_Klienta")
    private String nrKartyKlienta;

}