package org.example.server.services;

import org.example.server.Entities.Book;
import org.example.server.Entities.Student;
import org.example.server.repositories.StudentRepository;
import org.springframework.stereotype.Service;

@Service
public class StudentServices {

    private StudentRepository studentRepository;

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
}
