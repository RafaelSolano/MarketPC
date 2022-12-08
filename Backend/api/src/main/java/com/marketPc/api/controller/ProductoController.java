package com.marketPc.api.controller;

import com.marketPc.api.model.Producto;
import com.marketPc.api.service.ProductoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin("*")
public class ProductoController {

    @Autowired
    ProductoService productoService;

    //Listar todos los Productos
    @GetMapping("/productos")
    public List<Producto> findAll(){
        return productoService.listar();
    }
    //Agregar un Producto
    @PostMapping("/producto")
    public ResponseEntity<Object> create (@RequestBody Producto producto,@RequestHeader  HttpHeaders headers){
        return productoService.guardar(producto, headers);
    }
    //Buscar producto por id
    @GetMapping("/producto/{id}")
    public ResponseEntity<Producto> findById(@PathVariable String id){
        return productoService.buscarPorId(id);
    }
    //Modificar Paciente por id
    @PutMapping("/producto")
    public ResponseEntity<Producto> update(@RequestBody Producto producto, @RequestHeader HttpHeaders headers){
        return productoService.modificar(producto, headers);
    }
    //Eliminar por id
    @DeleteMapping("/producto/{id}")
    public ResponseEntity<Producto> delete(@PathVariable String id){
        return productoService.eliminar(id);
    }


}
