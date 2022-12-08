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
      <Row className="justify-content-center">
        <Col sm="12" md="8" lg="6">
          <h3 className="text-center">Productos Creados</h3>
          <div>
            {productos.map((producto) => (
              <ProductoCard key = {producto.idProducto} producto={producto} />
            ))}
          </div>
        </Col>
      </Row>
    </Container>
  );
};
export { ProductosCreados };
//falta  ultima hora
//https://unabedu-my.sharepoint.com/personal/rodolfo_ortega2_o365_unab_edu_co/_layouts/15/stream.aspx?id=%2Fpersonal%2Frodolfo%5Fortega2%5Fo365%5Funab%5Fedu%5Fco%2FDocuments%2FC4%2DG30%2DDESARROLLO%20DE%20APLICACIONES%20WEB%2FSprint%203%20%2D%20Desarrollo%20Frontend%20%2D%2026%5F11%5F2022%20%2D%2008%5F00%20am%2D20221126%5F081130%2DGrabaci%C3%B3n%20de%20la%20reuni%C3%B3n%2Emp4&ga=1
