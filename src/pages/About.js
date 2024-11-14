import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import rtt from '../assets/images/yellow.png';
import Content from '../assets/images/Content.png';
import Service from '../components/Service';
import Resume from '../components/Resume';
import TestimonialCarousel from '../components/TestimonialCarousel';
import Partenariat from '../components/Partenariat';


const About = () => {
  return (
    <>
      <Header />

      <div className=" " style={{ backgroundColor: "#FFE9D9" }}>
        <div className="container pb-5 pt-5 " >
          <div class="row align-items-center g-lg-5 py-5">
            <div className="col-md-10 mx-auto col-lg-5">
              <img src={Content} className="d-block mx-lg-auto img-fluid" alt="" width="700" height="500" />
            </div>
            <div class="col-lg-7 text-center text-lg-start">
              <div className="row align-items-center pb-3">
                <p className="" style={{ fontFamily: "'Syne', sans-serif", color: '#FFB646' }}>About me</p>



              </div>

              <p className="fw-bold lh-1 mb-3 d-none d-md-flex" style={{ fontSize: '20px', fontFamily: "'Poppins', sans-serif", color: '#095D89' }}>
                BRAND & UX/UI  Designer | Google UX Design Certified
              </p>
              <p className="col-lg-9 " style={{ color: '#080808', fontFamily: "'Syne', sans-serif", fontSize: '20px' }}>As a designer, I am driven by the belief that thoughtful design has the power to bring people closer and create lasting, positive change. My work focuses on crafting inclusive, user-centered experiences that resonate with real human needs.</p>
              <p className="col-lg-9 " >Whether through branding, web design, App design, or UX/UI projects, I aim to deliver solutions that are not only visually compelling but also meaningful and impactful. I’m passionate about collaborating with like-minded individuals and businesses to push the boundaries of creativity and make a tangible difference in the world. Together, we can build a future where design transforms lives</p>
              <div className="col-lg-9 " style={{ backgroundColor: "#095D89", borderRadius: '10px' }}>
                <p type="button" className="pt-2 px-4 " style={{ color: '#FF9330' }} >SAY HELLO! </p>
                <div className="d-flex align-items-center justify-content-between" >
                  <Link to="#" className="nav-link text-white  px-4 py-3" style={{ fontFamily: "'Syne', sans-serif", }}>
                    hello@constantlaw.me
                  </Link>
                  <img src={rtt} alt="Logo" style={{ height: "30px", paddingRight: '8px' }} />
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>
      <div className=" " style={{ backgroundColor: "#F5F5F5" }}>
        <div className="container  " >
          <div class="row align-items-center g-lg-5 py-5">
            <div className="col-md-6">
              <h1 className="fw-bold  mb-3" style={{ fontFamily: "'Poppins', sans-serif", color: '#095D89' }}>
                My vision is to create happiness
              </h1>
              <p className="col-lg-9 " style={{ fontFamily: "'Syne', sans-serif" }}> My vision is to transform the world through design by creating visual and interactive solutions that foster inclusion and human connection.
                I strongly believe that each project is an opportunity to improve people's lives by integrating user-centered experiences that reflect authenticity, impact, and sustainability. My goal is to contribute to a future where creativity and innovation make interactions more accessible, engaging, and meaningful for everyone</p>
            </div>
            <div class="col-md-6">


              <h1 className="fw-bold lh-1 mb-3 " style={{ fontSize: '50px', fontFamily: "'Syne', sans-serif", color: '#095D89' }}>
                <span style={{
                  display: 'inline-block',
                  width: '60px',
                  height: '60px',
                  backgroundColor: '#FFB646',
                  borderRadius: '50%',
                  textAlign: 'center',

                  fontSize: '50px',

                }}>O2 </span> +</h1>
              <h1 style={{
                color: 'white', fontFamily: "'Poppins', sans-serif", textShadow: `
        -1px -1px 0 #000, /* top-left */
         1px -1px 0 #000, /* top-right */
        -1px  1px 0 #000, /* bottom-left */
         1px  1px 0 #000  /* bottom-right */
    `}}>Years of <br /> experience</h1>
              <div className="d-flex align-items-center" >
                <div className="" >
                  <h4  className="" >
                    1.5k
                  </h4>
                  <p  className="" >
                    Worldwide client
                  </p>
                </div>
                <div className="" style={{ paddingLeft: '20px' }} >
                  <h4  className="" >
                    3.6k
                  </h4>
                  <p  className="" >
                    Job done successfully
                  </p>
                </div>
              </div>

            </div>

          </div>
        </div>
      </div>

      <Service />
      <Resume />
      <TestimonialCarousel />
      <Partenariat />
      <Footer />
    </>
  );
};

export default About;
