// import React, { useEffect, useState } from 'react'
// import { useNavigate } from 'react-router-dom';
// import { handleError, handleSuccess } from '../utils';
// import { ToastContainer } from 'react-toastify';

// function Home() {
//     const [loggedInUser, setLoggedInUser] = useState('');
//     const [products, setProducts] = useState('');
//     const navigate = useNavigate();
//     useEffect(() => {
//         setLoggedInUser(localStorage.getItem('loggedInUser'))
//     }, [])

//     const handleLogout = (e) => {
//         localStorage.removeItem('token');
//         localStorage.removeItem('loggedInUser');
//         handleSuccess('User Loggedout');
//         setTimeout(() => {
//             navigate('/login');
//         }, 1000)
//     }

//     const fetchProducts = async () => {
//         try {
//             const url = "https://localhost:8080/products";
//             const headers = {
//                 headers: {
//                     'Authorization': localStorage.getItem('token')
//                 }
//             }
//             const response = await fetch(url, headers);
//             const result = await response.json();
//             console.log(result);
//             setProducts(result);
//         } catch (err) {
//             handleError(err);
//         }
//     }
//     useEffect(() => {
//         fetchProducts()
//     }, [])

//     return (
//         <div>
//             <h1>Welcome {loggedInUser}</h1>
//             <button onClick={handleLogout}>Logout</button>
//             <div>
//                 {
//                     products && products?.map((item, index) => (
//                         <ul key={index}>
//                             <span>{item.name} : {item.price}</span>
//                         </ul>
//                     ))
//                 }
//             </div>
//             <ToastContainer />
//         </div>
//     )
// }

// export default Home
//////////////////////////////////////////////////////////
//my change

// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { ToastContainer } from 'react-toastify';
// import './Home.css';

// function Home() {
//     const [loggedInUser, setLoggedInUser] = useState('');
//     const navigate = useNavigate();

//     useEffect(() => {
//         setLoggedInUser(localStorage.getItem('loggedInUser'));
//     }, []);

//     const handleLogout = () => {
//         localStorage.removeItem('token');
//         localStorage.removeItem('loggedInUser');
//         navigate('/login');
//     };

//     return (
//         <div className="dashboard-container">
//             <div className="sidebar">
//                 <h2>Dashboard</h2>
//                 <ul>
//                     <li>Overview</li>
//                     <li>Profile</li>
//                     <li>Settings</li>
//                     <li>Logout</li>
//                 </ul>
//             </div>
//             <div className="main-content">
//                 <div className="header">
//                     <h1>Welcome, {loggedInUser}</h1>
//                     <button onClick={handleLogout}>Logout</button>
//                 </div>
//                 <div className="content">
//                     <div className="card">
//                         <h3>Random Stat 1</h3>
//                         <p>Some random content...</p>
//                     </div>
//                     <div className="card">
//                         <h3>Random Stat 2</h3>
//                         <p>Some more random content...</p>
//                     </div>
//                     <div className="card">
//                         <h3>Random Stat 3</h3>
//                         <p>Even more random content...</p>
//                     </div>
//                 </div>
//             </div>
//             <ToastContainer />
//         </div>
//     );
// }

// export default Home;

// adding buttons 

import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';
import { handleSuccess } from '../utils';
import { ToastContainer } from 'react-toastify';

function Home() {
    const [loggedInUser, setLoggedInUser] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        setLoggedInUser(localStorage.getItem('loggedInUser'));
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('loggedInUser');
        handleSuccess('User Logged out');
        setTimeout(() => {
            navigate('/login');
        }, 1000);
    };

    const buttons = [
        { name: 'Random Profile Photo', path: '/profile-photo' },
        { name: 'Trip History', path: '/trip-history' },
        { name: 'Set Alert', path: '/set-alert' },
        { name: 'Update SMS Alerts', path: '/update-sms' },
        { name: 'Crashes Detected', path: '/crashes-detected' },
        { name: 'Edit Profile', path: '/edit-profile' },
    ];

    const stats = [
        { label: 'Recent Trip Data' },
        { label: 'Average Speed' },
        { label: 'Route' },
        { label: 'Max Speed' },
        { label: 'Duration' },
        { label: 'Total Distance' },
        { label: 'Speed Alerts' },
    ];



    return (
        <div className="dashboard-container">
            <div className="sidebar">
                <h2>Dashboard</h2>
                <div className="button-group">
                    {buttons.map((button, index) => (
                        <button 
                            key={index} 
                            onClick={() => navigate(button.path)} 
                            className="dashboard-button">
                            {button.name}
                        </button>
                    ))}
                </div>
            </div>
            <div className="main-content">
                <h1>Welcome, {loggedInUser}</h1>
                <div className="stats">
                    {stats.map((stat, index) => (
                        <div key={index} className="stat-item">
                            {stat.label}
                        </div>
                    ))}
                </div>
                <button onClick={handleLogout} className="logout-button">Logout</button>
                <button onClick={() => navigate('/parent-mode')} className="parent-mode-button">Parent Mode</button>
                <ToastContainer />
            </div>
        </div>
    );

}





















export default Home;
