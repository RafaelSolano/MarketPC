package com.marketPc.api.service;

import com.marketPc.api.model.Producto;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface ProductoService {


    public List<Producto> listar();
    public ResponseEntity<Object> guardar (Producto producto, HttpHeaders headers);
    public ResponseEntity<Producto> buscarPorId (String id);
    public ResponseEntity<Producto> modificar(Producto producto, HttpHeaders headers);
    public boolean existsById (String id);
    public ResponseEntity<Producto>eliminar(String id);
}
