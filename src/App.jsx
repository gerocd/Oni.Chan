import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/home/Home';
import Calendario from './components/home/calendario/Calendario';
import HomeLog from './components/login-register/HomeLog';
import HomeReg from './components/login-register/HomeReg';
import Contactos from './components/home/contactos/Contactos';
import Axios from './components/axios/Axios';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/login" element={<HomeLog />}/>
        <Route path="/register" element={<HomeReg />}/>
        <Route path="/register" element={<HomeReg />}/>
        <Route path="/calendario" element={<Calendario />} />
        <Route path="/contactos" element={<Contactos />}/>
        <Route path="/axios" element={<Axios />}/>

      </Routes>
    </BrowserRouter>
  );
}

export default App
