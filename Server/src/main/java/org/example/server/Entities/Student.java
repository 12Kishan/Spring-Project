package org.example.server.Entities;

import jakarta.persistence.*;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Entity
public class Student {
    @Id
@GeneratedValue
    int StudentId;
    String StudentName;
    boolean IsLibraryMember = false;

    @ManyToMany(cascade = CascadeType.ALL)
    @JoinTable(name = "student_book")
    private Set<Book> book=new HashSet<>();
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

    public Set<Book> getBook() {
        return book;
    }

    public void setBook(Set<Book> book) {
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
