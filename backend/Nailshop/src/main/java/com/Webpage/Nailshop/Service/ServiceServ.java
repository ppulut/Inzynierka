package com.Webpage.Nailshop.Service;

import com.Webpage.Nailshop.model.ModService;
import com.Webpage.Nailshop.repository.ServiceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class ServiceServ {

    @Autowired
    private ServiceRepository serviceRepository;


    public List<ModService> getAllServices() {
        return serviceRepository.findAll();
    }



}