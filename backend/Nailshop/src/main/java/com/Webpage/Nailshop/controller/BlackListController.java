package com.Webpage.Nailshop.controller;

import com.Webpage.Nailshop.Service.BlackListService;
import com.Webpage.Nailshop.model.ModBlackList;
import com.Webpage.Nailshop.model.ModDetails;
import com.Webpage.Nailshop.repository.BlackListRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;




@RestController
@CrossOrigin("*")
@RequestMapping("/blacklist")
public class BlackListController {

    @Autowired
    private BlackListService serviceBlackList;

    @Autowired
    private BlackListRepository blackListRepository;

    @GetMapping("/AllBlackList")
    public  List<ModBlackList> getAllBlackList(){
        return serviceBlackList.getAllBlackList();
    }

    @GetMapping("/email/{email}")
    public ResponseEntity<ModBlackList> getProductById(@PathVariable String email) {return serviceBlackList.getProductById(email);}


    @PostMapping("/add")
    public String add(@RequestBody ModBlackList blackList){
        blackListRepository.save(blackList);
        return "New user is addedto black list";
    }

    @DeleteMapping("/delete/{id}")
    public String delete(@PathVariable long id) {
        blackListRepository.deleteById(id);
        return "User deleted";
    }

}


