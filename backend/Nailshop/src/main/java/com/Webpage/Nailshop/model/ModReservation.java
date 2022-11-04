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

    @Column(name = "Title")
    private String title;

    @Column(name = "StartDate")
    private String startDate;

    @Column(name = "EndDate")
    private String endDate;


}