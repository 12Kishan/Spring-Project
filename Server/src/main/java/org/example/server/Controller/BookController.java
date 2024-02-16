package org.example.server.Controller;


import org.example.server.Entities.Book;
import org.example.server.services.BookServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("api/book")
@CrossOrigin
public class BookController {
    @Autowired
    private BookServices bookServices;

    @RequestMapping(value = "",method = RequestMethod.POST)
    public ResponseEntity<?> addBook(@RequestBody Book book)
    {
        Book newBook = bookServices.saveOrUpdate(book);
        return new ResponseEntity<>(newBook, HttpStatus.CREATED);
    }

    @RequestMapping(value = "/all", method = RequestMethod.GET)
    public Iterable<Book> getAllBooks() {
        return bookServices.findAll();
    }

    @RequestMapping(value = "/{bookId}", method = RequestMethod.GET)
    public ResponseEntity<?> getBookById(@PathVariable("bookId") long id) {
        Book book = bookServices.findById(id);

        if(book == null){
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }

        return new ResponseEntity<>(book, HttpStatus.OK);
    }

    @RequestMapping(value = "/{bookId}", method = RequestMethod.DELETE)
    public ResponseEntity<?> deleteBook(@PathVariable("bookId") long id) {
        boolean canDelete = bookServices.canDelete(id);
        if (canDelete) {
            boolean deleted = bookServices.delete(id);
            if (deleted) {
                return new ResponseEntity<>(HttpStatus.OK);
            } else {
                return new ResponseEntity<>("Failed to delete book", HttpStatus.INTERNAL_SERVER_ERROR);
            }
        } else {
            return new ResponseEntity<>("Book cannot be deleted because it has been booked or has not been returned", HttpStatus.BAD_REQUEST);
        }
    }

}
