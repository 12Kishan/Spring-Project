package org.example.server.services;

import org.example.server.Entities.Book;
import org.example.server.Entities.Student;
import org.example.server.repositories.BookRepository;
import org.example.server.repositories.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Set;

@Service
public class StudentServices {

    @Autowired
    private StudentRepository studentRepository;

    @Autowired
    private BookRepository bookRepository;

    public Student saveOrUpdate(Student student)
    {
        return studentRepository.save(student);
    }

    public Student findById(long Id)
    {
        return studentRepository.findById(Id);
    }

    public Iterable<Student> findAll() {
        return studentRepository.findAll();
    }

    public boolean delete(long Id)
    {
        Student student=findById(Id);

        studentRepository.delete(student);
        return true;
    }


    public boolean canDelete(long id) {
        Student student = findById(id);
        if (student == null) {
            return false; // Student not found
        }
        if (student.getBook().isEmpty()) {
            studentRepository.delete(student);
            return true; // Deletion successful
        } else {
            return false; // Student has books associated with them
        }
    }

    public Student IsueBooktoStudent(int studentId, int bookId) {

        Set<Book> bookSet =null;
        Student student=studentRepository.findById(studentId);
        Book book=bookRepository.findById(bookId);
        int issuebook = book.getNoOfIssueBook() + 1;
        book.setNoOfIssueBook(issuebook);
        bookRepository.save(book);
        bookSet = student.getBook();
        bookSet.add(book);
        student.setBook(bookSet);
        return studentRepository.save(student);
    }


    public boolean canIssue(int bookId) {
        Book book=bookRepository.findById(bookId);
        if(book.getNoOfIssueBook()<book.getTotalBooks())
            return true;
        else
            return false;
    }
}
