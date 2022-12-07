import '../css/App.css';
import { Navegacion } from '../components/layouts/Navegacion';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ProductosCreados } from '../components/pages/ProductosCreados';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ProductoDetalle } from '../components/pages/ProductoDetalle';
import { SingIn } from '../components/pages/SignIn';
import { SingUp } from '../components/pages/SignUp';
function App() {
  return (
    <BrowserRouter>
      <Navegacion/>
      <Routes>
        <Route path ='/'         element = { <ProductosCreados  /> }></Route>
        <Route path ='/producto' element = { <ProductoDetalle   /> }></Route>
        <Route path ='/signin'   element = { <SingIn            /> }></Route> 
        <Route path ='/signup'   element = { <SingUp            /> }></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
