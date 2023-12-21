import { Routes, Route } from "react-router-dom"
import NavBar from "./Components/NavBar"
import Sections from "./Components/Sections"
import Archivos from "./Components/pages/Archivos"
import Edificios from "./Components/pages/Edificios"
import Usuarios from "./Components/pages/Usuarios"
import SubirArchivo from "./Components/pages/SubirArchivo"
import Home from "./Components/pages/Home"
import AgregarEdificioForm from "./Components/Utils/AgregarEdificioForm"

function App() {

  return (
    <>
    <NavBar/>
    <Sections/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/archivos" element={<Archivos/>}/>
      <Route path="/usuarios" element={<Usuarios/>}/>
      <Route path="/subirArchivo" element={<SubirArchivo/>}/>
      <Route path="/edificios" element={<Edificios/>}/>
      <Route path="/agregarEdificio" element={<AgregarEdificioForm/>}/>
    </Routes>
    </>
  )
}

export default App
