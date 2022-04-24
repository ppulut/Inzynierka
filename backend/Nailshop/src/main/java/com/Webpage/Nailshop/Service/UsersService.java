package com.Webpage.Nailshop.Service;

import com.Webpage.Nailshop.model.Users;

import java.util.List;

public interface UsersService {
    public Users saveUsers(Users users);
    public List<Users> getAllUsers();
}