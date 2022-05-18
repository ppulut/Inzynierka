package com.Webpage.Nailshop.model;

import lombok.Setter;
import lombok.Getter;

import javax.persistence.*;

@Getter
@Setter
@Entity
@Table(name = "prices")
public class ModPrice {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    private Long id;

    @Column(name = "Name")
    private String name;

    @Column(name = "Cena")
    private String cena;

    @Column(name = "Waluta")
    private String waluta;



}
