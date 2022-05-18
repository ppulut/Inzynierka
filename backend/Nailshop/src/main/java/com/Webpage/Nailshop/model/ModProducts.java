package com.Webpage.Nailshop.model;

import lombok.Setter;
import lombok.Getter;

import javax.persistence.*;

@Getter
@Setter
@Entity
@Table(name = "products")
public class ModProducts {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    private Long product_id;

    @Column(name = "Img")
    private String img;

    @Column(name = "Title")
    private String title;

    @Column(name = "Price")
    private String price;

    @Column(name = "Opis")
    private String opis;

    @OneToOne
    @JoinColumn(name = "product_id")
    private ModDetails modDetails;
}