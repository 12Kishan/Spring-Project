package org.example.server1.services;

import org.example.server1.Entities.Train;
import org.example.server1.Entities.User;
import org.example.server1.repositories.TrainRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TrainServices {

    @Autowired
    private TrainRepository trainRepository;

    public Train save(Train train){
        return trainRepository.save(train);
    }
    public Train findById(long Id)
    {
        return trainRepository.findById(Id);
    }

    public Iterable<Train> findAll() {
        return trainRepository.findAll();
    }

    public boolean delete(long Id)
    {

        Train train=findById(Id);

        trainRepository.delete(train);
        return true;
    }


}
