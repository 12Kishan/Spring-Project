package org.example.server.Entities;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import java.util.List;

@Entity
public class Student {
    @Id
    int StudentId;
    String StudentName;
    boolean IsLibraryMember = false;

    @OneToMany(cascade = CascadeType.ALL)
    private List<Book> book;
    String Email;
    String Password;

    public int getStudentId() {
        return StudentId;
    }

    public void setStudentId(int studentId) {
        StudentId = studentId;
    }

    public String getStudentName() {
        return StudentName;
    }

    public void setStudentName(String studentName) {
        StudentName = studentName;
    }

    public boolean isLibraryMember() {
        return IsLibraryMember;
    }

    public void setLibraryMember(boolean libraryMember) {
        IsLibraryMember = libraryMember;
    }

    public List<Book> getBook() {
        return book;
    }

    public void setBook(List<Book> book) {
        this.book = book;
    }

    public String getEmail() {
        return Email;
    }

    public void setEmail(String email) {
        Email = email;
    }

    public String getPassword() {
        return Password;
    }

    public void setPassword(String password) {
        Password = password;
    }



}
