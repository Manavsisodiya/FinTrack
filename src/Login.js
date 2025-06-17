import './Login.css'
import logo from './Images/letter-f.png'
import Loginimg from './Images/login.jpeg'
import Google from './Images/google.png'
import { auth, provider } from './firebase-config';
import { signInWithPopup } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
function Login() {
  const navigate = useNavigate();

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        console.log("User signed in:", user);
        // Optionally store user in localStorage or context
        localStorage.setItem("user", JSON.stringify(user));
        navigate('/dashboard'); // redirect to dashboard or home
      })
      .catch((error) => {
        console.error("Error signing in", error.message);
      });
  };

  return (
    <>
    <div className='LoginSection'>
      <div className='FormSection'>
         <img src={logo} alt='logo' className='Logo'></img><span className='txtfin'>FinTrack.</span>
         <p className='txthead'>Sign in to <span> FinTrack</span></p>
         <button className='googlebtn' onClick={handleGoogleSignIn}><img src={Google} className='google' alt='logo'></img><span>Sign in with Google</span></button>
        <hr></hr>
        <h6>Or With Email</h6>
        <form>
          <input type='email' name='email' placeholder='Enter Your Email'/>
          <input type='password' name='password' placeholder='Enter Your Password'/>
          <input type='checkbox' name='checkbox' className='check'/><span>Remember me</span>
          <p className='pass'>Forgot Password?</p>
          <input type='submit' name='signin' value='Sign In' style={{marginTop:'4rem',width:'27rem',fontFamily:'"Inter", sans-serif',backgroundColor:'#4a5ee5',color:'whitesmoke',border:'none'}} className='signinbtn2'></input>
          <h4>Don't have an account?<span2>Sign up</span2></h4>
        </form>
        <h5>Privacy Policy</h5>
        <h3>Copyright ©</h3>
      </div>
      <div className='ImgSection'>
          <img src={Loginimg} className='loginimg' alt='loginimg'></img>
          <p>All Your Finances. One Place.</p>
          <h6>Easily track your bank, crypto, and stock accounts in one place. Get real-time insights, monitor spending, and make the smarter financial decisions — all from one dashboard.</h6>
      </div>
    </div>
    </>
  );
}

export default Login;
