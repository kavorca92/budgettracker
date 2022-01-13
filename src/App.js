import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import { useAuthContext } from './hooks/useAuthContext'

//pages & components
import Home from "./pages/home/Home"
import Login from "./pages/login/Login"
import Signup from './pages/signup/Signup';
import Navbar from './components/Navbar';

function App() {
  const { authIsReady, user } = useAuthContext()

  return (
    <div className="App">
      {authIsReady && (
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route 
            exact path="/" 
            element={user ? <Home /> : <Navigate to="/login"/>} 
          />
          <Route 
            exact path="/login" 
            element={!user ? <Login/> : <Navigate to="/"/>}
            />
          <Route 
            exact path="/signup" 
            element={!user ? <Signup/> : <Navigate to="/"/>}
          />
        </Routes>
      </BrowserRouter>
      )}
      
    </div>
  );
}

export default App
