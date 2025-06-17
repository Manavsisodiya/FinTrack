import './Dashboard.css'
import Mainlogo from './Images/letter-f.png'
import Dash from './Images/home.png'
import Transactions from './Images/money.png'
import Budgets from './Images/chart-bars.png'
import Documents from './Images/file.png'
import Accounts from './Images/credit-card.png'
import Analytics from './Images/analytics.png'
import FinanceAI from './Images/chat.png'
import Profile from './Images/user.png'
import Settings from './Images/settings.png'
import search from './Images/circle.png'
import notification from './Images/notification.png'
import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from 'react'
import { auth } from "./firebase-config";

function Dashboard() {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });
        return () => unsubscribe();
    }, []);
    return (
        <>
            <div className='main'>
                <div className="headingsection">
                    <ul className='logohead'>
                        <li><img alt='mainlogo' className='mainlogo' src={Mainlogo}></img></li>
                        <li style={{ marginTop: '6px', marginLeft: '8px' }}>FinTrack</li>
                    </ul>
                    <ul className='logos' style={{ marginTop: '3rem' }}>
                        <li><img alt='logo' className='logo' src={Dash}></img></li>
                        <li style={{ marginTop: '3px', marginLeft: '8px' }}>Dashboard</li>
                    </ul>
                    <ul className='logos'>
                        <li><img alt='logo' className='logo' src={Transactions}></img></li>
                        <li style={{ marginTop: '3px', marginLeft: '8px' }}>Transactions</li>
                    </ul>
                    <ul className='logos'>
                        <li><img alt='logo' className='logo' src={Budgets}></img></li>
                        <li style={{ marginTop: '3px', marginLeft: '8px' }}>Budgets</li>
                    </ul>
                    <ul className='logos'>
                        <li><img alt='logo' className='logo' src={Documents}></img></li>
                        <li style={{ marginTop: '3px', marginLeft: '8px' }}>Documents</li>
                    </ul>
                    <ul className='logos'>
                        <li><img alt='logo' className='logo' src={Accounts}></img></li>
                        <li style={{ marginTop: '3px', marginLeft: '8px' }}>Accounts</li>
                    </ul>
                    <ul className='logos'>
                        <li><img alt='logo' className='logo' src={Analytics}></img></li>
                        <li style={{ marginTop: '3px', marginLeft: '8px' }}>Analytics</li>
                    </ul>
                    <ul className='logos'>
                        <li><img alt='logo' className='logo' src={FinanceAI}></img></li>
                        <li style={{ marginTop: '3px', marginLeft: '8px' }}>Finance AI</li>
                    </ul>
                    <ul className='logos' style={{ marginTop: "8rem" }}>
                        <li><img alt='logo' className='logo' src={Profile}></img></li>
                        <li style={{ marginTop: '3px', marginLeft: '8px' }}>Profile</li>
                    </ul>
                    <ul className='logos' style={{ marginTop: '-10px' }}>
                        <li><img alt='logo' className='logo' src={Settings}></img></li>
                        <li style={{ marginTop: '3px', marginLeft: '8px' }}>Settings</li>
                    </ul>
                </div>

                <div className="contentsection">
                    <div className='dashboardnav'>
                        <p>Welcome Back, Manav!</p>
                        <h4>It is the best time to manage your finances</h4>
                        <img alt='search' className='searchimg' src={search}></img>
                        
                        <img alt='notification' className='notification' src={notification}></img>

                        {user ? (
                            <div className='userinformation'>
                                {user.photoURL && (
                                    <img src={user.photoURL} alt="Profile" className='user_img' />
                                )}
                                <div className='usertext'>
                                    <h2 id='userdetail'>{user ? user.displayName || "User" : "Guest"}</h2>
                                    <p>{user ? user.email || "User" : "Guest"}</p>
                                </div>
                            </div>
                        ) : (
                            <p>Guest</p>
                        )}


                    </div>
                    <div className='dashboardnav2'>
                        <div className='totalbalance'><p>Total balance</p></div>
                        <div className='income'><p>Income</p></div>
                        <div className='expense'><p>Expense</p></div>
                        <div className='totalsavings'><p>Total savings</p></div>
                    </div>
                    <div className='dashboardnav3'>
                        <div className='moneyflow'>Money Flow</div>
                        <div className='budget'> Budget</div>
                    </div>
                    <div className='dashboardnav4'>
                        <div className='recenttransactions'>Recent Transactions</div>
                        <div className='savinggoals'>Saving Goals</div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Dashboard;
