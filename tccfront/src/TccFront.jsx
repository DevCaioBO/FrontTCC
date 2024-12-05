import Header from "./components/Header/Header"

import {BrowserRouter,Routes,Route} from 'react-router-dom'

import InitialPage from "./pages/InitialPage/InitialPage"





function TccFront() {
 

  return (

    <div>
      
      
      <BrowserRouter>
      <header>
        <Header/>
      </header>
      <Routes>
      <Route path="/" element={<InitialPage/>} />
          <Route path="/cursos" element={<div>Chama component de curso</div>} />
          <Route path="/ProcessoSeletivo" element={<div>Chama component de ProcessoSeletivo</div>} />
          <Route path="/FaleConosco" element={<div>Chama component de Fale Conosco</div>} />
          <Route path="/Alunos" element={<div>Chama component de Login</div>} />
        </Routes>
      </BrowserRouter>
    </div>

  )
}

export default TccFront
