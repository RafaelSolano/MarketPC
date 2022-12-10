import { useState } from "react"
import { Form, Button } from "react-bootstrap/"



function ProductoFormularioEditar({callback},producto){

    const [titulo,setTitulo]= useState("")
    const [imagen, setImagen] = useState("")
    const [precio, setPrecio] = useState("")
    const [categoria, setCategoria] = useState("")
    const [descripcion, setDescripcion] = useState("")

    const enviarFormulario = (e)=>{
        e.preventDefault()
        callback({titulo, imagen, precio, categoria, descripcion})
    }

    return(
        <Form onSubmit={enviarFormulario}>
            
            <Form.Group className="mb=3" controlId="titulo" >
                <Form.Label>Titulo</Form.Label>
                <Form.Control  type="text"  required defaultValue ={producto.titulo} onChange={e=>setTitulo(e.target.value)}/>
            </Form.Group>

            <Form.Group className="mb=3" controlId="titulo" >
                <Form.Label>Imagen</Form.Label>
                <Form.Control  type="text"  required defaultValue={producto.imagen} onChange={e=>setImagen(e.target.value)}/>
            </Form.Group>

            <Form.Group className="mb=3" controlId="titulo" >
                <Form.Label>Precio</Form.Label>
                <Form.Control  type="text"  required defaultValue={producto.precio} onChange={e=>setPrecio(e.target.value)}/>
            </Form.Group>

            <Form.Group className="mb=3" controlId="titulo" >
                <Form.Label>Categoria</Form.Label>
                <Form.Control  type="text"  required defaultValue={producto.categoria} onChange={e=>setCategoria(e.target.value)}/>
            </Form.Group>

            <Form.Group className="mb=3" controlId="titulo" >
                <Form.Label>Descripcion</Form.Label>
                <Form.Control  type="text"  required defaultValue={producto.descripcion} onChange={e=>setDescripcion(e.target.value)}/>
            </Form.Group>
                <Button  variant ="primary" type="submit" > Guardar</Button>          

        </Form>
    )
}
export  default ProductoFormularioEditar;



