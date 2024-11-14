import React from 'react';
import { Link } from 'react-router-dom';
import fle from '../assets/images/1.png';

const Footer = () => {

    return (
        <div className="" style={{ backgroundColor: '#095D89' }}>
            <div className="container" >
                <footer className="py-5">
                    <div className="row">
                        <div className=" col-md-5 mb-3">
                            <h3 className="text-white d-none d-md-flex" style={{ fontSize: '52px',fontFamily: "'Syne', sans-serif" }}>
                                <span style={{
                                    display: 'inline-block',
                                    width: '80px',
                                    height: '60px',
                                    backgroundColor: '#FFB646', // couleur du fond
                                    borderRadius: '50%', // forme de cercle
                                    textAlign: 'center', // centrer la lettre dans le cercle
                                    lineHeight: '60px', // centrer verticalement
                                    fontSize: '52px', // taille de la lettre
                                }}>L</span>et’s change the world together
                            </h3>
                            <h3 className="text-white text-center d-flex d-lg-none" style={{ fontSize: '26px',fontFamily: "'Syne', sans-serif" }}>
                                <span style={{
                                    display: 'inline-block',
                                    width: '30px',
                                    height: '30px',
                                    backgroundColor: '#FFB646', // couleur du fond
                                    borderRadius: '50%', // forme de cercle
                                    textAlign: 'center', // centrer la lettre dans le cercle
                                    lineHeight: '30px', // centrer verticalement
                                    fontSize: '26px', // taille de la lettre
                                }}>L</span>et’s change the world together
                            </h3>

                            <p className='text-white'>Let's Design Inclusive Solutions Together</p>
                            <div className="d-flex  flex-sm-row   py-4 my-4">
                                <p className='text-white'>Follow me       |</p>
                                <ul className="list-unstyled d-flex justify-content-center">
                                    <li className="ms-3"><Link className="link-body-emphasis text-white" to="#"><i class="fa-brands fa-behance"></i></Link></li>
                                    <li className="ms-3"><Link className="link-body-emphasis text-white" to="#"><i class="fa-brands fa-linkedin"></i></Link></li>
                                    <li className="ms-3"><Link className="link-body-emphasis text-white" to="#"><i class="fa-brands fa-instagram"></i></Link></li>
                                    <li className="ms-3"><Link className="link-body-emphasis text-white" to="#"><i class="fa-brands fa-twitter"></i></Link></li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-md-4 mb-3">
                            <div style={{ border: '1px solid rgb(110 110 110)', padding: '20px', height: '200px' }}>
                                <ul className="nav flex-column">
                                    <li className="nav-item mb-2 text-center">
                                        <Link to="#" className="nav-link p-0 text-white">
                                            Let's Work Together <img src={fle} alt="Logo" style={{ height: "30px" }} />
                                        </Link>
                                    </li>
                                </ul>
                                <br /><br /><br />
                                <h6 className='text-center' style={{ color: '#FFB646' }}>hello@constantlaw.me</h6>
                            </div>
                        </div>

                        <div className="col-md-3 mb-3">
                            <div style={{ border: '1px solid rgb(110 110 110)', padding: '20px', }}>
                                <form>
                                    <p className="text-white" style={{ fontSize: '18px' }}>Would you like to be informed about my incredible newsletter?</p>
                                    <br /><br />
                                    <div className="d-flex flex-column flex-sm-row w-100">
                                        <label htmlFor="newsletter1" className="visually-hidden">Email address</label>
                                        <input
                                            id="newsletter1"
                                            type="text"
                                            className="form-control"
                                            style={{ borderTopRightRadius: '0px', borderBottomRightRadius: '0px' }}
                                            placeholder="Drop your email address"
                                        />
                                        <button
                                            className="btn"
                                            style={{
                                                backgroundColor: '#FFB646',
                                                color: '#095D89',
                                                borderTopLeftRadius: '0px',
                                                borderBottomLeftRadius: '0px',
                                                border: '1px solid #000000'
                                            }}
                                            type="button"
                                        >
                                            Subscribe
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>

                    </div>
                    <div className="row">
                        <div className=" col-md-12 mb-3">
                            <h1 className='text-center  d-none d-md-flex' style={{ fontSize: '129px', fontFamily: "'Rammetto One', sans-serif", color:'#FFE9D9' }}>CONSTANT-LAW</h1>
                            <h1 className='text-center d-flex d-lg-none' style={{ fontSize: '38px', fontFamily: "'Rammetto One', sans-serif", color:'#FFE9D9' }}>CONSTANT-LAW</h1>
                        </div>


                    </div>

                    <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
                        <p className='text-white'>&copy;2024 Constant-Law, All Rights Reserved</p>
                        <ul className="list-unstyled d-flex">
                            <li className="nav-item" style={{ marginRight: '5px' }}>
                                <Link className="nav-link text-white" to="" style={{ backgroundColor: "#095D89", borderRadius: "5px", textDecoration: "underline", fontFamily: "'Syne', sans-serif", fontWeight: "bold", border: '1px solid white' }}>En</Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    className="nav-link text-white"
                                    to="#"
                                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                                >
                                    Back to top <i className="fa-solid fa-arrow-up" style={{ color: '#FFB646' }}></i>
                                </Link>
                            </li>


                        </ul>
                    </div>
                </footer>
            </div>
        </div>

    );
};

export default Footer;
