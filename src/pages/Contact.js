import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { Link } from 'react-router-dom';
import zer from '../assets/images/1.png';


const Contact = () => {
  return (
    <>
      <Header />

      <div className="container pt-5">
        <div className="row  g-lg-5 py-5">
          <div className="col-md-1 "></div>
          <div className="col-md-5 text-center text-lg-start">
            <h1 className="fw-bold lh-1 mb-3 " style={{ fontSize: '50px', fontFamily: "'Syne ', sans-serif", color: '#095D89' }}>

              <span style={{
                display: 'inline-block',
                width: '60px',
                height: '60px',
                backgroundColor: '#FFB646',
                borderRadius: '50%',
                textAlign: 'center',

                fontSize: '50px',

              }}>L</span>et’s connect
            </h1>
            <div className="row border-bottom mb-3">
              <div className="col-md-1"><i className="fa-regular fa-envelope " style={{ color: '#095D89' }}></i></div>
              <div className="col-md-3">
                <h5 className="" style={{ color: '#095D89', fontFamily: "'Syne ', sans-serif", }}>Email me</h5>
                <h5 className="" style={{ color: '#095D89', fontFamily: "'Syne ', sans-serif", }}>hello@constantlaw.me</h5>
              </div>
            </div>
            <div className="row border-bottom mb-3">
              <div className="col-md-1"><i className="fa-regular fa-envelope " style={{ color: '#095D89' }}></i></div>
              <div className="col-md-3">
                <h5 className="" style={{ color: '#095D89', fontFamily: "'Syne ', sans-serif", }}>Call me</h5>
                <h5 className="" style={{ color: '#095D89', fontFamily: "'Syne ', sans-serif", }}>(+229) 94722719</h5>
              </div>
            </div>
            <div className="row border-bottom mb-3">
              <div className="col-md-1"><i className="fa-regular fa-envelope " style={{ color: '#095D89' }}></i></div>
              <div className="col-md-3">
                <h5 className="" style={{ color: '#095D89', fontFamily: "'Syne ', sans-serif", }}>My address</h5>
                <h5 className="" style={{ color: '#095D89', fontFamily: "'Syne ', sans-serif", }}>Cotonou - Benin</h5>
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-md-4"><p className=''  style={{ color: '#095D89', }}>Follow me </p> </div>
              <div className="col-md-4">
                <ul className="list-unstyled d-flex justify-content-center">
                  <li className="ms-3"><Link className="link-body-emphasis " to="#"><i style={{ color: '#095D89', }} className="fa-brands fa-behance"></i></Link></li>
                  <li className="ms-3"><Link className="link-body-emphasis " to="#"><i style={{ color: '#095D89', }} className="fa-brands fa-linkedin"></i></Link></li>
                  <li className="ms-3"><Link className="link-body-emphasis " to="#"><i style={{ color: '#095D89', }} className="fa-brands fa-instagram"></i></Link></li>
                  <li className="ms-3"><Link className="link-body-emphasis " to="#"><i style={{ color: '#095D89', fontSize: "17px" }} className="fa-brands fa-github"></i></Link></li>
                </ul>
              </div>


            </div>
          </div>
          <div className="col-md-6 ">
            <p className=''>Items with (*) marque are necessaries </p>
            <form className="row   ">
              <div className=" mb-3 col-md-6">
                <label for="" className="form-label"  style={{ color: '#095D89', }}>Name*</label>
                <input type="text" className="form-control" id="" placeholder="Your name" style={{ outline: 'none', boxShadow: 'none' }} />
              </div>
              <div className=" mb-3 col-md-6">
                <label for="" className="form-label"  style={{ color: '#095D89', }}>Email*</label>
                <input type="email" className="form-control" id="" placeholder="Your email" style={{ outline: 'none', boxShadow: 'none' }} />
              </div>
              <div className=" mb-3 col-md-6">
                <label for="floatingPassword" className="form-label"  style={{ color: '#095D89', }}>Phone</label>
                <input type="number" className="form-control" placeholder="Your number" style={{ outline: 'none', boxShadow: 'none' }} />

              </div>
              <div className=" mb-3 col-md-6">
                <label for="floatingPassword" className="form-label"  style={{ color: '#095D89', }}>Subject*</label>
                <input type="text" className="form-control" placeholder="Your subject" style={{ outline: 'none', boxShadow: 'none' }} />

              </div>
              <div className=" mb-3 col-md-12">
                <label for="floatingPassword" className="form-label"  style={{ color: '#095D89', }}>Message*</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" style={{ outline: 'none', boxShadow: 'none' }}></textarea>

              </div>
              <div className=" mb-3 col-md-4">
                <button className=" btn btn-dark" type="submit">Submit  <img src={zer} alt="Logo" style={{ height: "30px" }} /></button>
              </div>

            </form>
          </div>

        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
