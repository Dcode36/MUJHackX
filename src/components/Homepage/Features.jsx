import React from 'react'
import '../css/Features.css'
const Features = () => {
    return (

        <section className="features-area features-one" id='feature'>
            <div className="container">
                <div className="row justify-content-center"  >
                    <div className="col-lg-6">
                        <div className="section-title text-center" >
                            <h3 className="title">Key Features of   <h3 classNameName='text-dark fs-italic'><i className="bi bi-patch-check"></i> Certify</h3>
                            </h3>
                            <p className="text">
                                What we offer
                            </p>
                        </div>

                    </div>
                </div>

                <div className="row justify-content-center" >
                    <div className="col-lg-4 col-md-7 col-sm-9" >
                        <div className="features-style-one text-center bg-dark" style={{ minHeight: "300px" }} >
                            <div className="features-icon">
                                <i class="bi bi-file-earmark-lock"></i>
                            </div>
                            <div className="features-content">
                                <h4 className="features-title text-white">Blockchain Security</h4>

                            </div>
                        </div>

                    </div>
                    <div className="col-lg-4 col-md-7 col-sm-9">
                        <div className="features-style-one text-center  bg-dark" style={{ minHeight: "300px" }}>
                            <div className="features-icon">

                                <i class="bi bi-file-check"></i>
                            </div>
                            <div className="features-content">
                                <h4 className="features-title text-white" >Instant Verification</h4>

                                <div className="features-btn rounded-buttons">

                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="col-lg-4 col-md-7 col-sm-9">
                        <div className="features-style-one text-center  bg-dark" style={{ minHeight: "300px" }}>
                            <div className="features-icon">

                                <i class="bi bi-globe-central-south-asia"></i>
                            </div>
                            <div className="features-content">
                                <h4 className="features-title text-white" >Global Accessibility</h4>

                                <div className="features-btn rounded-buttons">

                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>

        </section>

    )
}

export default Features
