import { useState } from "react"
import { Form, Button } from "react-bootstrap/"



function ProductoFormulario({callback}){

    const [titulo, setTitulo] = useState("")
    const [imagen, setImagen] = useState("")
    const [precio, setPrecio] = useState("")
    const [categoria, setCategoria] = useState("")
    const [descripcion, setDescripcion] = useState("")

    const enviarFormulario = (e)=>{
        e.preventDefault()
        callback({titulo, imagen, precio, categoria, descripcion})
    }

    return(
        <Form onSubmit= {enviarFormulario}>
            
            <Form.Group className="mb=3" controlId="titulo" >
                <Form.Label>Titulo</Form.Label>
                <Form.Control  type="text" Placeholder= "Ingresar titulo" required value={titulo} onChange={e=>setTitulo(e.target.value)}/>
            </Form.Group>

            <Form.Group className="mb=3" controlId="titulo" >
                <Form.Label>Imagen</Form.Label>
                <Form.Control  type="text" Placeholder= "Ingresar imagen" required value={imagen} onChange={e=>setImagen(e.target.value)}/>
            </Form.Group>

            <Form.Group className="mb=3" controlId="titulo" >
                <Form.Label>Precio</Form.Label>
                <Form.Control  type="text" Placeholder= "Ingresar precio" required value={precio} onChange={e=>setPrecio(e.target.value)}/>
            </Form.Group>

            <Form.Group className="mb=3" controlId="titulo" >
                <Form.Label>Categoria</Form.Label>
                <Form.Control  type="text" Placeholder= "Ingresar categoria" required value={categoria} onChange={e=>setCategoria(e.target.value)}/>
            </Form.Group>

            <Form.Group className="mb=3" controlId="titulo" >
                <Form.Label>Descripcion</Form.Label>
                <Form.Control  type="text" Placeholder= "Ingresar descripcion" required value={descripcion} onChange={e=>setDescripcion(e.target.value)}/>
            </Form.Group>
                <Button  variant ="primary" type="submit" > Crear producto</Button>          

        </Form>
    )
}
export  default ProductoFormulario;



