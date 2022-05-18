package com.Webpage.Nailshop.repository;

import com.Webpage.Nailshop.model.ModCategory;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface CategoryRepository extends JpaRepository<ModCategory,Long> {



}