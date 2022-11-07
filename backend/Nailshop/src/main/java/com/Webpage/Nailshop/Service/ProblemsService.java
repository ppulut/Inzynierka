package com.Webpage.Nailshop.Service;

import com.Webpage.Nailshop.model.ModProblems;
import com.Webpage.Nailshop.repository.ProblemsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class ProblemsService {

    @Autowired
    private ProblemsRepository problemsRepository;


    public List<ModProblems> getAllProblems() {
        return problemsRepository.findAll();
    }



}