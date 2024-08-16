
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Landing from './pages/Landing';


function App() {
  const [users, setUsers] = useState([
    {
      username: "sindhu",
      password: "3009"
    }
  ]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login users={users} setUsers={setUsers} />} />
        <Route path='/signup' element={<Signup users={users} setUsers={setUsers} />} />
        <Route path='/landing' element={<Landing />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
