package org.example.server.services;

import org.example.server.Entities.Book;
import org.example.server.repositories.BookRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class BookServices {
    @Autowired
    private BookRepository bookRepository;

    public Book saveOrUpdate(Book book)
    {
        return bookRepository.save(book);
    }

    public Book findById(long Id)
    {
        return bookRepository.findById(Id);
    }

    public Iterable<Book> findAll() {
        return bookRepository.findAll();
    }
    public boolean delete(long Id)
    {
        Book book=findById(Id);
        if(book.getNoOfIssueBook()!=0)
        {
            return false;
        }
        bookRepository.delete(book);
        return true;
    }

    public boolean canDelete(long id) {
        Book book = findById(id);
        return book.getNoOfIssueBook() == 0;
    }
}
