package com.Webpage.Nailshop.controller;

import com.Webpage.Nailshop.Service.ProductService;
import com.Webpage.Nailshop.repository.ProductRepository;
import com.Webpage.Nailshop.model.ModProducts;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/products")
public class ProductController {

    @Autowired
    private ProductService productService;

    @Autowired
    private ProductRepository productRepository;

    @GetMapping("/AllProducts")
    public  List<ModProducts> getAllProducts(){
        return productService.getAllProducts();
    }


}
