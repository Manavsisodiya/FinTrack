import './App.css';
import Navbar from './Navbar';
import Hero from './Hero';
import Login from './Login';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Dashboard from './Dashboard';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <>
          <Navbar />
          <Hero></Hero>
          </>
        } />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard/>} />

      </Routes>
    
    </Router>
  );
}

export default App;
