package org.example.server1.Entities;


import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import org.example.server1.Entities.Ticket;

import java.util.List;

@Entity
public class User {

    @Id
    @GeneratedValue
    int userId;
    String userName;
    boolean isAdmin = false;
    String email;
    String password;
    String contactNo;

    @JsonIgnore
    @OneToMany(cascade = CascadeType.ALL)
    public List<Ticket> ticketUser;


    public List<Ticket> getTicketUser() {
        return ticketUser;
    }

    public void setTicketUser(List<Ticket> ticketUser) {
        this.ticketUser = ticketUser;
    }

    public int getUserId() {
        return userId;
    }

    public void setUserId(int userId) {
        this.userId = userId;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public boolean isAdmin() {
        return isAdmin;
    }

    public void setAdmin(boolean admin) {
        isAdmin = admin;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getContactNo() {
        return contactNo;
    }

    public void setContactNo(String contactNo) {
        this.contactNo = contactNo;
    }
}
