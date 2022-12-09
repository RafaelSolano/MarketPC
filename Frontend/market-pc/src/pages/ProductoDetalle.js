import { useEffect, useState } from "react";
import axios from "axios";
import { PRODUCT_DEATAIL_GET_ENDPOINT } from "../connections/endpoints";
import { Card, Col, Container,  Row } from "react-bootstrap";
import { Link,  useNavigate, useParams } from "react-router-dom";
import { EliminarProducto } from "../components/EliminarProducto";
import { EditarProducto } from "../components/EditarProducto";

const ProductoDetalle = () => {
  const [producto, setProducto] = useState([]);
  const {id} = useParams();
  const navegar = useNavigate();
  useEffect(() => {
    axios
      .get(`${PRODUCT_DEATAIL_GET_ENDPOINT}/${id}`)
      .then((respuesta) => {
        setProducto(respuesta.data);
      })
      .catch((err) => {
        console.err(err);
        navegar(-1)
      });
  }, [id, navegar]);

  return (
  <Container className="mt-3 mb-3">
    <h1>Producto detalle</h1>
      <Row className="justify-content-center">    
        <h3>{producto.categoria}</h3>
        <Col sm="12" md="8" lg="6">
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={producto.imagen} />
            <Card.Body>
              <Card.Title>
                <Link to={`/producto/${producto.id}`}>
                  {producto.titulo}
                </Link>
              </Card.Title>
              <Card.Title>${producto.precio} COP</Card.Title>
              <Card.Text>{producto.descripcion} </Card.Text>
              
            </Card.Body>
            <Card.Footer>
              <EliminarProducto id={producto.id} titulo ={producto.titulo} />
              <EditarProducto producto={producto} ></EditarProducto>
            </Card.Footer>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};
export { ProductoDetalle };
