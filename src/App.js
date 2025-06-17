import './App.css';
import Navbar from './Navbar';
import Hero from './Hero';
import Login from './Login';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Dashboard from './Dashboard';
import ConsentRedirect from './ConsentRedirect';

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
        <Route path="/consent-redirect" element={<ConsentRedirect />} />

      </Routes>
    
    </Router>
  );
}

export default App;
