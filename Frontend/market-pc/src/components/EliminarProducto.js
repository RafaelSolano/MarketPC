import axios from "axios";
import { Button } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
import { PRODUCT_DELETE_ENDPOINT } from "../connections/endpoints";
import Swal from 'sweetalert2'

const EliminarProducto=({id,titulo})=>{
    const navegar = useNavigate()

    const eliminar = async()=>{
        axios.delete(`${PRODUCT_DELETE_ENDPOINT}/${id}`)
        .then(respuesta =>{
            navegar("/")
        }).catch(err=>{
            console.error(err)
        })
    }
    const crearAlerta=()=>{
        console.log('Eliminando');

        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
              confirmButton: 'btn btn-success',
              cancelButton: 'btn btn-danger'
            },
            buttonsStyling: false
          })
          
          swalWithBootstrapButtons.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, cancel!',
            reverseButtons: true
          }).then((result) => {
            if (result.isConfirmed) {
                eliminar()
              swalWithBootstrapButtons.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
              )
            } else if (
              /* Read more about handling dismissals below */
              result.dismiss === Swal.DismissReason.cancel
            ) {
              swalWithBootstrapButtons.fire(
                'Cancelled',
                'Your imaginary file is safe :)',
                'error'
              )
            }
          })

    }
    
    
    return(
        <Button 
            variant="danger"
            size="sm"
            onClick={crearAlerta} 
            >Eliminar</Button>
    )
}
export{ EliminarProducto}

