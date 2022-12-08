import '../css/App.css';
import { Navegacion } from '../layouts/Navegacion';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ProductosCreados } from '../pages/ProductosCreados';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ProductoDetalle } from '../pages/ProductoDetalle';
import { SingIn } from '../pages/SignIn';
import { SingUp } from '../pages/SignUp';
function App() {
  return (
    <BrowserRouter>
      <Navegacion/>
      <Routes>
        <Route path ='/'         element = { <ProductosCreados  /> }></Route>
        <Route path ='/producto/:id' element = { <ProductoDetalle   /> }></Route>
        <Route path ='/signin'   element = { <SingIn            /> }></Route> 
        <Route path ='/signup'   element = { <SingUp            /> }></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
