package com.etax.repository;

import com.etax.model.User;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.Optional;

public interface UserRepository extends MongoRepository<User, String> {
    Optional<User> findByTin(String tin);
    boolean existsByTin(String tin);
}