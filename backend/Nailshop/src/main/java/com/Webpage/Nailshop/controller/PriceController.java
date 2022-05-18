package com.Webpage.Nailshop.controller;

import com.Webpage.Nailshop.Service.PriceService;
import com.Webpage.Nailshop.model.ModPrice;
import com.Webpage.Nailshop.repository.PriceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/prices")
public class PriceController {

    @Autowired
    private PriceService priceService;

    @Autowired
    private PriceRepository priceRepository;

    @GetMapping("/AllPrices")
    public  List<ModPrice> getAllPrices(){
        return priceService.getAllPrices();
    }



}
