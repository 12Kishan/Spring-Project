package org.example.server1.repositories;

import org.example.server1.Entities.Ticket;
import org.example.server1.Entities.User;
import org.springframework.data.repository.CrudRepository;

public interface TicketRepository extends CrudRepository<Ticket,Long> {

    Ticket findById(long id);

//    Ticket findByUser(User user);
}
