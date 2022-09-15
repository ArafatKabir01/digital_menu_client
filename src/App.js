
import './App.css';
import Home from './pages/Home/Home';
import Navbar from './pages/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import ChooseFood from './pages/ChooseFood/ChooseFood';
import Purchaese from './pages/Purchaese/Purchaese';
import Login from './pages/Login/Login';
import RequireAuth from './pages/RequireAuth/RequireAuth';


function App() {
  return (
    <div  className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<RequireAuth>
          <Home/>
        </RequireAuth>}></Route>
        <Route path="chooseFood" element={<ChooseFood />}></Route>
        <Route path="purchase/:id" element={<Purchaese />}></Route>
        <Route path="login" element={<Login />}></Route>
      </Routes>
      
      
    </div>
  );
}

export default App;
