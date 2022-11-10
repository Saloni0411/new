import './App.css';
import Nav from './components/Nav.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignUp from './components/SignUp';
import Login from './components/Login';
import Contact from './components/Contact'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
        <Route path='/' element={<SignUp/>}></Route>
        <Route path='/Login' element={<Login/>}></Route>
        <Route path='/Contact' element={<Contact/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

