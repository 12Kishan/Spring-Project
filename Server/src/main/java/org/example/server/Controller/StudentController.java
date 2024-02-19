package org.example.server.Controller;


import org.example.server.Entities.Student;
import org.example.server.services.StudentServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("api/student")
@CrossOrigin
public class StudentController  {

    @Autowired
    private StudentServices studentServices;

    @RequestMapping(value = "",method = RequestMethod.POST)
    public ResponseEntity<?> addStudent(@RequestBody Student student)
    {
        Student newStudent = studentServices.saveOrUpdate(student);
        return new ResponseEntity<>(newStudent, HttpStatus.CREATED);
    }

    @RequestMapping(value = "/all", method = RequestMethod.GET)
    public Iterable<Student> getAllStudents() {
        return studentServices.findAll();
    }

    @RequestMapping(value = "/{StudentId}", method = RequestMethod.GET)
    public ResponseEntity<?> getStudentById(@PathVariable("StudentId") long id) {
        Student student = studentServices.findById(id);

        if(student == null){
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }

        return new ResponseEntity<>(student, HttpStatus.OK);
    }

    @RequestMapping(value = "/{StudentId}", method = RequestMethod.DELETE)
    public ResponseEntity<?> deleteStudent(@PathVariable("StudentId") long id) {

        boolean canDelete = studentServices.canDelete(id);

        if (canDelete) {
            boolean deleted = studentServices.delete(id);
            if (deleted) {
                return new ResponseEntity<>(HttpStatus.OK);
            } else {
                return new ResponseEntity<>("Failed to delete book", HttpStatus.INTERNAL_SERVER_ERROR);
            }
        } else {
            return new ResponseEntity<>("First off all return book then delete the account", HttpStatus.BAD_REQUEST);
        }
    }

    @PutMapping( "/{studentId}/book/{bookId}")
    public ResponseEntity<?> IssueBook(
            @PathVariable int studentId,
            @PathVariable int bookId
    )
    {
        if(studentServices.canIssue(bookId))
        {
            studentServices.IsueBooktoStudent(studentId,bookId);
            return new ResponseEntity<>(HttpStatus.OK);
        }
        else {
            return new ResponseEntity<>("All book is by students", HttpStatus.BAD_REQUEST);
        }
    }

}
