package org.example.server1.repositories;

import org.example.server1.Entities.User;
import org.springframework.data.repository.CrudRepository;

public interface UserRepository extends CrudRepository<User,Long> {

    User findById(long id);
    User findByEmail(String email);
}
