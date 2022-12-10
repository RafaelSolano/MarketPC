import { useEffect, useState } from "react";
import axios from "axios";
import { PRODUCTS_CREATES_GET_ENDPOINT } from "../connections/endpoints";
import { Col, Container, Row } from "react-bootstrap";
import { ProductoCard } from "../components/ProductoCard";

const ProductosCreados = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    axios
      .get(PRODUCTS_CREATES_GET_ENDPOINT)
      .then((respuesta) => {
        setProductos(respuesta.data);
      })
      .catch((err) => {
        console.err(err);
      });
  }, []);
  return (
    
    <Container className="mt-3 mb-3">
      <h3 className="text-center">Todos los productos</h3>
      <Container className="display-flex  " >
          <Row className="">
            {productos.map((producto) => (
              <ProductoCard   key = {producto.idProducto} producto={producto} />
            ))}
          </Row>
      
      </Container>
    </Container>
  );
};
export { ProductosCreados };
