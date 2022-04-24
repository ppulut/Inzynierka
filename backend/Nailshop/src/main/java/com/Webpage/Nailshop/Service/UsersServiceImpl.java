package com.Webpage.Nailshop.Service;
import org.springframework.stereotype.Service;
import com.Webpage.Nailshop.model.Users;
import com.Webpage.Nailshop.repository.UsersRepository;
import org.springframework.beans.factory.annotation.Autowired;
import java.util.List;

    @Service
    public class UsersServiceImpl implements UsersService {

        @Autowired
        private UsersRepository usersRepository;

        @Override
        public Users saveUsers(Users users) {
            return usersRepository.save(users);
        }

        @Override
        public List<Users> getAllUsers() {
            return usersRepository.findAll();
        }
    }