import { Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './componentes/organismos/Navbar'
import Inicio from './paginas/Inicio'
import Login from './paginas/Login'
import ProductosM from './paginas/ProductosM'
import Contacto from './paginas/Contacto'
import Nosotros from './paginas/Nosotros'
import Footer from './componentes/organismos/Footer'
import DetalleProductoM from './paginas/DetalleProductoM'
import Servicios from './paginas/Servicios'
import Novedades from './paginas/Novedades'


function App() {
  return(
    <>
      <Navbar />
      <Routes>

        <Route
          path="/"
          element={<Inicio/>}
        />
        <Route
          path="/login"
          element={<Login/>}
        />
        <Route
          path="/productos"
          element={<ProductosM/>}
        />
        <Route
          path="/contacto"
          element={<Contacto/>}
        />
        <Route
          path="/nosotros"
          element={<Nosotros/>}
        />
        <Route
          path="/producto/:id"
          element={<DetalleProductoM />}
        />
        <Route
          path="/inicio"
          element={<Inicio/>}
        />
        <Route
          path="/servicios"
          element={<Servicios/>}
        />
        <Route
          path="/novedades"
          element={<Novedades/>}
        />
      </Routes>

      <Footer />
    </>
  )
}
export default App