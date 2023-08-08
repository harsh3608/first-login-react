import './styles/App.css';
import NavBar from './NavBar';
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import Login from './Login';
import Home from './Home';
import Register from './Register';
import NotFound from './NotFound';


const App = () => (
  <div>
    <NavBar />
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </BrowserRouter>
  </div>
)

export default App;
