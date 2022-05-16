package com.Webpage.Nailshop.Service;

import com.Webpage.Nailshop.model.ModProducts;
import com.Webpage.Nailshop.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class ProductService {

    @Autowired
    private ProductRepository productRepository;


    public List<ModProducts> getAllProducts() {
        return productRepository.findAll();
    }



}