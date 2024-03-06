package org.example.server1.Controller;

import org.example.server1.Entities.Ticket;
import org.example.server1.Entities.Train;
import org.example.server1.services.TicketServices;
import org.example.server1.services.TrainServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping("/api/train")
public class TrainController {

    @Autowired
    private TrainServices trainServices;

    @Autowired
    private TicketServices ticketServices;

    @PostMapping(value = "")
    public ResponseEntity<?> adduser(@RequestBody Train train){

        Train newtrain= trainServices.save(train);
        return new ResponseEntity<>(newtrain, HttpStatus.CREATED);
    }

    @GetMapping("/all")
    public Iterable<Train> getalluser(){
        return trainServices.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getUserById(@PathVariable("id") long id)
    {
        Train train = trainServices.findById(id);

        if(train == null){
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }

        return new ResponseEntity<>(train, HttpStatus.OK);
    }

    @RequestMapping(value = "/{trainId}", method = RequestMethod.DELETE)
    public ResponseEntity<?> deleteuser(@PathVariable("trainId") long id) {

        if (trainServices.delete(id)) {
            return new ResponseEntity<>(HttpStatus.OK);
        } else {
            return new ResponseEntity<>("Failed to delete user", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

}
