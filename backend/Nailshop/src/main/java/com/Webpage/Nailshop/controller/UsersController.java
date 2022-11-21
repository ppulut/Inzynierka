package com.Webpage.Nailshop.controller;

import com.Webpage.Nailshop.Service.UsersService;
import com.Webpage.Nailshop.model.ModReservation;
import com.Webpage.Nailshop.model.Users;
import com.Webpage.Nailshop.repository.UsersRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;

@RestController
@RequestMapping("/users")
@CrossOrigin("*")
public class UsersController {
    @Autowired
    private UsersService usersService;

    @Autowired
    private UsersRepository usersRepository;



    @GetMapping("/getAll")
    public  List<Users> getAll(){
        return usersService.getAllUsers();
    }
    @PostMapping("/add")
    public String add(@RequestBody Users users){
        usersRepository.save(users);
        return "New user is added";
    }

    @DeleteMapping("/delete/{id}")
    public String delete(@PathVariable long id) {
        usersRepository.deleteById(id);
        return "User deleted";
    }

}