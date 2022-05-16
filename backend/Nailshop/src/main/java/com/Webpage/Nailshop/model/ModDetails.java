package com.Webpage.Nailshop.model;

import lombok.Setter;
import lombok.Getter;

import javax.persistence.*;

@Getter
@Setter
@Entity
@Table(name = "productsDetails")
public class ModDetails {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    private Long id;

    @Column(name = "Img")
    private String img;

    @Column(name = "Title")
    private String title;

    @Column(name = "Opis")
    private String opis;

    @Column(name = "Price")
    private String price;


}
