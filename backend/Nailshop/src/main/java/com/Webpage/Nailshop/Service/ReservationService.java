package com.Webpage.Nailshop.Service;

import com.Webpage.Nailshop.model.ModReservation;
import com.Webpage.Nailshop.repository.Reservation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class ReservationService {

    @Autowired
    private Reservation reservation;


    public List<ModReservation> getAllReservations() {
        return reservation.findAll();
    }





}