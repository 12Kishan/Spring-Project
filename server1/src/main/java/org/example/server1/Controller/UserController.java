package org.example.server1.Controller;

import org.example.server1.Entities.User;
import org.example.server1.services.UserServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("api/user")
@CrossOrigin
public class UserController {

    @Autowired
    private UserServices userServices;

    @RequestMapping(value = "",method = RequestMethod.POST)
    public ResponseEntity<?> adduser(@RequestBody User user){

        User newuser= userServices.save(user);
        return new ResponseEntity<>(newuser, HttpStatus.CREATED);
    }

    @GetMapping("/all")
    public Iterable<User> getalluser(){
        return userServices.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getUserById(@PathVariable("id") long id)
    {
        User user = userServices.findById(id);

        if(user == null){
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }

        return new ResponseEntity<>(user, HttpStatus.OK);
    }

    @RequestMapping(value = "/{userId}", method = RequestMethod.DELETE)
    public ResponseEntity<?> deleteuser(@PathVariable("userId") long id) {

        if (userServices.delete(id)) {
            return new ResponseEntity<>(HttpStatus.OK);
        } else {
            return new ResponseEntity<>("Failed to delete user", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/validate/{Email}/{password}")
    public ResponseEntity<?> Validate(
            @PathVariable String Email,
            @PathVariable String password
    ){
        if(userServices.exist(Email))
        {
            User user = userServices.findbyemail(Email);
            if(userServices.validate(Email,password)){
                if(userServices.isadmin(Email))
                {

                    return new ResponseEntity<>(user,HttpStatus.OK);

                }

                return new ResponseEntity<>(user,HttpStatus.OK);
            }
            else {
                return new ResponseEntity<>("invalid password",HttpStatus.BAD_GATEWAY);
            }
        }
        else {
            return new ResponseEntity<>("email not found",HttpStatus.NOT_FOUND);
        }
    }


    @RequestMapping(value = "/book/{userid}/{trainid}/book",method = RequestMethod.POST)
    public ResponseEntity<?> bookTicket(
                                        @PathVariable("userid") int userId,
                                        @PathVariable("trainid") int trainId)

    {
        boolean num = userServices.bookTicket(userId,trainId);
        if(!num)
        {
            return new ResponseEntity<>("something went wrong",HttpStatus.OK);
        }
        return new ResponseEntity<>("Ticket Booked",HttpStatus.CREATED);
    }

    }
