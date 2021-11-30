import { BrowserRouter, Route, Routes } from 'react-router-dom'


//pages & components
import Home from "./pages/home/Home"
import Login from "./pages/login/Login"
import Signup from './pages/signup/Signup';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login/>}/>
          <Route exact path="/signup" element={<Signup/>}/>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App
