package com.Webpage.Nailshop.controller;

import com.Webpage.Nailshop.Service.CategoryService;
import com.Webpage.Nailshop.model.ModCategory;
import com.Webpage.Nailshop.repository.CategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/category")
public class CategoryController {

    @Autowired
    private CategoryService categoryService;

    @Autowired
    private CategoryRepository categoryRepository;

    @GetMapping("/AllCategory")
    public  List<ModCategory> getAllCategory(){
        return categoryService.getAllCategory();
    }



}
