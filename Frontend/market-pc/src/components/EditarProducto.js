import { Button, Form } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import axios from "axios";
import { PRODUCT_UPDATE_PUT_ENDPOINT } from "../connections/endpoints";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Swal from "sweetalert2";
//import ProductoFormularioEditar from "./ProductoFormularioEditar";
//import ProductoFormularioEditar from "./ProductoFormularioEditar";

const EditarProducto = ({ producto }) => {
  //modal
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //Producto
  const [titulo, setTitulo] = useState("");
  const [imagen, setImagen] = useState("");
  const [precio, setPrecio] = useState("");
  const [categoria, setCategoria] = useState("");
  const [descripcion, setDescripcion] = useState("");

  //navigate
  const navegar = useNavigate()

  const enviarFormulario = (e) => {
    e.preventDefault()({ titulo, imagen, precio, categoria, descripcion });
  };

  ///Editar

  function editar() {
    //handleClose();
    const data = {
      id: producto.id,
      titulo: titulo,
      imagen: imagen,
      precio: precio,
      categoria: categoria,
      descripcion: descripcion,
    };

    console.log(data);
    axios
      .put(`${PRODUCT_UPDATE_PUT_ENDPOINT}`, data)
      .then((data) => {

        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'El producto fue Editado',
          showConfirmButton: false,
          timer: 1500
        })
        console.log(data);
       // navegar("/")
      })
      .catch((err) => {
        console.error(err);
      });
  }

  const crearModal = () => {
    handleShow();
  };
  return (
    <>
      <Button variant="primary" size="sm" onClick={crearModal}>
        Editar
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Editar Producto</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={editar}>
            <Form.Group className="mb=3" controlId="titulo">
              <Form.Label>Titulo</Form.Label>
              <Form.Control
                type="text"
                required
                defaultValue={producto.titulo}
                onChange={(e) => setTitulo(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb=3" controlId="titulo">
              <Form.Label>Imagen</Form.Label>
              <Form.Control
                type="text"
                required
                defaultValue={producto.imagen}
                onChange={(e) => setImagen(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb=3" controlId="titulo">
              <Form.Label>Precio</Form.Label>
              <Form.Control
                type="text"
                required
                defaultValue={producto.precio}
                onChange={(e) => setPrecio(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb=3" controlId="titulo">
              <Form.Label>Categoria</Form.Label>
              <Form.Control
                type="text"
                required
                defaultValue={producto.categoria}
                onChange={(e) => setCategoria(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb=3" controlId="titulo">
              <Form.Label>Descripcion</Form.Label>
              <Form.Control
                type="text"
                required
                defaultValue={producto.descripcion}
                onChange={(e) => setDescripcion(e.target.value)}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              
              
              Guardar Cambios
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
export { EditarProducto };
