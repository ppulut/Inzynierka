package com.Webpage.Nailshop.repository;

import com.Webpage.Nailshop.model.ModReservation;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface Reservation extends JpaRepository<ModReservation,Long> {



}