import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Content from '../assets/images/Content.png';
import fle from '../assets/images/1.png';
import idea from '../assets/images/idea.png';
import discovery from '../assets/images/discovery.png';
import design from '../assets/images/design.png';
import copywriting from '../assets/images/copywriting.png';
import { Link } from 'react-router-dom';
import CardPortfolio from '../components/CardPortfolio';
import TestimonialCarousel from '../components/TestimonialCarousel';
import { useTranslation } from 'react-i18next';

import zer from '../assets/images/1.png';

const Home = () => {


    const { t } = useTranslation();
    const titleText = t('23');
    const words = titleText.split(' '); // Split the title into words
    const lastWord = words.pop(); // Get the last word ("Works" or "Travaux")
    const restOfTitle = words.join(' '); // Join the rest of the words

    return (
        <>
            <Header />

            <div className=" " style={{ backgroundColor: "#FFE9D9" }}>
                <div className="container  pt-5 mt-4" >
                    <div class="row align-items-center g-lg-5 py-5">
                        <div class="col-lg-7 text-center text-lg-start">
                            <div className="row align-items-center pb-3">
                                <div class="col-md-2 col-2 ">
                                    <hr className="flex-grow-1 me-3" style={{ borderTop: '2px solid #000000' }} />
                                </div>
                                <div class="col-md-10 col-10">
                                    <h2 className="m-0" style={{ fontSize: '20px', fontFamily: "'Syne', sans-serif", color: '#095D89' }}>{t('8')} ✌</h2>
                                </div>


                            </div>

                            <h1 className="fw-bold lh-1 mb-3 d-none d-md-flex" style={{ fontSize: '50px', fontFamily: "'Rammetto One', sans-serif", color: '#095D89' }}>
                                <span style={{
                                    display: 'inline-block',
                                    width: '60px',
                                    height: '60px',
                                    backgroundColor: '#FFB646',
                                    borderRadius: '50%',
                                    textAlign: 'center',

                                    fontSize: '50px',


                                }}> {t('9').charAt(0)}
                                </span>
                                {t('9').slice(1)}
                            </h1>

                            <h1
                                className="fw-bold lh-1 mb-3 d-flex d-lg-none"
                                style={{
                                    fontSize: '38px',
                                    fontFamily: "'Rammetto One', sans-serif",
                                    color: '#095D89',
                                }}
                            >
                                {t('9').split(' & ')[0]} & <br />
                                {t('9').split(' & ')[1]}
                            </h1>
                            <p className="col-lg-10 fs-4">{t('10')}</p>
                            <div className="d-grid gap-2 d-sm-flex  mb-5">
                                <button type="button" className="btn  btn-lg px-4 me-sm-3" style={{ backgroundColor: "#095D89", color: 'white' }}>{t('11')} <img src={fle} alt="Logo" style={{ height: "30px" }} /></button>

                                <Link to="#" className="nav-link  px-4 py-3" style={{ color: '#095D89' }}>
                                {t('12')} <i class="fa-solid fa-arrow-up-right-from-square"></i>


                                </Link>
                            </div>
                            <div className="d-flex flex-column flex-sm-row  py-4 my-4">
                                <p className='' style={{ fontFamily: "'Syne', sans-serif", color: '#095D89', fontSize: '20px' }}> <i className="fa-solid fa-award"></i> <span> {t('13')}       |</span>
                                </p>
                                <ul className="list-unstyled d-flex justify-content-center">
                                    <li className="ms-3"><Link className="link-body-emphasis " to="#"><i className="fa-brands fa-behance" style={{ color: '#095D89' }}></i></Link></li>
                                    <li className="ms-3"><Link className="link-body-emphasis " to="#"><i className="fa-brands fa-linkedin " style={{ color: '#095D89' }}></i></Link></li>
                                    <li className="ms-3"><Link className="link-body-emphasis " to="#"><i className="fa-brands fa-instagram" style={{ color: '#095D89' }}></i></Link></li>
                                    <li className="ms-3"><Link className="link-body-emphasis " to="#"><i className="fa-brands fa-twitter" style={{ color: '#095D89' }}></i></Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-10 mx-auto col-lg-5">
                            <img src={Content} className="d-block mx-lg-auto img-fluid" alt="" width="700" height="500" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="container  " >
                <div class="row align-items-center g-lg-5 py-5">
                    <div className="col-md-5">
                        <p className="" style={{ fontFamily: "'Syne One', sans-serif", color: '#FFB646' }}>{t('14')} </p>
                        <h1 className="fw-bold lh-1 mb-3 " style={{ fontSize: '50px', fontFamily: "'Syne One', sans-serif", color: '#095D89' }}>
                            <span style={{
                                display: 'inline-block',
                                width: '60px',
                                height: '60px',
                                backgroundColor: '#FFB646',
                                borderRadius: '50%',
                                textAlign: 'center',

                                fontSize: '50px',

                            }}>{t('15').charAt(0)}</span>{t('15').slice(1)}
                        </h1>
                        <p className="" style={{ fontFamily: "'Syne One', sans-serif" }}>
                        {t('16')}
                        </p>

                    </div>
                </div>
                <div className="row">
                    <div className="col-md-1"></div>
                    <div className="col-md-2 col-6 mb-3">
                        <p className="text-center pb-4">

                            <img src={discovery} alt="Logo" style={{ height: "55px" }} />
                        </p>
                        <h3 className="text-center" style={{ fontFamily: "'Poppins', sans-serif", color: '#282D46' }}>{t('17')}</h3>
                    </div>
                    <div className="col-md-2 col-6 mb-3">
                        <p className="text-center pb-4">

                            <img src={copywriting} alt="Logo" style={{ height: "55px" }} />
                        </p>
                        <h3 className="text-center" style={{ fontFamily: "'Poppins', sans-serif", color: '#282D46' }}>{t('18')}</h3>
                    </div>
                    <div className="col-md-2 col-6 mb-3">
                        <p className="text-center pb-4">

                            <img src={idea} alt="Logo" style={{ height: "55px" }} />
                        </p>
                        <h3 className="text-center" style={{ fontFamily: "'Poppins', sans-serif", color: '#282D46' }}>{t('19')}</h3>
                    </div>
                    <div className="col-md-2 col-6 mb-3">
                        <p className="text-center pb-4">

                            <img src={design} alt="Logo" style={{ height: "55px" }} />
                        </p>
                        <h3 className="text-center" style={{ fontFamily: "'Poppins', sans-serif", color: '#282D46' }}>{t('20')}</h3>
                    </div>
                    <div className="col-md-2 col-6 mb-3">
                        <p className="text-center pb-4">

                            <img src={design} alt="Logo" style={{ height: "55px" }} />
                        </p>
                        <h3 className="text-center" style={{ fontFamily: "'Poppins', sans-serif", color: '#282D46' }}>{t('21')}</h3>
                    </div>
                    <div className="col-md-1"></div>
                </div>
            </div>

            <div className="pt-3 mb-4" style={{ backgroundColor: "#FFE9D9" }}>
                <div className="container">
                    <p className="" style={{ fontFamily: "'Syne ', sans-serif", color: '#FFB646' }}>{t('22')}</p>
                    <h1 className="fw-bold lh-1 mb-3" style={{ fontSize: '50px', fontFamily: "'Syne ', sans-serif", color: '#095D89' }}>
                        My recent
                        <span style={{
                            display: 'inline-block',
                            width: '60px',
                            height: '60px',
                            backgroundColor: '#FFB646',
                            borderRadius: '50%',
                            textAlign: 'center',
                            fontSize: '50px'
                        }}>W</span>orks
                    </h1>
                    <CardPortfolio />
                    <div className="col-md-12 pb-5">
                        <Link to="/projects" className="btn w-100" style={{ color: 'white', backgroundColor: '#095D89', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            See all <img src={zer} alt="..." style={{ height: "20px", width: "20px", marginLeft: "8px" }} />
                        </Link>
                    </div>
                </div>
            </div>

            <TestimonialCarousel />

            <Footer />

        </>
    );
};

export default Home;
