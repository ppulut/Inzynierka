package com.Webpage.Nailshop.repository;

import com.Webpage.Nailshop.model.ModPrice;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface PriceRepository extends JpaRepository<ModPrice,Long> {



}