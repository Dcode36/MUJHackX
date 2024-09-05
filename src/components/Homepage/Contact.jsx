import React from 'react'
import '../css/Contact.css'
const Contact = () => {
    return (
        <div>
            <section className="contact-area contact-one features-area " id='contact'>
                <div className="container">
                    <div className="row d-flex justify-content-center">
                        <div className="col-xl-7 col-lg-8">
                            <div className="section-title mt-45">
                                <h3 className="title fs-1">Get in touch</h3>
                            </div>
                            <div className="contact-form form-style-four mt-15">
                                <form action="https://formsubmit.co/dcodeofficial36@gmail.com" method="POST">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-input mt-15">
                                                <label>Full Name</label>
                                                <div className="input-items default fs-1 d-flex align-items-center">
                                                    <i className="lni lni-user"></i>
                                                    <input required type="text" name='name' placeholder="Damodar Zanwar" />
                                                </div>
                                            </div>

                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-input mt-15">
                                                <label>Email Address</label>
                                                <div className="input-items default fs-1 d-flex align-items-center">
                                                    <i className="lni lni-envelope"></i>
                                                    <input required type="email" name='email' placeholder="hello@gmail.com" />
                                                </div>
                                            </div>

                                        </div>

                                        <div className="col-md-12">
                                            <div className="form-input mt-15">
                                                <label>Your Message</label>
                                                <div className="input-items default">
                                                    <i className="lni lni-pencil-alt"></i>
                                                    <textarea
                                                        required
                                                        placeholder="Type your message here"
                                                        name='message'
                                                    ></textarea>
                                                </div>
                                            </div>

                                        </div>
                                        <div className="col-md-12">
                                            <div className="single-form mt-15">
                                                <div className="input-form rounded-buttons">
                                                    <button
                                                        className="btn primary-btn rounded-full"
                                                        type="submit"
                                                    >
                                                        SEND MESSAGE
                                                    </button>
                                                </div>
                                            </div>

                                        </div>
                                    </div>

                                </form>
                            </div>

                        </div>

                    </div>

                </div>

                <footer className="footer-area footer-one mt-3">
                    <div className="footer-widget">
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-6 col-lg-4 col-sm-12">
                                    <div className="f-about">
                                        <div className="footer-logo fs-1 fw-bold">
                                            <i className="bi bi-patch-check"></i> Cerify
                                        </div>
                                        <p className="text">
                                            Revolutionize Trust with Blockchain-PoweredCertificate Verification

                                        </p>
                                    </div>
                                </div>
                                <div className="col-xl-2 col-lg-2 col-sm-4">
                                    <div className="footer-link">
                                        <h6 className="footer-title">Company</h6>
                                        <ul>
                                            <li><a href="/docs">Docs</a></li>
                                            <li><a href="/courses">Courses</a></li>
                                            <li><a href="/verify">Verify</a></li>
                                        </ul>
                                    </div>

                                </div>

                                <div className="col-xl-2 col-lg-3 col-sm-4">

                                    <div className="footer-contact">
                                        <h6 className="footer-title fs-5">Help & Suuport</h6>
                                        <ul>
                                            <li className='fs-5'>
                                                <i className="lni lni-map-marker "></i> Hackera, SGU,
                                                IND
                                            </li>
                                            <li className='fs-5'><i className="lni lni-phone-set"></i> +91 7719964183</li>
                                            <li className='fs-5'><i className="lni lni-envelope"></i> support@Itineriai.com</li>
                                        </ul>
                                    </div>

                                </div>
                            </div>

                        </div>
                        <span className='py-2'></span>
                    </div>

                    <div className="footer-copyright">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div
                                        className="
                  copyright
                  text-center
                  d-md-flex
                  justify-content-between
                  align-items-center
                  "
                                    >
                                        <p className="text">Copyright © 2024 Itineri.AI. All Rights Reserved</p>
                                    </div>

                                </div>
                            </div>

                        </div>

                    </div>

                </footer>

            </section>

        </div>
    )
}

export default Contact
