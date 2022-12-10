import axios from'axios'
import { useNavigate } from 'react-router-dom'
import { PRODUCT_CREATE_POST_ENDPOINT } from '../connections/endpoints'
import Container from'react-bootstrap/Container'
import ProductoFormulario from '../components/ProductoFormulario'
import { Col, Row } from 'react-bootstrap'
import Swal from 'sweetalert2'

function CrearProducto () {
    const navegar = useNavigate()
    const crear = (producto)=>{
        axios.post(PRODUCT_CREATE_POST_ENDPOINT, producto)
        .then(respuesta=>{

          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'El producto fue creado',
            showConfirmButton: false,
            timer: 1500
          })
            console.log(respuesta.data);
            navegar("/")
            console.log(producto);

        })
        .catch(err=>{
            console.log(err);
        })
        console.log(producto);
    }

    return(
      <Container className="mt-3 mb-3">
        <Row className="justify-content-center">
          <Col sm="12" md="8" lg="6">
            <h3>Crear Productos</h3>
            <Row>
              <ProductoFormulario callback ={crear}></ProductoFormulario>
            </Row>
          </Col>
        </Row>
      </Container>
    );
}

export   {CrearProducto};

