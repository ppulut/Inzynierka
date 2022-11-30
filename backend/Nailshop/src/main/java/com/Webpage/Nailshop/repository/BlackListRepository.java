package com.Webpage.Nailshop.repository;

import com.Webpage.Nailshop.model.ModBlackList;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface BlackListRepository extends JpaRepository<ModBlackList,Long> {
ModBlackList findByEmail(String email);


}