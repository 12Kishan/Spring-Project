package org.example.server1.repositories;

import org.example.server1.Entities.Ticket;
import org.example.server1.Entities.Train;
import org.example.server1.Entities.User;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface TicketRepository extends CrudRepository<Ticket,Long> {

    Ticket findById(long id);
    List<Ticket> findByTrainAndStatus(Train train, String status);

//    Ticket findByUser(User user);
}
