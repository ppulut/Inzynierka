package com.Webpage.Nailshop.controller;

import com.Webpage.Nailshop.Service.ReservationService;
import com.Webpage.Nailshop.model.ModReservation;
import com.Webpage.Nailshop.repository.Reservation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;



@CrossOrigin("*")
@RestController
@RequestMapping("/reservations")
public class ReservationController {

    @Autowired
    private ReservationService serviceReservation;

    @Autowired
    private Reservation reservationsRepository;

    @GetMapping("/Allreservations")
    public  List<ModReservation> getAllReservations(){
        return serviceReservation.getAllReservations();
    }

    @PostMapping("/add")
    public String add(@RequestBody ModReservation reservation){
        reservationsRepository.save(reservation);
        return "New user is added";
    }

    }


