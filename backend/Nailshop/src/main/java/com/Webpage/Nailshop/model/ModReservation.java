package com.Webpage.Nailshop.model;

import lombok.Setter;
import lombok.Getter;

import javax.persistence.*;

@Getter
@Setter
@Entity
@Table(name = "reservations")
public class ModReservation {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    private Long product_id;

    @Column(name = "Data")
    private String data;

    @Column(name = "Hour")
    private String hour;

}