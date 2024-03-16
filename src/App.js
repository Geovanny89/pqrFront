import { Route, Routes} from 'react-router-dom';
// import axios from 'axios';
import './App.css';
import PqrsCreate from './components/USER/Pqrs/PqrsCreate';
import Register from './components/Register/Register';
import Login from './components/Login/Login';


import Home from './components/Home/Home';
import HomeUsers from './components/Users/HomeUser/HomeUsers';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';
// axios.defaults.baseURL = 'https://pqrctc.onrender.com/api/';




function App() {
 

  return (
    <div className="App">
      <Routes>
        <Route path="/createpqrs" element={<PqrsCreate />} />
        <Route path="/home" element={<ProtectedRoute><Home /></ProtectedRoute>} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Login />} />
        <Route path="/homeUser" element={<ProtectedRoute><HomeUsers /></ProtectedRoute>} />
      </Routes>
    </div>
  );
}

export default App;

