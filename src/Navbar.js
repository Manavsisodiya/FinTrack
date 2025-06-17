import { Link, useNavigate } from 'react-router-dom';
import './App.css';
import logo2 from './Images/letter-f.png';
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import { auth } from "./firebase-config";

function Navbar() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const logout = () => {
    signOut(auth)
      .then(() => {
        setUser(null);
        localStorage.removeItem("user");
        navigate("/login"); // Redirect to login or home
      })
      .catch((error) => {
        console.error("Error during logout:", error);
      });
  };

  return (
    <>
      <div className="nav">
        <img src={logo2} className='logomaincon' alt='logo' />
        <h3 className='logotxt'>Fintrack</h3>
        <h2 style={{ marginLeft: '60px' }}>Dashboard</h2>
        <h2>Transactions</h2>
        <h2>Budgets</h2>
        <h2>Reports</h2>
        <h2>Finance AI</h2>
        <h2>About</h2>
        <h2>Contact</h2>

        {user ? (
          <>
            <span style={{ marginLeft: 'auto', marginRight: '10px' }}>Hi, {user.displayName}</span>
            <button className='loginbtn' onClick={logout}>Logout</button>
          </>
        ) : (
          <>
            <Link to='/login'><button className='loginbtn'>Log In</button></Link>
            <button className='signupbtn'>Sign Up</button>
          </>
        )}
      </div>
    </>
  );
}

export default Navbar;
