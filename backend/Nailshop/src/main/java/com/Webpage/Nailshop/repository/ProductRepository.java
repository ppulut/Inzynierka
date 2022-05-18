package com.Webpage.Nailshop.repository;


import com.Webpage.Nailshop.model.ModProducts;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
public interface ProductRepository extends JpaRepository<ModProducts,Long> {



}