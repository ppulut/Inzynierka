package com.Webpage.Nailshop.Service;

import com.Webpage.Nailshop.model.ModBlackList;
import com.Webpage.Nailshop.model.ModDetails;
import com.Webpage.Nailshop.repository.BlackListRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.List;


@Service
public class BlackListService {

    @Autowired
    private BlackListRepository blackListRepository;


    public List<ModBlackList> getAllBlackList() {
        return blackListRepository.findAll();
    }

    public ResponseEntity<ModBlackList> getProductById(@PathVariable String email) {
        ModBlackList modBlackList = blackListRepository.findByEmail(email);
        return ResponseEntity.ok(modBlackList);
    }



}