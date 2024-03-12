package org.example.server1.Controller;

import org.example.server1.Entities.Ticket;
import org.example.server1.Entities.Train;
import org.example.server1.Entities.User;
import org.example.server1.services.TicketServices;
import org.example.server1.services.TrainServices;
import org.example.server1.services.UserServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RequestMapping("/api/ticket")
@CrossOrigin
@RestController
public class TicketController {

    @Autowired
    private TicketServices ticketServices;
    @Autowired
    private UserServices userServices;
    @Autowired
    private TrainServices trainServices;
    @GetMapping("/all")
    public Iterable<Ticket> getalluser(){
        return ticketServices.findAll();
    }

    @PostMapping("/update/{id}")
    public Ticket cancleTicket(@PathVariable("id") long id)
    {
        Ticket ticket= ticketServices.findById(id);

            Train train = ticket.getTrain();
            if (train.getTotalBookedSeats() > train.getTotalSeats()) {
                 while(!ticketServices.updatetickets(train));
            }
            else {
                train.setTotalBookedSeats(train.getTotalBookedSeats() - 1);
            }
            ticket.setStatus("CANCELLED");
            return ticketServices.save(ticket);
        }


//    @GetMapping("/{userid}")
//    public Iterable<Ticket> gettickets(@PathVariable("userid") long userid){
//        User user = userServices.findById(userid);
//        System.out.println(user);
//        return ticketServices.findbyuser(user);
//    }


}
