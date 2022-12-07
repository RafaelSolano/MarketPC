import { useEffect, useState} from "react";
import axios from "axios";
import { PRODUCTS_CREATES_GET_ENDPOINT } from "../../connections/endpoints";
import {Col, Container, Row} from "react-bootstrap";

const ProductosCreados= ()=>{
    const [productos, setProductos] = useState([])

    useEffect(() => {
        axios.get(PRODUCTS_CREATES_GET_ENDPOINT)
        .then(respuesta => {
            setProductos(respuesta.data)
        }).catch(err =>{
            console.err(err);
        })
    
    }, []);
    return (
        <Container className = "mt-3 mb-3">
            <Row>
                <Col sm='12' md="8" lg="6">
                    <h3 className="text-center">Productos Creados</h3>
                    <div>
                        {productos.map(producto=> <img src="{producto.imagen}" />)}
                    </div>
                
                </Col>
            </Row>
        
        </Container>
    )

}

export{ProductosCreados};