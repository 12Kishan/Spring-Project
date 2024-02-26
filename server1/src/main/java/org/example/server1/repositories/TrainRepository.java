package org.example.server1.repositories;


import org.example.server1.Entities.Train;
import org.springframework.data.repository.CrudRepository;

public interface TrainRepository extends CrudRepository<Train,Long> {
   Train findById(long id);
}
