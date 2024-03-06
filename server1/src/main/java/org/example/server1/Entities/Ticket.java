package org.example.server1.Entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;

import java.util.Random;


@Entity
public class Ticket {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    int Id;
//    Random random = new Random();
//    StringBuilder sb = new StringBuilder();
//    String candidateChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";

    //String ticketNo = sb.append(candidateChars.charAt(random.nextInt(candidateChars.length()))).toString();

    String ticketNo = new Random().ints(48, 122)
            .filter(i -> (i < 58 || i > 64) && (i < 91 || i > 96))
            .limit(10)
            .collect(StringBuilder::new, StringBuilder::appendCodePoint, StringBuilder::append)
            .toString();

    String Status;
    @ManyToOne(cascade = CascadeType.PERSIST)
    private User user;

    @ManyToOne(cascade = CascadeType.PERSIST)
    private Train train;

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public Train getTrain() {
        return train;
    }

    public void setTrain(Train train) {
        this.train = train;
    }

    public int getId() {
        return Id;
    }

    public void setId(int id) {
        Id = id;
    }

    public String getTicketNo() {
        return ticketNo;
    }

    public void setTicketNo(String ticketNo) {
        this.ticketNo = ticketNo;
    }

    public String getStatus() {
        return Status;
    }

    public void setStatus(String status) {
        Status = status;
    }
}
