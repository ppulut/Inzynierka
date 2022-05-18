package com.Webpage.Nailshop.Service;

import com.Webpage.Nailshop.model.ModPrice;
import com.Webpage.Nailshop.repository.PriceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class PriceService {

    @Autowired
    private PriceRepository priceRepository;


    public List<ModPrice> getAllPrices() {
        return priceRepository.findAll();
    }



}