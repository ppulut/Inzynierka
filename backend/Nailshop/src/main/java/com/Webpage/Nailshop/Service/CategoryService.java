package com.Webpage.Nailshop.Service;

import com.Webpage.Nailshop.model.ModCategory;
import com.Webpage.Nailshop.repository.CategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class CategoryService {

    @Autowired
    private CategoryRepository categoryRepository;


    public List<ModCategory> getAllCategory() {
        return categoryRepository.findAll();
    }



}