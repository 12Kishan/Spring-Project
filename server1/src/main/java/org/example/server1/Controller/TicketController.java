package org.example.server1.Controller;

import org.example.server1.Entities.Ticket;
import org.example.server1.Entities.User;
import org.example.server1.services.TicketServices;
import org.example.server1.services.UserServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RequestMapping("/api/ticket")
@CrossOrigin
@RestController
public class TicketController {

    @Autowired
    private TicketServices ticketServices;
    @Autowired
    private UserServices userServices;
    @GetMapping("/all")
    public Iterable<Ticket> getalluser(){
        return ticketServices.findAll();
    }

    @PostMapping("/update/{id}")
    public Ticket cancleTicket(@PathVariable("id") long id)
    {
        Ticket ticket= ticketServices.findById(id);
        ticket.setStatus("CANCELED");
        return ticketServices.save(ticket);
    }

//    @GetMapping("/{userid}")
//    public Iterable<Ticket> gettickets(@PathVariable("userid") long userid){
//        User user = userServices.findById(userid);
//        System.out.println(user);
//        return ticketServices.findbyuser(user);
//    }


}
