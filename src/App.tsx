import './App.css';
import NavBar from './NavBar/NavBar';
import UserModal from './NavBar/UserModal';
import SideCart from './NavBar/SideCart'
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Books from './Pages/Books/Books';
import About from './Pages/About/About';
import Error404 from './Pages/Error404';

function App() {

  return (
    <BrowserRouter>
      <div className="App">
          <NavBar/>
          <UserModal/>
  
          {/* Side Cart */}
          <SideCart/>
  
          <div className='container'>
            <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/home' element={<Home/>}/>
              <Route path='/books' element={<Books/>}/>
              <Route path='/about' element={<About/>}/>
              <Route path='*' element={<Error404/>}/>
            </Routes>
          </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
