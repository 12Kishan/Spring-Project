package org.example.server1.Entities;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import org.springframework.format.annotation.DateTimeFormat;

//import java.sql.Time;
import java.util.Date;
import java.util.List;

@Entity
public class Train {

    @Id
    @GeneratedValue
    int trainId;

    String trainName;
    String trainNumber;
    String fromLocation;
    String toLocation;
    int totalSeats;
    int totalBookedSeats=0;
    int ticketamount=0;

    @JsonIgnore
    @OneToMany(cascade = CascadeType.ALL)
    List<Ticket> trainTicket;

    @DateTimeFormat(pattern = "yyyy-MM-dd")
    @JsonFormat(shape= JsonFormat.Shape.STRING, pattern="yyyy-MM-dd")
    Date trainDate;

    @DateTimeFormat(pattern = "HH:mm")
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "HH:mm")
    Date trainTime;

    public int getTicketamount() {
        return ticketamount;
    }

    public void setTicketamount(int ticketamount) {
        this.ticketamount = ticketamount;
    }

    public int getTotalSeats() {
        return totalSeats;
    }

    public void setTotalSeats(int totalSeats) {
        this.totalSeats = totalSeats;
    }

    public int getTrainId() {
        return trainId;
    }

    public void setTrainId(int trainId) {
        this.trainId = trainId;
    }

    public String getTrainName() {
        return trainName;
    }

    public void setTrainName(String trainName) {
        this.trainName = trainName;
    }

    public String getTrainNumber() {
        return trainNumber;
    }

    public void setTrainNumber(String trainNumber) {
        this.trainNumber = trainNumber;
    }

    public String getFromLocation() {
        return fromLocation;
    }

    public void setFromLocation(String fromLocation) {
        this.fromLocation = fromLocation;
    }

    public String getToLocation() {
        return toLocation;
    }

    public void setToLocation(String toLocation) {
        this.toLocation = toLocation;
    }

    public Date getTrainDate() {
        return trainDate;
    }

    public void setTrainDate(Date trainDate) {
        this.trainDate = trainDate;
    }

    public Date getTrainTime() {
        return trainTime;
    }

    public void setTrainTime(Date trainTime) {
        this.trainTime = trainTime;
    }

    public int getTotalBookedSeats() {
        return totalBookedSeats;
    }

    public void setTotalBookedSeats(int totalbookedSeats) {
        this.totalBookedSeats = totalbookedSeats;
    }

    public List<Ticket> getTrainTicket() {
        return trainTicket;
    }

    public void setTrainTicket(List<Ticket> trainTicket) {
        this.trainTicket = trainTicket;
    }
}
