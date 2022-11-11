package com.Webpage.Nailshop.Service;
import com.Webpage.Nailshop.model.ModReservation;
import com.Webpage.Nailshop.repository.Reservation;
import org.springframework.stereotype.Service;
import com.Webpage.Nailshop.model.Users;
import com.Webpage.Nailshop.repository.UsersRepository;
import org.springframework.beans.factory.annotation.Autowired;
import java.util.List;

    @Service
    public class UsersServiceImpl implements UsersService {

        @Autowired
        private UsersRepository usersRepository;

        @Autowired
        private Reservation reservationRepo;

        @Override
        public Users saveUsers(Users users) {
            return usersRepository.save(users);
        }
        @Override
        public ModReservation saveReservations(ModReservation reservation) {
            return reservationRepo.save(reservation);
        }

        @Override
        public List<Users> getAllUsers() {
            return usersRepository.findAll();
        }
    }