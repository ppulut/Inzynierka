package com.Webpage.Nailshop.repository;

import com.Webpage.Nailshop.model.ModProblems;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface ProblemsRepository extends JpaRepository<ModProblems,Long> {



}