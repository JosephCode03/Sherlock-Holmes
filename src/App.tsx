import './App.css';
import NavBar from './NavBar/NavBar';
import UserModal from './NavBar/UserModal';
import SideCart from './NavBar/SideCart'

function App() {

  return (
    <div className="App">
        <NavBar/>
        <UserModal/>

        {/* Side Cart */}
        <SideCart/>
    </div>
  );
}

export default App;
