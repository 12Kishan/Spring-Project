package org.example.server1.services;

import org.example.server1.Entities.Ticket;
import org.example.server1.Entities.Train;
import org.example.server1.Entities.User;
import org.example.server1.repositories.TicketRepository;
import org.example.server1.repositories.TrainRepository;
import org.example.server1.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserServices {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private TrainRepository trainRepository;

    @Autowired
    private TicketServices ticketServices;

    @Autowired
    private TicketRepository ticketRepository;
    public User save(User user){
        return userRepository.save(user);
    }
    public User findById(long Id)
    {
        return userRepository.findById(Id);
    }

    public User findbyemail(String email){return userRepository.findByEmail(email);}

    public Iterable<User> findAll() {
        return userRepository.findAll();
    }

    public boolean delete(long Id)
    {
        User user=findById(Id);

        userRepository.delete(user);
        return true;
    }

    public boolean validate(String email,String password)
    {
        User user=userRepository.findByEmail(email);
        return (user.getPassword().equals(password));
    }

    public boolean exist(String email)
    {
        User user = userRepository.findByEmail(email);
        return user != null;
    }

    public boolean isadmin(String email)
    {
        User user = userRepository.findByEmail(email);
        return user.isAdmin();
    }

    public boolean bookTicket(long userId, long trainid) {
        try{
            User user= userRepository.findById(userId);
            Train train =trainRepository.findById(trainid);
            List<Ticket> bookticketuser = null;
            List<Ticket> booktickettrain = null;
            Ticket ticket = new Ticket();

                if ((train.getTotalSeats() - train.getTotalBookedSeats()) <= 0) {
                    ticket.setStatus("WAITING");

                } else {
                    ticket.setStatus("CONFORMED");
                }

            ticketServices.createTicket((userId),trainid,ticket);


            return true;
        }
        catch(Exception err)
        {
            System.out.println("this is error as" + err);
            return false;
        }
    }



}
