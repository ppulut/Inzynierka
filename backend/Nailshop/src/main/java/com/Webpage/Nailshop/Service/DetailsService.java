package com.Webpage.Nailshop.Service;

import com.Webpage.Nailshop.model.ModDetails;
import com.Webpage.Nailshop.model.ModProducts;
import com.Webpage.Nailshop.repository.DetailsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.List;


@Service
public class DetailsService {

    @Autowired
    private DetailsRepository detailsRepository;

    public List<ModDetails> getAllDetails() {
        return detailsRepository.findAll();
    }

    public ResponseEntity<ModDetails> getProductById(@PathVariable Long id) {
        ModDetails modDetails = detailsRepository.findById(id).orElseThrow(() -> new RuntimeException("Blad" + id));
        return ResponseEntity.ok(modDetails);
    }
}