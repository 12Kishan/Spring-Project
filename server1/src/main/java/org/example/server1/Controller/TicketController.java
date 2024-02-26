package org.example.server1.Controller;

import org.example.server1.Entities.Ticket;
import org.example.server1.Entities.User;
import org.example.server1.services.TicketServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RequestMapping("/api/ticket")
@CrossOrigin
@RestController
public class TicketController {

    @Autowired
    private TicketServices ticketServices;
    @GetMapping("/all")
    public Iterable<Ticket> getalluser(){
        return ticketServices.findAll();
    }


}
