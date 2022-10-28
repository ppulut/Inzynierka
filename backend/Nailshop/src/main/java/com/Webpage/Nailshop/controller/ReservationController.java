package com.Webpage.Nailshop.controller;

import com.Webpage.Nailshop.Service.ReservationService;
import com.Webpage.Nailshop.model.ModReservation;
import com.Webpage.Nailshop.repository.Reservation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/reservations")
public class ReservationController {

    @Autowired
    private ReservationService serviceReservation;

    @Autowired
    private Reservation reservation;

    @GetMapping("/Allreservations")
    public  List<ModReservation> getAllReservations(){
        return serviceReservation.getAllReservations();
    }



}
