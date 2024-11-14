import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ttt from '../assets/images/Img.png';
import vvv from '../assets/images/blue.png';

const Resume = () => {
    const [activeLink, setActiveLink] = useState("#about");

    const handleSetActive = (link) => {
        setActiveLink(link);
    };

    // Content for each section
    const renderContent = () => {
        switch (activeLink) {
            case "#about":
                return (
                    <p style={{ fontSize: '15px' }}>
                        I’m a <strong style={{ color: "#095D89" }}>Brand & UX/UI designer</strong> with a mission to transform ideas into engaging digital experiences.My goal is to craft solutions that not only enhance user satisfaction but also strengthen the core identity of your brand. With each project, I strive to design interfaces that are visually stunning, intuitive, and purpose-driven.
                    </p>
                );
            case "#experience":
                return (
                    <p style={{ fontSize: '15px' }}>
                        With over 2 years of experience in the industry, I have worked on diverse projects, focusing on enhancing user interfaces and creating cohesive brand experiences...
                    </p>
                );
            case "#education":
                return (
                    <p style={{ fontSize: '15px' }}>
                        I hold a degree in Graphic Design and Digital Media from [University Name]. I’ve continuously updated my skills through various certifications and courses.
                    </p>
                );
            case "#skills":
                return (
                    <ul style={{ fontSize: '15px' }}>
                        <li>UI/UX Design</li>
                        <li>Graphic Design</li>
                        <li>Adobe Suite (Photoshop, Illustrator, XD)</li>
                        <li>Prototyping Tools (Figma, Sketch)</li>
                    </ul>
                );
            case "#certifications":
                return (
                    <ul style={{ fontSize: '15px' }}>
                        <li>Certified UX Designer - [Certification Authority]</li>
                        <li>Adobe Certified Expert - Photoshop</li>
                        <li>Professional Diploma in Digital Marketing - [Institution]</li>
                    </ul>
                );
            default:
                return null;
        }
    };

    return (
        <div style={{ backgroundColor: '#F5F5F5' }}>
            <div className="container mt-5">
                <h1 className="fw-bold lh-1 pt-3 mb-3 text-center" style={{ fontFamily: "'Syne', sans-serif", color: '#095D89' }}>
                    All my key details, right her
                    <span style={{
                        display: 'inline-block',
                        width: '45px',
                        height: '45px',
                        backgroundColor: '#FFB646',
                        borderRadius: '50%',
                        textAlign: 'center',
                    }}>e</span>
                </h1>

                {/* Custom Navigation */}
                <div className="d-flex justify-content-center my-4 pb-5">
                    <nav className="nav">
                        <Link 
                            to="#about" 
                            onClick={() => handleSetActive("#about")}
                            style={{
                                padding: '10px 15px',
                                textDecoration: 'none',
                                color: activeLink === "#about" ? 'white' : '#095D89',
                                backgroundColor: activeLink === "#about" ? '#095D89' : '#FFFFFF',
                                borderRadius: '5px',
                                margin: '0 5px',

                            }}
                            className="mb-2"
                        >
                            About me <img src={vvv} alt="Logo" style={{ height: "12px" }} />
                        </Link>
                        <Link 
                            to="#experience" 
                            onClick={() => handleSetActive("#experience")}
                            style={{
                                padding: '10px 15px',
                                textDecoration: 'none',
                                color: activeLink === "#experience" ? 'white' : '#095D89',
                                backgroundColor: activeLink === "#experience" ? '#095D89' : '#FFFFFF',
                                borderRadius: '5px',
                                margin: '0 5px',

                            }}
                            className="mb-2"
                        >
                            Experience <img src={vvv} alt="Logo" style={{ height: "12px" }} />
                        </Link>
                        <Link 
                            to="#education" 
                            onClick={() => handleSetActive("#education")}
                            style={{
                                padding: '10px 15px',
                                textDecoration: 'none',
                                color: activeLink === "#education" ? 'white' : '#095D89',
                                backgroundColor: activeLink === "#education" ? '#095D89' : '#FFFFFF',
                                borderRadius: '5px',
                                margin: '0 5px',

                            }}
                            className="mb-2"
                        >
                            Education <img src={vvv} alt="Logo" style={{ height: "12px" }} />
                        </Link>
                        <Link 
                            to="#skills" 
                            onClick={() => handleSetActive("#skills")}
                            style={{
                                padding: '10px 15px',
                                textDecoration: 'none',
                                color: activeLink === "#skills" ? 'white' : '#095D89',
                                backgroundColor: activeLink === "#skills" ? '#095D89' : '#FFFFFF',
                                borderRadius: '5px',
                                margin: '0 5px',

                            }}
                            className="mb-2"
                        >
                            Skills <img src={vvv} alt="Logo" style={{ height: "12px" }} />
                        </Link>
                        <Link 
                            to="#certifications" 
                            onClick={() => handleSetActive("#certifications")}
                            style={{
                                padding: '10px 15px',
                                textDecoration: 'none',
                                color: activeLink === "#certifications" ? 'white' : '#095D89',
                                backgroundColor: activeLink === "#certifications" ? '#095D89' : '#FFFFFF',
                                borderRadius: '5px',
                                margin: '0 5px',

                            }}
                            className="mb-2"
                        >
                            Certifications  <img src={vvv} alt="Logo" style={{ height: "12px" }} />
                        </Link>
                    </nav>
                </div>

                <div className="row align-items-center">
                    <div className="col-md-1"></div>
                    <div className="col-md-5 text-center">
                        <div className="profile-image rounded-circle bg-primary text-center">
                            <img src={ttt} className="card-img-top" alt="Profile" />
                        </div>
                    </div>

                    {/* Profile Details - Dynamic Content */}
                    <div className="col-md-5">
                        {renderContent()}
                        <ul className="list-unstyled">
                            <li><strong style={{ paddingRight: "30px" }}>Name</strong> <span style={{ color: '#095D89' }}>Constant-Law</span></li><br />
                            <li><strong style={{ paddingRight: "30px" }}>Nationality</strong> <span style={{ color: '#095D89' }}>Beninese</span></li><br />
                            <li><strong style={{ paddingRight: "30px" }}>Phone</strong> <span style={{ color: '#095D89' }}> (+229) 94722719</span></li><br />
                            <li><strong style={{ paddingRight: "30px" }}>Email</strong> <Link to="mailto:hello@constantlaw.me"><span style={{ color: '#095D89' }}>hello@constantlaw.me</span></Link></li><br />
                            <li><strong style={{ paddingRight: "30px" }}>Experience</strong> <span style={{ color: '#095D89' }}>02+ years</span></li><br />
                            <li><strong style={{ paddingRight: "30px" }}>Freelance</strong> <span style={{ color: '#095D89' }}>Available</span></li><br />
                            <li><strong style={{ paddingRight: "30px" }}>Language</strong> <span style={{ color: '#095D89' }}> French, English</span></li><br />
                        </ul>
                    </div>
                    <div className="col-md-1"></div>
                </div>

                <div className="col-md-12 pb-5">
                    <div className="text-center mt-4">
                        <Link to="/path-to-resume.pdf" className="btn w-100 text-white" style={{ backgroundColor: '#095D89' }}>
                            Download my Resume <i className="fas fa-download"></i>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Resume;
