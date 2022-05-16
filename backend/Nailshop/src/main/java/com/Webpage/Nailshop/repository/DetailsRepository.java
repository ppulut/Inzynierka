package com.Webpage.Nailshop.repository;

import com.Webpage.Nailshop.model.ModDetails;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface DetailsRepository extends JpaRepository<ModDetails,Long> {

}