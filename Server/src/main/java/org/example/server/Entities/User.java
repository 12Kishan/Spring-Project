package org.example.server.Entities;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class User {
    @Id
    int UserId;

    private String UserName;

}
