import './Hero.css'
import heroimg from './Images/heroimg3.png'
function Hero() {
  return (
    <>
    <div className='herosection'>
      <div className='herotxt'>
        <p className='txt'>Smart Finance<br/>Management with<br/><span>FinTrack</span></p>
        <p className='txt2'>Your AI-powered personal finance assistant designed for Indian<br/>users to track expenses,manage budgets,and gain valuable<br/> financial insights with support for all major Indian banks. </p>
      </div>
        <div className='herobtn'>
          <button className='button1'>Get Started Free </button>
          <button className='button2'>Subscribe</button>
        </div>
        <img src={heroimg}className='heroimg' alt='heroimg'/>
    </div>
    </>
  );
}

export default Hero;
