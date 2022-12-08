package com.marketPc.api.model;

import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "productos")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class Producto {

    @Id
    private String id;
    private String titulo;
    private String imagen;
    private String precio;
    private String categoria;
    private String descripcion;




}
