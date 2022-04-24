package com.Webpage.Nailshop.controller;

import com.Webpage.Nailshop.Service.UsersService;
import com.Webpage.Nailshop.model.Users;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/users")
@CrossOrigin
public class UsersController {
    @Autowired
    private UsersService usersService;

    @PostMapping("/add")
    public String add(@RequestBody Users users){
        usersService.saveUsers(users);
        return "New user is added";
    }

    @GetMapping("/getAll")
    public List<Users> list(){
        return usersService.getAllUsers();
    }
}