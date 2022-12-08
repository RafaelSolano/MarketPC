package com.marketPc.api.repository;

import com.marketPc.api.model.Producto;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProductoRepository  extends MongoRepository<Producto, String> {
}
