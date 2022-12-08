package com.marketPc.api.service.serviceImpl;

import com.marketPc.api.model.Producto;
import com.marketPc.api.repository.ProductoRepository;
import com.marketPc.api.service.ProductoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.List;
import java.util.Optional;

@Service
public class ProductoServiceImpl implements ProductoService {


    @Autowired
    private ProductoRepository productoRepository;

    //Listar Productos
    @Override
    @Transactional(readOnly = true)
    public List<Producto> listar() {
        return productoRepository.findAll();
    }

    //Crear Producto
    @Override
    @Transactional(readOnly = false)
    public ResponseEntity<Object> guardar(Producto producto, HttpHeaders headers) {
        if(producto.getId()!=null) {
            return ResponseEntity.badRequest().build();
        }
        Producto result= productoRepository.save(producto);
        return ResponseEntity.ok(result);
    }

    //Buscar por id
    @Override
    public ResponseEntity<Producto> buscarPorId( @PathVariable String id) {
        Optional<Producto> pacienteopt =productoRepository.findById(id.toString());
        return pacienteopt.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    //Modificar product

    @Override
    public ResponseEntity<Producto> modificar(Producto producto, HttpHeaders headers) {
        if (producto.getId() ==null) {
            return ResponseEntity.badRequest().build();
        }
        if(!productoRepository.existsById(producto.getId())){
            return ResponseEntity.notFound().build();
        }
        Producto result = productoRepository.save(producto);
        return ResponseEntity.ok(result);
    }

    @Override
    public boolean existsById(String id) {
        return productoRepository.existsById(id);
    }

    //Eliminar Producto
    @Override
    public ResponseEntity<Producto> eliminar(String id) {
        if(!productoRepository.existsById(id)){
            return ResponseEntity.notFound().build();
        }
        productoRepository.deleteById(id);
        return ResponseEntity.noContent().build();
    }
}
