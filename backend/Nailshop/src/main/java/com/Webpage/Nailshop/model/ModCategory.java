package com.Webpage.Nailshop.model;

import lombok.Setter;
import lombok.Getter;

import javax.persistence.*;

@Getter
@Setter
@Entity
@Table(name = "category")
public class ModCategory {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    private Long id;

    @Column(name = "Link")
    private String link;

    @Column(name = "Img")
    private String img;


    @Column(name = "Title")
    private String title;

}
