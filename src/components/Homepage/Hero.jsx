import React from 'react';
import '../css/Hero.css'
import { useNavigate } from 'react-router-dom';
import { useUser } from '@clerk/clerk-react'


const Hero = () => {
    const navigate = useNavigate();

    const { isSignedIn } = useUser();
    const handleClick = () => {
        if (isSignedIn) {
            navigate('/preferences')
        } else {
            alert("Sign In First!", "Please Sign In before you Use Itineri.AI!", "error");
        }

    }
    return (
        <>
            <div className='grid' style={{minHeight:"80vh"}}>

                <div className="container hero d-flex justify-content-center align-items-center overflow-hidden flex-direction-column" style={{ flexDirection: 'column', borderBottom: '1px solid #0001' }} >
                    <div className="heading text-center py-5 mt-5">
                        <h1 className=' text-dark' style={{ fontSize: "58px", fontWeight: "bold" }}
                        > <span style={{ color: 'orange' }}>Revolutionize  </span>  Trust with <span className='text-primary'>Blockchain-Powered</span>Certificate Verification </h1>
                        <p style={{ fontSize: "25px" }} className='my-2 text-dark'
                        >Issue, Verify, and Protect Certificates with Unmatched SecurityIssue, Verify, and Protect Certificates with Unmatched Security</p>

                        <button className='btn btn-dark get-started mx-2' style={{ borderRadius: '30px' }}
                            onClick={handleClick}>Get Started <i class="bi bi-arrow-right"></i></button>

                        <button className='btn btn-white readmore' style={{ borderRadius: '30px' }}
                        > <a href="#about" className='text-dark'>Read More</a> </button>
                    </div>


                </div>

            </div>
        </>
    );
};

export default Hero;
