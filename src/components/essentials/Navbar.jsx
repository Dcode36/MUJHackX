import React, { useEffect } from 'react';
import { SignedIn, SignedOut, SignInButton, UserButton, useUser } from '@clerk/clerk-react';
import axios from 'axios';  // Import Axios
import '../css/Navbar.css';

const Navbar = () => {
    const { user, isSignedIn } = useUser();

    // Get the user ID if the user is signed in
    const userId = isSignedIn ? user.id : null;

    // Toggle active class on the navbar-toggler when clicked
    const toggleNavbar = () => {
        const navbarToggler = document.querySelector(".navbar-one .navbar-toggler");
        navbarToggler.classList.toggle("active");
    };

    // Function to send user data to the backend
    const sendUserDataToBackend = async () => {
        try {
            if (isSignedIn) {
                const userData =  user;
                // Make the POST request using Axios
                await axios.post('https://t83s14q4-8888.inc1.devtunnels.ms/login', userData);
                console.log('User data sent successfully');
            }
        } catch (error) {
            console.error('Error sending user data:', error);
        }
    };

    // useEffect to send the user data when the user is signed in
    useEffect(() => {
        if (isSignedIn) {
            sendUserDataToBackend();
        }
    }, [isSignedIn, user]);

    return (
        <>
            {/*====== NAVBAR ONE PART START ======*/}
            <section className="navbar-area navbar-one" style={{ borderBottom: '1px solid #0001' }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <nav className="navbar navbar-expand-lg">
                                <a className="navbar-brand" href="/">
                                    <h3 className='text-white fs-italic'><i className="bi bi-patch-check"></i> Certify</h3>
                                </a>
                                <button
                                    className="navbar-toggler"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#navbarOne"
                                    aria-controls="navbarOne"
                                    aria-expanded="false"
                                    aria-label="Toggle navigation"
                                    onClick={toggleNavbar}
                                >
                                    <span className="toggler-icon"></span>
                                    <span className="toggler-icon"></span>
                                    <span className="toggler-icon"></span>
                                </button>
                                <div
                                    className="collapse navbar-collapse sub-menu-bar"
                                    id="navbarOne"
                                >
                                    <ul className="navbar-nav m-auto pb-1" style={{ borderBottom: '1px solid #0001' }}>
                                        <li className="nav-item">
                                            <a href="/docs" className='fs-5'>Docs</a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="/courses" className='fs-5'>Courses</a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="/verify" className='fs-5'>Verify</a>
                                        </li>
                                        {userId === 'user_2i1Jd8QmkN4p4BXRzzRpputcGH8' && (
                                            <li className="nav-item">
                                                <a href="/issuer" className='fs-5'>Issue</a>
                                            </li>
                                        )}
                                        <div className="d-lg-none d-sm-block m-auto">
                                            <ul>
                                                <li>
                                                    <SignedOut>
                                                        <SignInButton className="sign-in-btn btn" />
                                                    </SignedOut>
                                                    <SignedIn>
                                                        <div className='d-flex align-items-center gap-3'>
                                                            {isSignedIn ? (
                                                                <>
                                                                    <span className='fs-5 text-dark'>Hello! <span className='fs-6'>{user.firstName}</span></span>
                                                                    <UserButton />
                                                                </>
                                                            ) : (
                                                                <SignInButton className="sign-in-btn btn" />
                                                            )}
                                                        </div>
                                                    </SignedIn>
                                                </li>
                                            </ul>
                                        </div>
                                    </ul>
                                </div>
                                <div className="navbar-btn d-none d-sm-inline-block">
                                    <ul>
                                        <li>
                                            <SignedOut>
                                                <SignInButton className="sign-in-btn btn" />
                                            </SignedOut>
                                            <SignedIn>
                                                <div className='d-flex align-items-center gap-3'>
                                                    {isSignedIn ? (
                                                        <>
                                                            <span className='fs-6 text-dark'>Hello! <span className='fs-6'>{user.firstName}</span></span>
                                                            <UserButton />
                                                        </>
                                                    ) : (
                                                        <SignInButton className="sign-in-btn btn" />
                                                    )}
                                                </div>
                                            </SignedIn>
                                        </li>
                                    </ul>
                                </div>
                            </nav>
                            {/* navbar */}
                        </div>
                    </div>
                    {/* row */}
                </div>
                {/* container */}
            </section>
            {/*====== NAVBAR ONE PART ENDS ======*/}
        </>
    );
};

export default Navbar;
