package com.Webpage.Nailshop.controller;

import com.Webpage.Nailshop.Service.ServiceServ;
import com.Webpage.Nailshop.model.ModService;
import com.Webpage.Nailshop.repository.ServiceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/services")
public class ServiceController {

    @Autowired
    private ServiceServ serviceServ;

    @Autowired
    private ServiceRepository serviceRepository;

    @GetMapping("/AllServices")
    public  List<ModService> getAllServices(){
        return serviceServ.getAllServices();
    }



}
