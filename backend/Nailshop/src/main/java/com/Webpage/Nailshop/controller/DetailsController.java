package com.Webpage.Nailshop.controller;

import com.Webpage.Nailshop.Service.DetailsService;
import com.Webpage.Nailshop.model.ModProducts;
import com.Webpage.Nailshop.repository.DetailsRepository;
import com.Webpage.Nailshop.model.ModDetails;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/products")
public class DetailsController {

    @Autowired
    private DetailsService detailsService;

    @Autowired
    private DetailsRepository detailsRepository;

    @GetMapping("/Details")
    public  List<ModDetails> getAllDetails(){
        return detailsService.getAllDetails();
    }

    @GetMapping("/Details/{id}")
    public ResponseEntity<ModDetails> getProductById(@PathVariable Long id) {return detailsService.getProductById(id);}


}
