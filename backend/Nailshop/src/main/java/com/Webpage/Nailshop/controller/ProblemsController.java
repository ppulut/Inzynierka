package com.Webpage.Nailshop.controller;

import com.Webpage.Nailshop.Service.ProblemsService;
import com.Webpage.Nailshop.model.ModProblems;
import com.Webpage.Nailshop.repository.ProblemsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/problems")
public class ProblemsController {

    @Autowired
    private ProblemsService problemsService;

    @Autowired
    private ProblemsRepository problemsRepository;

    @GetMapping("/AllProblems")
    public  List<ModProblems> getAllProblems(){
        return problemsService.getAllProblems();
    }



}
