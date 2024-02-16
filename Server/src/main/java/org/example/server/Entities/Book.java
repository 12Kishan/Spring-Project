package org.example.server.Entities;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;

@Entity
public class Book {
    @Id
    @GeneratedValue
    private int BookId;
    private int NoOfIssueBook;
    private String BookName;
    private String BookAuthor;
    private int TotalBooks;

    public int getBookId() {
        return BookId;
    }

    public void setBookId(int bookId) {
        BookId = bookId;
    }

    public int getNoOfIssueBook() {
        return NoOfIssueBook;
    }

    public void setNoOfIssueBook(int noOfIssueBook) {
        NoOfIssueBook = noOfIssueBook;
    }

    public String getBookName() {
        return BookName;
    }

    public void setBookName(String bookName) {
        BookName = bookName;
    }

    public String getBookAuthor() {
        return BookAuthor;
    }

    public void setBookAuthor(String bookAuthor) {
        BookAuthor = bookAuthor;
    }

    public int getTotalBooks() {
        return TotalBooks;
    }

    public void setTotalBooks(int totalBooks) {
        TotalBooks = totalBooks;
    }
}
