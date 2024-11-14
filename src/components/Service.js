import React from 'react';
import rtt from '../assets/images/yellow.png';

const Service = () => {
    return (
        <div className="container my-5">
            {/* Title and description */}
            <div className="row mb-4">
                <div className="col-md-8">
                    <p className="" style={{ fontFamily: "'Syne One', sans-serif", color: '#FFB646' }}>Services</p>
                    <h1 className="fw-bold lh-1 mb-3 " style={{ fontSize: '50px', fontFamily: "'Syne One', sans-serif", color: '#095D89' }}>

                        <span style={{
                            display: 'inline-block',
                            width: '60px',
                            height: '60px',
                            backgroundColor: '#FFB646',
                            borderRadius: '50%',
                            textAlign: 'center',

                            fontSize: '50px',

                        }}>M</span>y specialties
                    </h1>
                    <p >
                        Synergistically seize front-end methods of empowerment without extensive core competencies. Progressively repurpose alternative platforms
                    </p>
                </div>
            </div>

            {/* Specialties grid */}
            <div className="container my-5">
                <div className="row d-flex align-items-stretch">
                    <div className="col-md-9">
                        <div className="row">
                            <div className="col-md-4 col-6 mb-5">
                                <div className="p-5" style={{ backgroundColor: '#F8F9FA', borderRadius: '12px' }}>
                                    <i className="fas fa-mobile-alt fa-2x mb-3" style={{ color: '#095D89' }}></i>
                                    <h6 style={{ color: '#095D89', fontFamily: "'Poppins', sans-serif" }}>Mobile Apps Design</h6>
                                </div>
                            </div>
                            <div className="col-md-4 col-6 mb-5">
                                <div className="p-5" style={{ backgroundColor: '#F8F9FA', borderRadius: '12px' }}>
                                    <i className="fas fa-mobile-alt fa-2x mb-3" style={{ color: '#095D89' }}></i>
                                    <h6 style={{ color: '#095D89', fontFamily: "'Poppins', sans-serif" }}>Mobile Apps Design</h6>
                                </div>
                            </div>
                            <div className="col-md-4 col-6 mb-5">
                                <div className="p-5" style={{ backgroundColor: '#F8F9FA', borderRadius: '12px' }}>
                                    <i className="fas fa-desktop fa-2x mb-3" style={{ color: '#095D89' }}></i>
                                    <h6 style={{ color: '#095D89', fontFamily: "'Poppins', sans-serif" }}>Web Design</h6>
                                </div>
                            </div>
                            <div className="col-md-4 col-6 mb-5">
                                <div className="p-5" style={{ backgroundColor: '#F8F9FA', borderRadius: '12px' }}>
                                    <i className="fas fa-pencil-alt fa-2x mb-3" style={{ color: '#095D89' }}></i>
                                    <h6 style={{ color: '#095D89', fontFamily: "'Poppins', sans-serif" }}>Brand Design</h6>
                                </div>
                            </div>
                            <div className="col-md-4 col-6 mb-5">
                                <div className="p-5" style={{ backgroundColor: '#F8F9FA', borderRadius: '12px' }}>
                                    <i className="fas fa-chart-line fa-2x mb-3" style={{ color: '#095D89' }}></i>
                                    <h6 style={{ color: '#095D89', fontFamily: "'Poppins', sans-serif" }}>SEO Google</h6>
                                </div>
                            </div>
                            <div className="col-md-4 col-6 mb-5">
                                <div className="p-5" style={{ backgroundColor: '#F8F9FA', borderRadius: '12px' }}>
                                    <i className="fas fa-code fa-2x mb-3" style={{ color: '#095D89' }}></i>
                                    <h6 style={{ color: '#095D89', fontFamily: "'Poppins', sans-serif" }}>Webflow Development</h6>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-3 d-flex flex-column " style={{ backgroundColor: '#095D89', borderRadius: '12px', height: '390px' }}>
                        <div className=" text-white w-100 p-4 text-end">
                            <img src={rtt} alt="Logo" style={{ height: "30px", paddingRight: '8px' }} />
                        </div>
                        <div className=" text-white w-100 p-4 mt-auto">

                            <p style={{ fontSize: '14px', fontWeight: 'bold', color: '#FFB646' }}>SAY HELLO!</p>
                            <h5 style={{ fontFamily: "'Poppins', sans-serif" }}>hello@constantlaw.me</h5>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Service;
