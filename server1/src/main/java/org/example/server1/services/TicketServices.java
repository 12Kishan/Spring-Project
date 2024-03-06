package org.example.server1.services;

import jakarta.persistence.EntityNotFoundException;
import org.example.server1.Entities.Ticket;
import org.example.server1.Entities.Train;
import org.example.server1.Entities.User;
import org.example.server1.repositories.TicketRepository;
import org.example.server1.repositories.TrainRepository;
import org.example.server1.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TicketServices {

    @Autowired
    TicketRepository ticketRepository;
    @Autowired
    private UserRepository userRepository;

    @Autowired
    private TrainRepository trainRepository;


    public Ticket save(Ticket ticket){
        return ticketRepository.save(ticket);
    }
    public Ticket findById(long Id)
    {
        return ticketRepository.findById(Id);
    }

    public Iterable<Ticket> findAll() {
        return ticketRepository.findAll();
    }

//    public Ticket findbyuser(User user){
//        return ticketRepository.findByUser(user);
//    }

    public boolean delete(long Id)
    {

        Ticket ticket=findById(Id);

        ticketRepository.delete(ticket);
        return true;
    }

    public void createTicket(Long userId, Long trainId,Ticket ticket) {
        User user = userRepository.findById(userId).orElseThrow(() -> new EntityNotFoundException("User not found"));
        Train train = trainRepository.findById(trainId).orElseThrow(() -> new EntityNotFoundException("Train not found"));


        ticket.setUser(user);
        ticket.setTrain(train);

        user.getTicketUser().add(ticket);
        train.getTrainTicket().add(ticket);
        train.setTotalBookedSeats(train.getTotalBookedSeats() + 1);
        ticketRepository.save(ticket);
    }

}
